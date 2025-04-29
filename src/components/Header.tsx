import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { COMPANY_NAME } from "@/lib/constants";
import { navigation } from "@/lib/data";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/auth";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = async () => {
  const session = await auth();
  return (
    <>
      <header
        id="header"
        className="z-50 hidden md:flex bg-background sticky top-0 items-center h-12 px-3 lg:px-10  gap-x-2"
      >
        <div className="w-7 h-7 relative">
          <Image
            className="rounded-full object-center object-cover"
            fill
            priority
            alt="logo"
            src={Logo}
          />
        </div>
        <h1 className="font-semibold text-md">{COMPANY_NAME}</h1>
        <nav className="flex flex-1 justify-center items-center gap-x-5">
          {navigation.map(({ id, link, name }) => (
            <Link
              key={id}
              href={link}
            >
              {name}
            </Link>
          ))}
        </nav>
        {!session ? (
          <div className="flex gap-x-2">
            <Link
              href={"/auth/sign-in"}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Login
            </Link>
            <Link
              href={"/auth/sign-up"}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Register
            </Link>
          </div>
        ) : (
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "link" }),
              "hover:no-underline"
            )}
          >
            About Us
          </Link>
        )}
      </header>
      <header
        id="header"
        className="z-50 md:hidden flex bg-background sticky top-0 items-center h-12 px-3 lg:px-10  gap-x-2"
      >
        <Sheet>
          <div className="flex items-center justify-between w-full">
            <Link
              href={"/"}
              className="flex items-center gap-x-2"
            >
              <div className="w-7 h-7 relative">
                <Image
                  className="rounded-full object-center object-cover"
                  fill
                  priority
                  alt="logo"
                  src={Logo}
                />
              </div>
              <h1 className="font-semibold text-md">{COMPANY_NAME}</h1>
            </Link>
            <SheetTrigger className="cursor-pointer">
              <Menu />
            </SheetTrigger>
          </div>

          <SheetContent className="w-1/2">
            <SheetTitle></SheetTitle>

            <nav className="flex flex-col flex-1 gap-y-5 px-5">
              {navigation.map(({ id, link, name, image }) => (
                <SheetClose
                  asChild
                  key={id}
                >
                  <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                      <Image
                        className="rounded-full object-center object-cover"
                        fill
                        priority
                        alt="logo"
                        src={image}
                      />
                    </div>
                    <Link href={link}>{name}</Link>
                  </div>
                </SheetClose>
              ))}
            </nav>
            {!session ? (
              <div className="flex gap-x-2">
                <Link
                  href={"/auth/sign-in"}
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Login
                </Link>
                <Link
                  href={"/auth/sign-up"}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Register
                </Link>
              </div>
            ) : (
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "hover:no-underline"
                )}
              >
                About Us
              </Link>
            )}
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};
export default Header;
