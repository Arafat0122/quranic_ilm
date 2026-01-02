import WhatYouWillLearn from "./WhatYouWillLearn";
import EasyQuranLearning from "../Home/EasyQuranLearning/EasyQuranLearning";
import QuranMemorization from "../Home/QuranMemorization/QuranMemorization";
import FAQSection from "../Home/FAQSection/FAQSection";
import HomeCoursesSection from "../Home/HomeCoursesSection/HomeCoursesSection";


const Courses = () => {

  return (
    <section className="pb-[30px] lg:pb-20">
      <WhatYouWillLearn />
      <HomeCoursesSection />
      <EasyQuranLearning />
      <QuranMemorization />
      <FAQSection />
    </section>
  );
};

export default Courses;
