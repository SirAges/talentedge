import {
  Book,
  Captions,
  GlassWater,
  Hourglass,
  LucideProps,
  PiIcon,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const TrustedCompany = () => {
  return (
    <section
      id="trusted-company"
      className="flex flex-wrap items-center justify-center md:justify-between px-2 md:px-10 gap-2 py-10"
    >
      <Company
        Icon={Book}
        name="Quotient"
      />
      <Company
        Icon={GlassWater}
        name="Sisyphus"
      />
      <Company
        Icon={Hourglass}
        name="Hourglass"
      />
      <Company
        Icon={Captions}
        name="Capsule"
      />
      <Company
        Icon={PiIcon}
        name="Spherule"
      />
    </section>
  );
};
export default TrustedCompany;
const Company = ({
  Icon,
  name,
}: {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  name: string;
}) => {
  return (
    <p className="flex items-center gap-x-2 text-xs">
      <Icon size={20} />
      {name}
    </p>
  );
};
