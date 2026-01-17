import PageTitleSection from "../components/common/page-title-section";
import ContactForm from "../components/contact-us/contact-form";
import { RiMapPinLine, RiPhoneLine, RiMailAiLine } from "@remixicon/react";
export default function ContactUs() {
  return (
    <>
      <div className="main">
        <PageTitleSection
          pageTitleText="Get In Touch With Us"
          PageDescription="We’d love to hear from you! Our team is ready to assist you with any inquiries or requests. Reach out today and let’s create something amazing together."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full my-8">
        <div className="">
            <ContactForm />
        </div>
        <div className="mx-8">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">Vistit Us Today!</h2>
            {/* address-info */}
            <div className="grid grid-rows-4 gap-4 mb-8">
                <div className="row-span-1 flex items-center">
                    <RiMapPinLine className="text-blue-500 mr-4" />
                    <p className="text-gray-700 max-w-8/12">353, Shaniwar Peth, Radha Krushna Building, A8 Shop, Appa Balwant Chowk, Opp Prabath Theater, Pune-411030</p>
                </div>
                <div className="row-span-1 flex items-center">
                    <RiPhoneLine className="text-blue-500 mr-4" />
                    <p className="text-gray-700">+91 7040332527 | +91 7744087354</p>
                </div>
                <div className="row-span-1 flex items-center">
                    <RiMailAiLine className="text-blue-500 mr-4" />
                    <p className="text-gray-700">magicenterprises16@gmail.com</p>
                </div>
            </div>
            <div className="map w-full h-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d795.3342539101079!2d73.85359437134466!3d18.516759721533855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMxJzAxLjMiTiA3M8KwNTEnMTQuMCJF!5e0!3m2!1sen!2sin!4v1768547268958!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </>
  );
}
