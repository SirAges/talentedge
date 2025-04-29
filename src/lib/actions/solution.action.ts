"use server";
import { asc, count, desc, eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { solutions } from "@/database/schema";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
import { SolutionsSchemaType } from "../schema";

export const addSolution = async ({ data }: { data: SolutionsSchemaType }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db
      .insert(solutions)
      .values({ ...data, industriesServed: data.industriesServed.split(",") });
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

export const getAllSolutions = async ({
  page = 1,
  limit = 10,
  order = "desc",
}: {
  page?: number;
  order?: "asc" | "desc";
  sort?: keyof typeof solutions;
  limit?: number;
}) => {
  const orderDirection =
    order === "desc" ? desc(solutions.createdAt) : asc(solutions.createdAt);
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  const offSet = (page - 1) * limit;

  const allSolutions = await db
    .select()
    .from(solutions)
    .limit(limit)
    .offset(offSet)
    .orderBy(orderDirection);
  const result = await db.select({ count: count() }).from(solutions);
  const totalSolutions = result[0].count;
  const hasNextPage = offSet + page < result[0].count;
  return {
    data: allSolutions,
    nextPage: hasNextPage ? page + 1 : null,
    totalSolutions,
  };
};

export const getSolution = async ({ solutionId }: { solutionId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    const solution = await db
      .select()
      .from(solutions)
      .where(eq(solutions.id, solutionId))
      .limit(1);

    return {
      success: true,
      data: solution,
      message: "solution fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const updateSolution = async ({
  solutionId,
  data,
}: {
  solutionId: string;
  data: SolutionsSchemaType;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db
      .update(solutions)
      .set({ ...data, industriesServed: data.industriesServed.split(",") })
      .where(eq(solutions.id, solutionId));
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

export const deleteSolution = async ({
  solutionId,
}: {
  solutionId: string;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    await db.delete(solutions).where(eq(solutions.id, solutionId));
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
