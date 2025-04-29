import type { Metadata } from "next";

import { COMPANY_NAME } from "@/lib/constants";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: `${COMPANY_NAME} Consulting`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session) redirect("/auth/sign-in");
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}
