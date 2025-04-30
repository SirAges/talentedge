import aboutImage from "@/assets/images/img1.jpeg";
import { COMPANY_NAME } from "@/lib/constants";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
const coreValues = [
  "Excellence – We deliver quality in every training and service.",
  "Integrity – We build trust through honesty and transparency.",
  "Innovation – We embrace change and seek continuous improvement.",
  "Empowerment – We equip people to thrive.",
  "Collaboration – We grow stronger through partnerships.",
];

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-2 gap-x-5 px-5 ">
      <div className="flex relative h-44 mb-5 md:mb-0 md:h-[calc(100vh-4rem)] w-full">
        <Image
          src={aboutImage}
          fill
          alt="about image"
          className="object-cover rounded-lg"
        />
      </div>
      <div className=" flex flex-col gap-y-2 px-2">
        <h1 className="text-2xl font-semibold  capitalize">Who We Are</h1>
        <p>
          At {COMPANY_NAME}, we empower organizations through transformative
          training and professional development. Since 2011, we&apos;ve
          partnered with businesses, government agencies, and non-profits to
          boost employee performance, leadership capabilities, and
          organizational growth.
        </p>
        <h1 className="text-2xl font-semibold  capitalize">Mission</h1>
        <p>
          To unlock human potential and drive business results through
          innovative, customized learning solutions.
        </p>
        <h1 className="text-2xl font-semibold  capitalize">Vision</h1>
        <p>
          To become the leading partner in employee development and
          organizational excellence across Africa and beyond.
        </p>
        <h1 className="text-2xl font-semibold  capitalize">Core Values</h1>
        <ul className="px-5 flex-1 flex flex-col gap-y-2">
          {coreValues.map((value) => (
            <li
              key={value}
              className="flex gap-x-2 items-center"
            >
              <ArrowRightCircle
                size={14}
                className="text-primary"
              />
              <p className="">
                <span className="font-semibold">{value.split("–")[0]} </span>:
                {value.split("–")[1]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default page;
