import { ArrowRightCircle } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { getAllCourses } from "@/lib/actions/course.actions";
import Link from "next/link";
import { use } from "react";

const Programs2 = () => {
  const courses = use(getAllCourses({ limit: 4, order: "asc" }));
  return (
    <section
      id="program"
      className="py-10 px-4 md:px-20 flex flex-col  space-y-5 items-center"
    >
      <div className="space-y-3 md:w-1/2 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Programs to Elevate Your Workforce
        </h1>
        <p className="">Top four Programs to boost your workforce this 2025</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.data.map(({ id, isFree, title, description }) => (
          <div
            key={id}
            className="flex-1 bg-background  px-5 py-10 space-y-4 rounded-lg"
          >
            <p
              className={cn(
                "text-primary capitalize",
                isFree && "text-green-600"
              )}
            >
              {isFree ? "free" : "paid"} Program
            </p>
            <h3 className="font-medium text-2xl">{title}</h3>
            <p className="text-justify">{description}</p>

            <Link
              href={"/courses"}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Learn more
              <ArrowRightCircle />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Programs2;
