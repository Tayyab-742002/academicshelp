import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import OrganizationSchema from "@/components/structured-data/OrganizationSchema";
import FloatingContactButton from "@/components/magicui/floating-contact-button";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <Header />
      <main className="pt-16 md:pt-20">{children}</main>
      <FloatingContactButton whatsappNumber="+14169070931" />
      <Footer />
    </>
  );
}
