"use client";
import { COMPANY_NAME } from "@/lib/constants";
import { adminNavigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section
      id="admin-sidebar"
      className="col-span-1 sticky top-0 h-full max-h-screen py-4"
    >
      <h1 className="px-3 py-2 text-primary tracking-[0.5rem] font-semibold uppercase">
        {COMPANY_NAME}
      </h1>
      <div className="flex flex-col justify-between gap-y-2 flex-1">
        {adminNavigation.map(({ id, link, name }) => {
          const isActive =
            (link !== "/admin-panel" &&
              pathname.includes(link) &&
              link.length > 1) ||
            pathname === link;
          return (
            <Link
              href={link}
              key={id}
              className={cn(
                "px-3 py-4 bg-primary w-fit hover:w-full hover:bg-primary/80 text-white rounded-r-full",
                isActive && "w-full"
              )}
            >
              {name}
            </Link>
          );
        })}
        <div className="whitespace-nowrap gap-x-1 items-center flex px-2">
          <p className="w-7 h-7 rounded-full flex items-center justify-center bg-primary text-white">
            JN
          </p>
          <h3 className="  px-3 text-xs">
            Welcome <strong>Jonathan</strong>
          </h3>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
