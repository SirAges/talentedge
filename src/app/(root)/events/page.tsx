"use client";
import Footer from "@/components/Footer";
import ScreenLoader from "@/components/ScreenLoader";

import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightCircle,
  ArrowUpDown,
} from "lucide-react";
import { useEffect, useState } from "react";

const Page = () => {
  const [events, setEvents] = useState<EventType[]>([]);

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllEvents({});
      setEvents(data);
    };
    fetchData();
    return () => {};
  }, [page, sort]);

  return (
    <main className="">
      {!events.length && (
        <ScreenLoader
          open={true}
          message="getting solutions"
        />
      )}
      <div className="bg-background py-10 md:px-10">
        <h1 className="font-semibold text-3xl capitalize text-center">
          {events.length} Events you can&apos;t miss
        </h1>
      </div>
      <div className="sticky top-0 z-50 px-10 pt-5 bg-background">
       
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
        {events.map(
          ({ date, location, mode, description, id, isFree, price, title }) => (
            <div
              key={id}
              className=" w-full md:w-1/3 py-2 px-2 "
            >
              <div className="px-2 py-4 rounded-lg border w-full h-full space-y-2">
                <p
                  className={cn(
                    "capitalize",
                    isFree ? "text-green-600" : "text-primary"
                  )}
                >
                  {isFree ? "free" : "paid"}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="flex-1 pr-2 font-medium ">{title}</h3>
                  <p className="text-xs text-primary">{mode}</p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <p>{location}</p>
                  <p>{date}</p>
                </div>

                <p>{description}</p>
                <Button>
                  &#8358;{price} Join
                  <ArrowRightCircle />
                </Button>
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
