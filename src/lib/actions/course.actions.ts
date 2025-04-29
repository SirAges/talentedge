"use server";
import { asc, count, desc, eq } from "drizzle-orm";
import { db } from "@/database/drizzle";
import { courses } from "@/database/schema";
import { headers } from "next/headers";
import ratelimit from "@/lib/ratelimit";
import { redirect } from "next/navigation";
import { CourseSchemaType } from "../schema";

export const addCourse = async ({ data }: { data: CourseSchemaType }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db
      .insert(courses)
      .values({ ...data, modules: data.modules.split(",") });
    return {
      success: true,
      message: "courses fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const getAllCourses = async ({
  page = 1,
  limit = 10,
  order = "desc",
}: {
  page?: number;
  order?: "asc" | "desc";
  sort?: keyof typeof courses;
  limit?: number;
}) => {
  const orderDirection =
    order === "desc" ? desc(courses.createdAt) : asc(courses.createdAt);
  const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) return redirect("/too-fast");
  const offSet = (page - 1) * limit;

  const allCourses = await db
    .select()
    .from(courses)
    .limit(limit)
    .offset(offSet)
    .orderBy(orderDirection);
  const result = await db.select({ count: count() }).from(courses);
  const totalCourses = result[0].count;
  const hasNextPage = offSet + page < result[0].count;
  return {
    data: allCourses,
    nextPage: hasNextPage ? page + 1 : null,
    totalCourses,
  };
};

export const getCourse = async ({ courseId }: { courseId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    const course = await db
      .select()
      .from(courses)
      .where(eq(courses.id, courseId))
      .limit(1);

    return {
      success: true,
      data: course,
      message: "course fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const updateCourse = async ({
  courseId,
  data,
}: {
  courseId: string;
  data: CourseSchemaType;
}) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");

    await db
      .update(courses)
      .set({ ...data, modules: data.modules.split(",") })
      .where(eq(courses.id, courseId));
    return {
      success: true,
      message: "courses fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};

export const deleteCourse = async ({ courseId }: { courseId: string }) => {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) return redirect("/too-fast");
    await db.delete(courses).where(eq(courses.id, courseId));
    return {
      success: true,
      message: "courses fetched successfully",
    };
  } catch (error) {
    console.log("error", error);
    //@ts-expect-error error.message
    return { error: true, message: error.message };
  }
};
