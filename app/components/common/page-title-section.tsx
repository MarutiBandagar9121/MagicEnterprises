export interface PageTitleSectionProps {
  pageTitleText: string;
  PageDescription: string;
}

export default function PageTitleSection({
  pageTitleText,
  PageDescription,
}: PageTitleSectionProps) {
  return (
    <div
      className="relative py-32  bg-cover mb-12 font-mono"
      style={{ backgroundImage: "url('/images/headerBannerImage.png')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="content relative z-10 flex flex-col items-center flex-wrap">
        <h1 className="text-white text-4xl text-center mb-8">
          {pageTitleText}
        </h1>
        <p className="text-center text-xl text-white w-3/4">
          {PageDescription}
        </p>
      </div>
    </div>
  );
}
