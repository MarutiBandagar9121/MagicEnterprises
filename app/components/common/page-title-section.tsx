export interface PageTitleSectionProps {
    pageTitleText: string;
    PageDescription: string;
}

export default function PageTitleSection({ pageTitleText, PageDescription }: PageTitleSectionProps) {
    return (
        <div className="page-title-section relative py-32  bg-cover bg-no-repeat mb-12"
        style={{backgroundImage:"url('/images/magic-bg.jpeg')"}}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="content relative z-10 flex flex-col items-center flex-wrap">
                <h1 className="text-white text-4xl font-bold text-center mb-4">{pageTitleText}</h1>
                <p className="text-center text-white w-2/4">{PageDescription}</p>
            </div>
        </div>
    );
}