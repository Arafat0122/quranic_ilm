import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const courses = [
  {
    title: "হিফযুল কুরআন (তাজবীদসহ)",
    image: "/hifjul-quran.png",
    features: [
      "৫ বছর থেকে যেকোনো বয়সের নারী ও পুরুষের জন্য উপযোগী",
      "অভিজ্ঞ হাফেজ উস্তাদদের তত্ত্বাবধানে সম্পূর্ণ কুরআন হিফয",
      "শুদ্ধ মাখরাজ, তাজবীদ ও সিফাতের ওপর বিশেষ গুরুত্ব",
      "প্রয়োজনীয় মাসয়ালা-মাসায়েল ও দুআ শিক্ষা",
      "২৪/৭ উস্তাদদের গাইডেন্স ও হোয়াটসঅ্যাপ সাপোর্ট",
    ],
    tag: "সবার জন্য",
  },
  {
    title: "সহিহ কুরআন শিক্ষা কোর্স",
    image: "/sohi-quran.png",
    features: [
      "শূণ্য থেকে সহিহ শুদ্ধভাবে কুরআন পড়ার সহজ পদ্ধতি",
      "কুরআনী কায়দা, মাখরাজ ও তাজবীদ শিক্ষা",
      "দৈনন্দিন জীবনের প্রয়োজনীয় মাসনুন দুআ ও জিকর",
      "সালাত ও জীবন ঘনিষ্ঠ মাসয়ালা-মাসায়েল",
      "সরাসরি লাইভ ক্লাসের মাধ্যমে পড়া আদায়ের সুবিধা",
    ],
    tag: "সবচেয়ে জনপ্রিয়",
  },
  {
    title: "আরবি ভাষা ও ব্যাকরণ",
    image: "/arbi.png",
    features: [
      "আরবি ভাষায় পারদর্শিতা অর্জনে বিশেষ কোর্স",
      "হেদায়াতুন নাহু ও মিজানুস সরফের সহজ পাঠ",
      "আরবি থেকে বাংলা ও বাংলা থেকে আরবি অনুবাদ চর্চা",
      "কুরআনের ভাষা বোঝার জন্য ব্যাকরণগত দক্ষতা অর্জন",
      "২৪/৭ একাডেমিক সাপোর্ট ও পরামর্শ",
    ],
    tag: "নতুন কোর্স",
  },
];

const HomeCoursesSection = () => {
  const handleWhatsApp = (courseTitle) => {
    const url = `https://wa.me/8801608318553?text=${encodeURIComponent(
      `আসসালামু আলাইকুম। আমি আপনাদের "${courseTitle}" কোর্সটি সম্পর্কে জানতে এবং ভর্তি হতে আগ্রহী।`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-[#fdfdfd]">
      <FadeContent blur={true} duration={700}>
        <div className="px-4 mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
            <div className="w-full text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                আমাদের বিশেষ <span className="text-primary">কোর্সসমূহ</span>
              </h2>
              <div className="h-1 w-20 bg-primary mt-4 mx-auto lg:mx-0"></div>
            </div>
            <p className="max-w-md text-gray-600 text-center lg:text-right font-medium leading-relaxed">
              সহিহ পদ্ধতিতে দ্বীন এবং আল্লাহর কালাম শেখার জন্য আমরা নিয়ে এসেছি মানসম্মত সব অনলাইন কোর্স।
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group flex flex-col w-full p-8 transition-all duration-500 bg-white border border-gray-100 shadow-sm rounded-[2rem] hover:shadow-2xl hover:-translate-y-3"
              >
                {/* Tag */}
                <span className="self-start inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-white uppercase rounded-full bg-[#C3A753]">
                  {course.tag}
                </span>

                {/* Course Image */}
                <div className="relative mb-8 overflow-hidden rounded-xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-contain h-44 mx-auto transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Course Title */}
                <h3 className="mb-6 text-2xl font-bold text-gray-800 text-center group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                {/* Features List */}
                <ul className="mb-8 space-y-4 flex-grow text-[15px] text-gray-600 leading-relaxed">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="mt-1 flex-shrink-0 text-primary text-lg" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleWhatsApp(course.title)}
                    className="flex-1 px-6 py-3 font-bold text-center text-white rounded-xl bg-primary hover:bg-[#3d633f] shadow-lg shadow-primary/20 transition-all duration-300 active:scale-95"
                  >
                    ভর্তি হোন
                  </button>
                  <Link
                    to="#"
                    className="flex-1 px-6 py-3 font-bold text-center text-gray-700 transition border-2 border-gray-100 rounded-xl hover:bg-gray-50 hover:border-primary/20"
                  >
                    বিস্তারিত
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