import { MoveLeft, MoveRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

// কাস্টম অ্যারো বাটন - আরও মার্জিত লুক
const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-4 lg:-right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center w-12 h-12 text-black bg-[#C3A753] rounded-full shadow-2xl hover:scale-110 transition-transform"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <MoveRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -left-4 lg:-left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full shadow-2xl hover:bg-[#C3A753] hover:text-black transition-all"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <MoveLeft size={24} />
  </button>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ bottom: "-35px" }}>
        <ul className="m-0 custom-dots"> {dots} </ul>
      </div>
    ),
  };

  const courses = [
    {
      title: "সহিহ কুরআন পাঠ বুনিয়াদ",
      price: "৳ ১২৫০",
      duration: "সরাসরি লাইভ ক্লাস",
      level: "প্রাথমিক",
      image: "/quran.png",
      link: "/courses/reading-quran",
    },
    {
      title: "হিফযুল কুরআন (তাজবীদসহ)",
      price: "৳ ২৫০০",
      duration: "অনলাইন সেশন",
      level: "মাধ্যমিক",
      image: "/hifjul-quran.png",
      link: "/courses/hifjul-quran",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-tr from-[#060d0d] via-[#0b1a19] to-[#3a2f14] text-white py-16 lg:py-28 min-h-screen overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute w-12 h-12 text-yellow-600/20 fill-yellow-600/10 top-20 left-10 animate-pulse" />
        <Star className="absolute w-20 h-20 text-[#C3A753]/10 fill-[#C3A753]/5 bottom-20 right-10" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 px-6 mx-auto max-w-7xl relative z-10">

        {/* Text Content */}
        <FadeContent blur={true} duration={800}>
          <div className="max-w-2xl space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.2]">
                কুরআন তিলাওয়াত করুন <br />
                <span className="text-[#C3A753] drop-shadow-sm">ধীরস্থির ও সুস্পষ্টভাবে</span>
              </h1>
              <p className="text-sm md:text-base font-medium text-gray-400 italic">
                — "আর কুরআন তিলাওয়াত করুন ধীরস্থিরভাবে, সুস্পষ্টভাবে।" (সূরা মুজ্জাম্মিল: ০৪)
              </p>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-xl">
              সহিহ শুদ্ধভাবে আল্লাহর কালাম শেখার এক নির্ভরযোগ্য প্ল্যাটফর্ম। আমাদের সমন্বিত অনলাইন কোর্সে আপনাকে স্বাগতম।
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <Link
                to="/courses"
                className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/80 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all transform hover:-translate-y-1"
              >
                কোর্সসমূহ দেখুন
              </Link>
              <Link
                to="/register"
                className="px-8 py-4 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:-translate-y-1"
              >
                ফ্রি রেজিস্ট্রেশন
              </Link>
            </div>
          </div>
        </FadeContent>

        {/* Course Slider Card */}
        <div className="relative w-full max-w-[420px] mt-16 lg:mt-0">
          <FadeContent blur={true} duration={1200}>
            <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-[#C3A753]/30 to-transparent">
              <Slider {...settings}>
                {courses.map((course, index) => (
                  <div key={index} className="outline-none">
                    <div className="bg-[#0f1e1d] rounded-[1.8rem] shadow-2xl p-8 border border-white/5 mx-1">
                      <div className="flex justify-center mb-6 bg-white/5 rounded-2xl py-6">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="object-contain h-48 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-[#C3A753] text-2xl font-black mb-6">
                        {course.price}
                      </p>

                      <div className="grid grid-cols-2 gap-4 py-6 border-t border-white/10">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">মাধ্যম</p>
                          <p className="font-bold text-green-400">{course.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">যোগ্যতা</p>
                          <p className="font-bold text-yellow-500">{course.level}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-4">
                        <Link
                          to="/register"
                          className="w-full text-center py-3 rounded-xl bg-[#C3A753] text-black font-bold hover:brightness-110 transition-all"
                        >
                          এখনই ভর্তি হোন
                        </Link>
                        <Link
                          to={course.link}
                          className="w-full text-center py-3 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5 transition-all"
                        >
                          বিস্তারিত দেখুন
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </FadeContent>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;