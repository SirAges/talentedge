import { ArrowRightCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Finding = () => {
  return (
    <section
      id="program"
      className=" px-4 py-10 md:px-20 flex flex-col  space-y-5 items-center"
    >
      <div className="space-y-3 md:w-1/2 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Ready for Training or Consulting to Improve Your Career
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex-1 bg-background  px-5 py-10 space-y-4 rounded-lg">
          <h3 className="font-medium text-2xl">Find the Approprait Training</h3>
          <p>
            As easy as ABC find the course that fits your current company goal
          </p>
          <Link href="/courses">
            <Button>
              Find Training
              <ArrowRightCircle />
            </Button>
          </Link>
        </div>
        <div className="flex-1 bg-background  px-5 py-10 space-y-4 rounded-lg">
          <h3 className="font-medium text-2xl">
            Get your employee Consultation
          </h3>
          <p>Speak with our consultants and be well guided</p>

          <Link href="/consultants">
            <Button>
              Request a Schedule
              <ArrowRightCircle />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Finding;
