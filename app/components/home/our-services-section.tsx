import ServiceOverviewCard from "./service-overview-card";
import { services } from "../../const/our-services";

export default function OurServicesSection() {
    
    return (
        <div className="our-services-section px-8 py-16 bg-gray-100 flex flex-col items-center">
            <div className="title w-3/4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <p className="text-center">Explore our range of solutions. We cater to all your visual communication needs with creativity and precision.</p>
            </div>
            <div className="services-grid mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {services.map((service, index)=>(
                    <ServiceOverviewCard
                        key={index}
                        serviceImageUrl={service.serviceImageUrl}
                        serviceTitle={service.serviceTitle}
                        serviceDescription={service.serviceDescription}
                        servicePageLinkUrl={service.servicePageLinkUrl}
                    />
                ))}
            </div>
        </div>
    )
}