"use client";
import Image from "next/image";
import { RiArrowRightCircleFill } from "@remixicon/react";

export interface ServiceOverviewCardProps {
    serviceImageUrl: string;
    serviceTitle?: string;
    serviceDescription?: string;
    servicePageLinkUrl?: string;
}

export default function ServiceOverviewCard({ serviceImageUrl, serviceTitle, serviceDescription, servicePageLinkUrl }: ServiceOverviewCardProps) {
    return(
        <div className="service-overview-card bg-white p-6 rounded-lg shadow-md border-2
         border-gray-300 flex flex-col hover:border-primary hover:shadow-lg transition-all duration-300">
            <div className="service-image flex justify-center">
                <Image src={serviceImageUrl} alt="Service By Magic Enterprises" width={350} height={300} className="rounded-3xl"/>
            </div>
            <div className="service-title">
                <h3 className="text-xl font-bold mt-4 text-left">{serviceTitle}</h3>
            </div>
            <div className="service-description">
                <p className="text-left mt-2">{serviceDescription}</p>
            </div>
            <div className="service-link mt-4">
                <a href={servicePageLinkUrl} className="w-full text-black text-left hover:underline">
                    <RiArrowRightCircleFill className="inline mr-2" />
                    </a>
            </div>
        </div>
    )
}