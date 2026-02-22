import PageTitleSection from "../components/common/page-title-section";
import OurWorkSection from "../components/our-work/our-work-gallery";

export default function OurWork() {
  return (
    <div className="main">
      <PageTitleSection
        pageTitleText="Our Portfolio"
        PageDescription="Where strategy meets soul. We don’t just build brands; we craft digital legacies and visual narratives that demand attention."
      />
      <OurWorkSection />
    </div>
  );
}
