"use server";
import { asc, count, desc, eq, } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { consultants } from "@/database/schema";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
import { ConsultantSchemaType } from "../schema";

export const addConsultant = async ({
  data,
}: {
  data: ConsultantSchemaType;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db.insert(consultants).values({
      ...data,
      qualifications: data.qualifications.split(","),
      expertise: data.expertise.split(","),
      contact: {
        email: data.email as string,
        phone: data.phone as string,
        linkedIn: data.linkedIn as string,
      },
    });
    return {
      success: true,
      message: "consultants fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const getAllConsultants = async ({
  page = 1,
  limit = 10,
  order = "desc",
}: {
  page?: number;
  order?: "asc" | "desc";
  sort?: keyof typeof consultants;
  limit?: number;
}) => {
  const orderDirection =
    order === "desc" ? desc(consultants.createdAt) : asc(consultants.createdAt);
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  const offSet = (page - 1) * limit;

  const allConsultants = await db
    .select()
    .from(consultants)
    .limit(limit)
    .offset(offSet)
    .orderBy(orderDirection);
  const result = await db.select({ count: count() }).from(consultants);
  const totalConsultants = result[0].count;
  const hasNextPage = offSet + page < result[0].count;
  return {
    data: allConsultants,
    nextPage: hasNextPage ? page + 1 : null,
    totalConsultants,
  };
};

export const getConsultant = async ({
  consultantId,
}: {
  consultantId: string;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    const consultant = await db
      .select()
      .from(consultants)
      .where(eq(consultants.id, consultantId))
      .limit(1);

    return {
      success: true,
      data: consultant,
      message: "consultant fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const updateConsultant = async ({
  consultantId,
  data,
}: {
  consultantId: string;
  data: ConsultantSchemaType;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db
      .update(consultants)
      .set({
        ...data,
        qualifications: data.qualifications.split(","),
        expertise: data.expertise.split(","),
        contact: {
          email: data.email!,
          phone: data.phone as string,
          linkedIn: data.linkedIn as string,
        },
      })
      .where(eq(consultants.id, consultantId));
    return {
      success: true,
      message: "consultants fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const deleteConsultant = async ({
  consultantId,
}: {
  consultantId: string;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    await db.delete(consultants).where(eq(consultants.id, consultantId));
    return {
      success: true,
      message: "consultants fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};
