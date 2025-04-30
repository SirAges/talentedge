import { ArrowRightCircle, PlayCircle } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Image1 from "@/assets/images/img2.jpeg";
import Image from "next/image";
import { getAllCourses } from "@/lib/actions/course.actions";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { use } from "react";

const Programs = () => {
  const courses = use(getAllCourses({ limit: 6, order: "desc" }));

  const course = courses.data[3];
  return (
    <section
      id="program-select"
      className="md:px-20 px-4 py-10 flex flex-col"
    >
      <div className="space-y-3 md:w-2/5">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Professional Development Programs
        </h1>
        <p className="">
          Most requested programs that have positively transformed many
          businesses.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  gap-10 w-full ">
        <div className="flex flex-col flex-1  px-5 py-10 space-y-4 rounded-lg justify-between">
          {courses.data.map(({ title, id }) => (
            <div
              key={id}
              className="flex items-center justify-between border rounded-lg px-2 py-3 cursor-pointer"
            >
              <p>{title}</p>
              <Link href={"/courses"}>
                <PlayCircle />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-background py-5 px-5  space-y-4 rounded-lg">
          <div className="w-full h-[40vh] relative">
            <Image
              className="rounded-lg object-center object-cover"
              fill
              priority
              alt="image"
              src={Image1}
            />
          </div>
          <h3 className="font-medium text-2xl">{course.title}</h3>
          <div className="flex-1 space-y-3">
            <p>{course.description}</p>
          </div>

          <Link
            href={"/courses"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Learn more
            <ArrowRightCircle />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Programs;
