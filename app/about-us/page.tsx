import PageTitleSection from "../components/common/page-title-section";
import Navbar from "../components/common/navbar";

export default  function AboutUs(){
    return (
        <div className="main">
        <Navbar />
        <PageTitleSection 
            pageTitleText="About Us"
            PageDescription="Leading the way in design and printing solutions. Your trusted partner for visual communication excellence in Pune."
        />
        </div>
    )
}