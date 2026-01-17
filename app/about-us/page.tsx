import PageTitleSection from "../components/common/page-title-section";
import Image from "next/image";
import { OurTeamData } from "../data/our-team";
import TeamCard from "../components/about-us/team-card";

export default function AboutUs() {
  return (
    <div className="main">
      <PageTitleSection
        pageTitleText="About Us"
        PageDescription="Leading the way in design and printing solutions. Your trusted partner for visual communication excellence in Pune."
      />

      {/* our story and mission section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 my-4 md:my-6 max-w-7xl mx-auto">
        {/* our story and mission title text */}
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Our Story & Mission</h2>
        </div>
        {/* our story and mission descriptive text */}
        <div className="">
          <p>
            Magic Prints Media was founded in Pune with a vision to provide
            unmatched design and printing services. Over the years, we’ve
            evolved continually to meet the dynamic needs of our clients. Our
            commitment to quality and innovation has helped us establish a
            strong foothold in the industry. Today, we proudly serve a diverse
            clientele, reflecting our growth and dedication.
          </p>
          <br />
          <p>
            We have collaborated with a wide spectrum of clients, ranging from
            small startups to established enterprises. Our portfolio includes
            projects for educational institutions, retail businesses, and
            corporate firms. Each partnership has fueled our passion for
            excellence and inspired us to continually improve our services.
          </p>
        </div>
      </div>

      {/*image Section*/}
      <div className="image-cont my-20 mx-8">
        <Image
          src="/images/about-us/image.svg"
          alt="Our Mission"
          width={550}
          height={100}
          className="w-full h-80 rounded-lg object-cover"
        />
      </div>
      {/* what sets us apart section */}
      <div className="flex flex-col gap-4 justify-center mx-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 items-center">
                <div className="">
                    <p className="font-bold text-4xl">What Set's us Apart</p>
                </div>
                <div className="flex justify-end items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 my-6 md:my-8">
                <div className="p-6  rounded-lg shadow hover:shadow-lg transition duration-300">
                    <p className="text-blue-600 font-bold">01</p>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p>We prioritize quality in every project we undertake. Our rigorous quality control processes ensure exceptional results that meet your expectations.</p>
                </div>
                <div className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                    <p className="text-blue-600 font-bold">02</p>
                    <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                    <p>Every business is unique, and we offer tailored design and printing solutions that align with your specific needs and goals.</p>
                </div>
                <div className="p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                    <p className="text-blue-600 font-bold">03</p>
                    <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                    <p>We understand the importance of deadlines. Our dedicated team works diligently to ensure projects are completed on time without compromising quality.</p>
                </div>
            </div>
      </div>
      {/* meet our team section */}
      <div className="mx-8 my-20">
        <p className="font-bold my-4">Meet Our Creative Team</p>
        <div className="flex justify-start gap-8 flex-wrap">
            {OurTeamData.map((member, index) => (
                <TeamCard key={index} {...member} />
            ))}
        </div>
      </div>
    </div>
  );
}
