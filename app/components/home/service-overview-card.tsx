"use client";
import Image from "next/image";
import { RiArrowRightCircleFill } from "@remixicon/react";

export interface ServiceOverviewCardProps {
  serviceImageUrl: string;
  serviceTitle?: string;
  serviceDescription?: string;
  servicePageLinkUrl?: string;
  serviceSectionId:string;
}

export default function ServiceOverviewCard({
  serviceImageUrl,
  serviceTitle,
  serviceDescription,
  servicePageLinkUrl,
  serviceSectionId
}: ServiceOverviewCardProps) {
  return (
    <div
      className="service-overview-card bg-white p-6 rounded-lg shadow-md border-2
         border-gray-300 flex flex-col hover:border-primary hover:shadow-lg transition-all duration-300" id={`${serviceSectionId}`}
    >
      {/* image section */}
      <div className="service-image flex justify-center">
        <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-3xl overflow-hidden shrink-0">
          <Image
            src={serviceImageUrl}
            alt="Service By Magic Enterprises"
            fill
            className="object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      {/* service content section */}
      <div className="grow">
        <div className="service-title">
          <h3 className="text-xl font-bold mt-4 text-left">{serviceTitle}</h3>
        </div>
        <div className="service-description">
          <p className="text-left mt-2">{serviceDescription}</p>
        </div>
      </div>
      {/* service nav section */}
      <div className="service-link mt-4">
        <a
          href={`${servicePageLinkUrl}#${serviceSectionId}`}
          className="w-full text-black text-left hover:underline"
        >
          <RiArrowRightCircleFill className="inline mr-2" />
        </a>
      </div>
    </div>
  );
}
