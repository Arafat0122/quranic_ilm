import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

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

const HomeCoursesSection = () => {
  const handleWhatsApp = (courseTitle) => {
    const url = `https://wa.me/8801608318553?text=${encodeURIComponent(
      `আমি ${courseTitle} কোর্সে ভর্তি হতে আগ্রহী।`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="pt-[30px] md:pt-20 lg:pt-[80px] bg-gray-50">
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-5 text-3xl font-bold text-center lg:mb-12 md:text-5xl font-tiroBangla lg:text-left text-primary">
            <span className="text-black">আমাদের জনপ্রিয়</span> কোর্সসমূহ
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col w-full p-6 transition duration-300 bg-white shadow-lg rounded-2xl hover:-translate-y-2 hover:shadow-2xl"
              >
                <span className="self-start inline-block px-3 py-1 mb-4 text-sm text-white rounded-full font-hindSiliguri bg-[#C3A753]">
                  {course.tag}
                </span>

                <img
                  src={course.image}
                  alt={course.title}
                  className="object-contain h-40 mx-auto mb-4"
                />

                <h3 className="mb-4 text-xl text-center text-black font-tiroBangla">
                  {course.title}
                </h3>

                <ul className="mb-6 space-y-2 text-sm text-gray-700 font-hindSiliguri">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FiCheckCircle className="mt-1 text-[#C3A753]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <button
                    onClick={() => handleWhatsApp(course.title)}
                    className="flex-1 px-4 py-2 font-medium text-center text-white rounded-full bg-[#C3A753] hover:bg-emerald-700 transition"
                  >
                    ভর্তি হোন
                  </button>
                  <Link
                    to="#"
                    className="flex-1 px-4 py-2 font-medium text-center text-gray-700 transition border border-gray-300 rounded-full hover:bg-gray-100"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default HomeCoursesSection;
