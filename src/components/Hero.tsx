import { ArrowRightCircle, Building2, User, Users } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Image1 from "@/assets/images/img1.jpeg";
import Image2 from "@/assets/images/img2.jpeg";
import TrustedCompany from "./TrustedCompany";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-background px-5 pt-10 md:px-20 flex-1"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 w-full space-y-6">
          <p className="text-sm rounded-full py-2 px-2 border w-fit">
            Employee training and consultant
          </p>
          <h1 className="text-5xl font-medium leading-14">
            Empowering Excellence through Training and Consulting
          </h1>
          <p>
            We design and deliver competency-based training programs tailored to
            enhance employee skills
          </p>
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-2">
            <Link href="solutions text-white">
              <Button>
                Start the Transformation <ArrowRightCircle />
              </Button>
            </Link>
            <Link href="contact">
              <Button variant={"outline"}>Contact Us</Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-between py-4 px-4 border rounded-md gap-4 ">
            <p className="flex gap-x-2  items-center">
              <User size={20} />
              Individuals
            </p>
            <p className="flex gap-x-2">
              <Users size={20} />
              Scaling Companies
            </p>
            <p className="flex gap-x-2">
              <Building2 size={20} />
              Enterprise
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full h-full md:px-4 py-4 space-y-2">
          <div className="w-full h-[50vh] relative py-2">
            <Image
              className="rounded-lg object-center object-cover"
              fill
              priority
              alt="hero-image-1"
              src={Image1}
            />
          </div>
          <div className="w-full  py-2 h-[30vh] relative">
            <Image
              className="rounded-lg object-center object-cover"
              fill
              priority
              alt="logo"
              src={Image2}
            />
          </div>
        </div>
      </div>
      <TrustedCompany />
    </section>
  );
};
export default Hero;
