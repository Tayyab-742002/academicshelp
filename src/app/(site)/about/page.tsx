import ComingSoonModal from "@/components/common/ComingSoonModal";
import { AboutPage } from "@/components/pages/about";

export default function About() {
  return (
    <ComingSoonModal
      title="About Page"
      message="This page is currently under construction."
      estimatedTime="Q3 2025"
    />
  );
  return <AboutPage />;
}
