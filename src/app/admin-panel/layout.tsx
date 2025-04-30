import type { Metadata } from "next";

import { COMPANY_NAME } from "@/lib/constants";
import Sidebar from "@/components/admin/forms/Sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} Admin Dashboard`,
  description: `${COMPANY_NAME} Consulting`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  //@ts-expect-error add role to User & AdapterUser
  if (session && session?.user?.role !== "ADMIN") redirect("/");
  return (
    <main className="grid grid-cols-6 bg-background text-foreground max-h-screen">
      <Sidebar />
      <section
        id="admin-children"
        className="w-full col-span-5"
      >
        {children}
      </section>
    </main>
  );
}
