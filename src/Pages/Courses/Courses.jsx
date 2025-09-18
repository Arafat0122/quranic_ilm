import { FaQuran } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import WhatYouWillLearn from "./WhatYouWillLearn";
import EasyQuranLearning from "../Home/EasyQuranLearning/EasyQuranLearning";
import QuranMemorization from "../Home/QuranMemorization/QuranMemorization";
import FAQSection from "../Home/FAQSection/FAQSection";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import HomeCoursesSection from "../Home/HomeCoursesSection/HomeCoursesSection";

const courses = [
  {
    title: "হিফযুল কোরআন",
    image: "/hifjul-quran.png",
    features: [
      "৫ বছরের ওপরের বাচ্চা থেকে যেকোন বয়সের নারী-পুরুষ",
      "সম্পূর্ণ কোরআন সহিহ শুদ্ধভাবে হিফয",
      "মাখরাজ, তাজবীদ, সিফাত",
      "নাজরানা, মাসলা মাসায়েল",
      "২৪/৭ Whatsapp সাপোর্ট",
    ],
    tag: "সবার জন্য",
  },
  {
    title: "সহিহ কোরআন শিক্ষা",
    image: "/sohi-quran.png",
    features: [
      "মাখরাজ, তাজবীদ, সিফাত",
      "নাজরানা, মাসনুন দোয়া",
      "প্রয়োজনীয় আয়াত / সুরাহ",
      "প্রয়োজনীয় মাসলা মাসায়েল",
      "২৪/৭ Whatsapp সাপোর্ট",
    ],
    tag: "অধিক জনপ্রিয়",
  },
  {
    title: "আরবি ভাষা শিক্ষা",
    image: "/arbi.png",
    features: [
      "Hedayatun Nahu (Arabic-Bangla)",
      "Mijanus-sarf, Munshaib",
      "Essential Tamrinaat",
      "মাখরাজ, তাজবীদ, সিফাত",
      "২৪/৭ Whatsapp সাপোর্ট",
    ],
    tag: "নতুন কোর্স",
  },
];
const Courses = () => {
  const handleWhatsApp = (course) => {
    const url = `https://wa.me/8801608318553?text=${encodeURIComponent(
      `আমি ${course} কোর্সে ভর্তি হতে আগ্রহী।`
    )}`;
    window.open(url, "_blank");
  };

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
