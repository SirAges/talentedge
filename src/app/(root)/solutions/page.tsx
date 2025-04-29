"use client";
import Footer from "@/components/Footer";
import ScreenLoader from "@/components/ScreenLoader";
import ScheduleForm from "@/components/SheduleForm";
import { addSchedule } from "@/lib/actions/schedule.actions";
import { getAllSolutions } from "@/lib/actions/solution.action";
import { ScheduleSchemaType } from "@/lib/schema";
import { ArrowLeft, ArrowRight, ArrowUpDown } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [solutionId, setSolutionId] = useState<string | null>(null);
  const [solutions, setSolutions] = useState<SolutionType[]>([]);

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("desc");
  const session = useSession();
  const userId = session?.data?.user?.id as string;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllSolutions({});
      setSolutions(data);
    };
    fetchData();
    return () => {};
  }, [page, sort]);

  const onSubmit = async (data: ScheduleSchemaType) => {
    try {
      const { message } = await addSchedule({
        //@ts-expect-error just disable
        data: { ...data, userId, solutionId },
      });
      toast(message);
    } catch (error) {
      //@ts-expect-error error type
      if (error?.data) {
        //@ts-expect-error error type
        toast(error?.data?.message);
      }
    }
  };
  return (
    <main className="">
      {!solutions.length && (
        <ScreenLoader
          open={true}
          message="getting solutions"
        />
      )}
      <div className="bg-background py-10 md:px-10">
        <h1 className="font-semibold text-3xl capitalize text-center">
          {solutions.length} Well prepared solutions for individuals and
          companies
        </h1>
      </div>
      <div className="sticky top-12 z-50 px-10 pt-5 bg-background">
        <div className="flex items-center justify-between py-2 ">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
            <ArrowUpDown
              onClick={() =>
                setSort((prev) => (prev === "desc" ? "asc" : "desc"))
              }
              className="cursor-pointer"
              size={14}
            />
          </div>
          <div className="flex items-center gap-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
              <ArrowLeft
                onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
                className="cursor-pointer"
                size={14}
              />
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
              <ArrowRight
                onClick={() => setPage((prev) => prev)}
                className="cursor-pointer"
                size={14}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-2 py-2 md:px-10 md:py-10">
        {solutions.map(
          ({ category, description, id, title, industriesServed }) => (
            <div
              onClick={() => setSolutionId(id)}
              key={id}
              className=" w-full md:w-1/3 py-2 px-2 "
            >
              <div className="px-2 py-4 rounded-lg border w-full h-full space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="flex-1 pr-2 font-medium ">{title}</h3>
                  <p className="text-xs text-primary">{category}</p>
                </div>
                <div className="flex items-center gap-x-2 text-xs px-2 py-2">
                  {industriesServed.map((industry) => (
                    <p key={industry}>{industry}</p>
                  ))}
                </div>
                <p>{description}</p>

                <ScheduleForm onSubmit={onSubmit} />
              </div>
            </div>
          )
        )}
      </div>
      <Footer />
    </main>
  );
};
export default Page;
