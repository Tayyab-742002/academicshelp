import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import OrganizationSchema from "@/components/structured-data/OrganizationSchema";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <OrganizationSchema />
      <Header />
      {children}
      <Footer />
    </main>
  );
}
