import ComingSoonModal from "@/components/common/ComingSoonModal";
import { FAQsPageContent } from "@/components/pages/faqs";

export default function FAQs() {
  return(
    <ComingSoonModal
      title="FAQs Page"
      message="This page is currently under construction."
      estimatedTime="Q3 2025"
    />
  )

  return <FAQsPageContent />;
}