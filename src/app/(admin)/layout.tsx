import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School - Admin",
  description: "Generated by create next app",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-slate-100">{children}</main>
    </>
  );
}
