import { ArrowRightCircle } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="py-10 px-4 md:px-20 flex flex-col items-center space-y-10"
    >
      <div className="md:max-w-2/3 space-y-3">
        <h1 className="text-3xl md:text-4xl text-center font-semibold">
          Comprehensive Training and Consulting Solutions
        </h1>
        <p className="text-center">
          We help organizations design effective Key Performance Indicators
          (KPIs), build data-driven performance review systems, and implement
          feedback mechanisms that drive results and foster accountability.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  gap-x-10 w-full ">
        <div className="flex flex-col flex-1 bg-background px-5 py-5 space-y-4 rounded-lg justify-between">
          <h3 className="font-medium text-2xl py-5">
            Our Approach to Leadership Development
          </h3>
          <div className="grow space-y-3">
            <p>
              Navigating change through strategic restructuring, staff
              alignment, and stakeholder communication.
            </p>
            <p>
              Through structured mentorship programs, executive coaching, and
              skills gap analysis, we ensure leadership continuity and improved
              organizational performance.
            </p>
          </div>

          <Link
            href="courses"
            className={cn(buttonVariants({ variant: "outline" }), "w-fit")}
          >
            Show more <ArrowRightCircle />
          </Link>
        </div>
        <div className="flex-1 bg-background  px-5 py-5 space-y-4 rounded-lg">
          <h3 className="font-medium text-2xl py-5">
            Leadership development expands a leader&apos;s impact
          </h3>
          <div className="flex-1 space-y-3">
            <p className="font-medium">
              We organize custom off-site retreats, leadership bootcamps, and
              wellness-focused programs aimed at strengthening internal
              collaboration and reducing burnout.
            </p>
            <ul className="px-4 space-y-2">
              <li className="list-disc">
                Build their character and competence
              </li>
              <li className="list-disc">
                See their purpose and correct it with key business goals
              </li>
              <li className="list-disc">
                Device emotional resilience and agility
              </li>
            </ul>
            <p>
              Our methodology combines workshops, real-world scenarios, and
              continuous learning strategies to empower your workforce.
            </p>
          </div>
          <Link
            href="solutions"
            className={cn(buttonVariants())}
          >
            Show more Solutions <ArrowRightCircle />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
