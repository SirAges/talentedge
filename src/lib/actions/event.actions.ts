"use server";
import { asc, count, desc, eq, } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { events } from "@/database/schema";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
import { EventSchemaType } from "../schema";

export const addEvent = async ({ data }: { data: EventSchemaType }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db.insert(events).values(data);
    return {
      success: true,
      message: "events fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const getAllEvents = async ({
  page = 1,
  limit = 10,
  order = "desc",
}: {
  page?: number;
  order?: "asc" | "desc";
  sort?: keyof typeof events;
  limit?: number;
}) => {
  const orderDirection =
    order === "desc" ? desc(events.createdAt) : asc(events.createdAt);
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  const offSet = (page - 1) * limit;

  const allCourses = await db
    .select()
    .from(events)
    .limit(limit)
    .offset(offSet)
    .orderBy(orderDirection);
  const result = await db.select({ count: count() }).from(events);
  const totalCourses = result[0].count;
  const hasNextPage = offSet + page < result[0].count;
  return {
    data: allCourses,
    nextPage: hasNextPage ? page + 1 : null,
    totalCourses,
  };
};

export const getEvent = async ({ eventId }: { eventId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    const event = await db
      .select()
      .from(events)
      .where(eq(events.id, eventId))
      .limit(1);

    return {
      success: true,
      data: event,
      message: "event fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const updateEvent = async ({
  eventId,
  data,
}: {
  eventId: string;
  data: EventSchemaType;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db.update(events).set(data).where(eq(events.id, eventId));
    return {
      success: true,
      message: "events fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const deleteEvent = async ({ eventId }: { eventId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    await db.delete(events).where(eq(events.id, eventId));
    return {
      success: true,
      message: "events fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};
