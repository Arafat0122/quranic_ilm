import CreateStudent from "./CreateStudent/CreateStudent";
import EasyQuranLearning from "./EasyQuranLearning/EasyQuranLearning";
import FAQSection from "./FAQSection/FAQSection";
import HeroSection from "./HeroSection/HeroSection";
import HomeCoursesSection from "./HomeCoursesSection/HomeCoursesSection";
import QuranMemorization from "./QuranMemorization/QuranMemorization";
import ReviewSection from "./ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HomeCoursesSection />
      <CreateStudent />
      <EasyQuranLearning />
      <QuranMemorization />
      <FAQSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
