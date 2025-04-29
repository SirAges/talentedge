"use server";
import { asc, count, desc, eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { schedules } from "@/database/schema";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
import { ScheduleSchemaType } from "../schema";
export const addSchedule = async ({ data }: { data: ScheduleType }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    await db.insert(schedules).values(data);
    return {
      success: true,
      message: "solutions fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const getAllSchedules = async ({
  page = 1,
  limit = 10,
  order = "desc",
}: {
  page: number;
  order: "asc" | "desc";
  sort?: keyof typeof schedules;
  limit?: number;
}) => {
  const orderDirection =
    order === "desc" ? desc(schedules.createdAt) : asc(schedules.createdAt);
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  const offSet = (page - 1) * limit;

  const allSchedules = await db
    .select()
    .from(schedules)
    .limit(limit)
    .offset(offSet)
    .orderBy(orderDirection);
  const result = await db.select({ count: count() }).from(schedules);
  const totalSchedule = result[0].count;
  const hasNextPage = offSet + page < result[0].count;
  return {
    data: allSchedules,
    nextPage: hasNextPage ? page + 1 : null,
    totalSchedule,
  };
};
export const getSchedule = async ({ scheduleId }: { scheduleId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    const schedule = await db
      .select()
      .from(schedules)
      .where(eq(schedules.id, scheduleId))
      .limit(1);

    return {
      success: true,
      data: schedule,
      message: "schedule fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const getUserSchedule = async ({ userId }: { userId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    const userSchedules = await db
      .select()
      .from(schedules)
      .where(eq(schedules.userId, userId));
    return {
      data: userSchedules,
      success: true,
      message: "schedules fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const updateSchedule = async ({
  scheduleId,
  data,
}: {
  scheduleId: string;
  data: ScheduleSchemaType;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db.update(schedules).set(data).where(eq(schedules.id, scheduleId));
    return {
      success: true,
      message: "schedules fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const deleteSchedule = async ({ userId }: { userId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    await db.delete(schedules).where(eq(schedules.userId, userId));
    return {
      success: true,
      message: "schedules fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};
