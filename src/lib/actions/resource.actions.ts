"use server";
import { asc, count, desc, eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { resources } from "@/database/schema";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
import { ResourceSchemaType } from "../schema";

export const addResource = async ({ data }: { data: ResourceSchemaType }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db.insert(resources).values(data);
    return {
      success: true,
      message: "resources fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const getAllResources = async ({
  page = 1,
  limit = 10,
  order = "desc",
}: {
  page?: number;
  order?: "asc" | "desc";
  sort?: keyof typeof resources;
  limit?: number;
}) => {
  const orderDirection =
    order === "desc" ? desc(resources.createdAt) : asc(resources.createdAt);
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  const offSet = (page - 1) * limit;

  const allCourses = await db
    .select()
    .from(resources)
    .limit(limit)
    .offset(offSet)
    .orderBy(orderDirection);
  const result = await db.select({ count: count() }).from(resources);
  const totalCourses = result[0].count;
  const hasNextPage = offSet + page < result[0].count;
  return {
    data: allCourses,
    nextPage: hasNextPage ? page + 1 : null,
    totalCourses,
  };
};

export const getResource = async ({ resourceId }: { resourceId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    const resource = await db
      .select()
      .from(resources)
      .where(eq(resources.id, resourceId))
      .limit(1);

    return {
      success: true,
      data: resource,
      message: "resource fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const updateResource = async ({
  resourceId,
  data,
}: {
  resourceId: string;
  data: ResourceSchemaType;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db.update(resources).set(data).where(eq(resources.id, resourceId));
    return {
      success: true,
      message: "resources fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const deleteResource = async ({
  resourceId,
}: {
  resourceId: string;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    await db.delete(resources).where(eq(resources.id, resourceId));
    return {
      success: true,
      message: "resources fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};
