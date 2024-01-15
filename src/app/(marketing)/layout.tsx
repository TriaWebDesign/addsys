import Footer from "./__containers/Footer";
import Navbar from "./__containers/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-slate-100">{children}</main>
      <Footer />
    </>
  );
}
