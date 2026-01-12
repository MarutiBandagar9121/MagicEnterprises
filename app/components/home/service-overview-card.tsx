import Image from "next/image";

interface ServiceOverviewCardProps {
    serviceImageUrl: string;
    serviceTitle?: string;
    serviceDescription?: string;
    servicePageLinkUrl?: string;
}

export default function ServiceOverviewCard({ serviceImageUrl, serviceTitle, serviceDescription, servicePageLinkUrl }: ServiceOverviewCardProps) {
    return(
        <div className="service-overview-card bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 flex flex-col items-center">
            <div className="service-image">
                <Image src={serviceImageUrl} alt="Service By Magic Enterprises"/>
            </div>
            <div className="service-title">
                <h3 className="text-xl font-bold mt-4">{serviceTitle}</h3>
            </div>
            <div className="service-description">
                <p className="text-center mt-2">{serviceDescription}</p>
            </div>
            <div className="service-link mt-4">
                <a href={servicePageLinkUrl} className="text-blue-600 hover:underline">Learn More</a>
            </div>
        </div>
    )
}