import FAQSection from "./FAQSection/FAQSection";
import HeroSection from "./HeroSection/HeroSection";
import HomeCoursesSection from "./HomeCoursesSection/HomeCoursesSection";
import ReviewSection from "./ReviewSection/ReviewSection";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <HomeCoursesSection />
            <ReviewSection />
            <FAQSection />
        </div>
    );
};

export default Home;