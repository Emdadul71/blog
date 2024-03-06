import Footer from "@/modules/frontend/@common/@layout/footer";
import Header from "@/modules/frontend/@common/@layout/header";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main>{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
