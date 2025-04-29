import { COMPANY_NAME } from "@/lib/constants";
import { FacebookIcon, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { courses } from "@/lib/data";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section
      id="footer"
      className="bg-foreground text-background font-extralight px-4 py-4 space-y-4"
    >
      <div className="flex gap-x-5">
        <div className="flex-3 space-y-2">
          <h1 className="max-w-3/4 text-2xl">
            Empowering Excellence in Workspace Development and Strategic
            Consulting, Your Partner for Success
          </h1>
          <div className="flex items-center gap-x-2">
            <FacebookIcon strokeWidth={1} />
            <Twitter strokeWidth={1} />
            <Instagram strokeWidth={1} />
            <Youtube strokeWidth={1} />
          </div>
        </div>
        <div className="flex-1 flex-col ">
          <h3 className="opacity-50 pb-4">Company Info</h3>
          <div className="space-y-2">
            {[
              "login",
              "about us",
              "Global Locations",
              "Terms",
              "Privacy",
              "Parners",
            ].map((info) => (
              <p
                key={info}
                className="cursor-pointer"
              >
                {info}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-1 ">
          <h3 className="opacity-50 pb-4">Learn more</h3>
          <div className="space-y-2">
            {courses.slice(0, 4).map(({ title, id }) => (
              <p
                key={id}
                className="cursor-pointer"
              >
                {title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex border-y border-y-background/40 md:px-10">
        <div className="flex gap-x-2 items-center flex-1  py-2">
          <div className="w-7 h-7 relative ">
            <Image
              className="rounded-full object-center object-cover"
              fill
              priority
              alt="logo"
              src={Logo}
            />
          </div>
          <h1 className="text-md">{COMPANY_NAME}</h1>
        </div>
        <div className="flex items-center gap-x-4 text-xs px-4 ">
          <p className="capitalize border-r pr-4">Terms Of Use</p>
          <p className="capitalize border-r pr-4">Privacy Policy</p>
          <p className="capitalize ">Security</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between text-xs gap-2">
        <p>Copyright&copy;{year}</p>
        <p>Designed By Ekele Stephen</p>
      </div>
    </section>
  );
};
export default Footer;
