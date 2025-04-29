import type { Metadata } from "next";

import { COMPANY_NAME } from "@/lib/constants";
import Sidebar from "@/components/admin/forms/Sidebar";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} Admin Dashboard`,
  description: `${COMPANY_NAME} Consulting`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
