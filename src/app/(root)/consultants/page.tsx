"use client";
import Footer from "@/components/Footer";
import ScreenLoader from "@/components/ScreenLoader";
import { getAllConsultants } from "@/lib/actions/consultant.actions";
import {
  ArrowLeft,
  ArrowRight,
  ArrowRightCircle,
  ArrowUpDown,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

const Page = () => {
  const [consultants, setConsultants] = useState<ConsultantType[]>([]);

  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<"desc" | "asc" | undefined>("desc");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllConsultants({ page, order });
      setConsultants(data);
    };
    fetchData();
    return () => {};
  }, [page, order]);

  return (
    <main className="">
      {!consultants.length && (
        <ScreenLoader
          open={true}
          message="getting consultants"
        />
      )}
      <div className="bg-background py-10 md:px-10">
        <h1 className="font-semibold text-3xl capitalize text-center">
          Our Experienced and Expert Consultants
        </h1>
      </div>
      <div className="sticky top-0 z-50 px-10 pt-5 bg-background">
        <div className="flex items-center justify-between py-2 ">
          <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-background/70">
            <ArrowUpDown
              onClick={() =>
                setOrder((prev) => (prev === "desc" ? "asc" : "desc"))
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
        {consultants.map(
          ({ bio, expertise, name, qualifications, id, title }) => (
            <div
              key={id}
              className=" w-full md:w-1/2 py-2 px-2 "
            >
              <div className="px-2 py-4 rounded-lg border w-full h-full space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="flex-1 pr-2 font-medium ">{name}</h3>
                  <p className="text-xs text-primary">{title}</p>
                </div>
                <div className="flex flex-col tracking-widest font-semibold gap-y-2 text-xs px-2 py-2">
                  <h3 className="font-semibold tracking-widest text-lg text-primary border-x  w-fit px-2">
                    Qualifications
                  </h3>
                  {qualifications.map((qf) => (
                    <div
                      key={qf}
                      className="flex items-center gap-x-2"
                    >
                      <ArrowRightCircle
                        size={16}
                        className="text-primary"
                      />
                      <p>{qf}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col tracking-widest font-semibold gap-y-2 text-xs px-2 py-2">
                  <h3 className="font-semibold tracking-widest text-lg text-primary border-x  w-fit px-2">
                    Expertise
                  </h3>
                  {expertise.map((ex) => (
                    <div
                      key={ex}
                      className="flex items-center gap-x-2"
                    >
                      <ArrowRightCircle
                        size={16}
                        className="text-primary"
                      />
                      <p>{ex}</p>
                    </div>
                  ))}
                </div>
                <p>{bio}</p>
                <div className="flex items-center gap-x-5 px-2 py-2 rounded-md border w-fit text-primary">
                  <Phone
                    size={20}
                    className="cursor-pointer"
                  />
                  <Mail
                    size={20}
                    className="cursor-pointer"
                  />
                  <Linkedin
                    size={20}
                    className="cursor-pointer"
                  />
                </div>
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
