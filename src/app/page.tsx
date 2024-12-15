import HeroSection from "@/components/HeroSection";
import CompanyLogo from "@/components/CompanyLogo";
import FeaturedProducts from "@/components/FeaturedProducts";
import TopCategories from "@/components/TopCategories";
import HotCategories from "@/components/HotCategories";
import OurProduct from "@/components/OurProduct";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" min-h-full min-w-full">
      <HeroSection />
      <CompanyLogo />
      <FeaturedProducts />
      <TopCategories />
      <HotCategories />
      <OurProduct />
      <div className=" relative top-[1890px]">
        <Footer />
      </div>
    </div>
  );
}
