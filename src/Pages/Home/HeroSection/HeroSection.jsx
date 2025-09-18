import { MoveLeft, MoveRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -right-7 top-1/3 z-10 cursor-pointer flex items-center px-4 py-2 text-black bg-[#C3A753] rounded-md shadow-lg"
    onClick={onClick}
  >
    <MoveRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-7 top-1/3 z-10 cursor-pointer flex items-center px-4 py-2 bg-white text-black rounded-md shadow-lg hover:bg-[#C3A753]"
    onClick={onClick}
  >
    <MoveLeft />
  </div>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const courses = [
    {
      title: "কোরআন পড়ার বুনিয়াদি",
      price: "$99.00",
      duration: "লাইভ ক্লাস",
      level: "শুরুর দিক",
      image: "/quran.png",
      link: "/courses/reading-quran",
    },
    {
      title: "হিফযুল কোরআন",
      price: "$199.00",
      duration: "অনলাইন সেশন",
      level: "মধ্যম",
      image: "/hifjul-quran.png",
      link: "/courses/hifjul-quran",
    },
  ];

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between bg-gradient-to-tr from-[#071111] via-[#071111] to-[#50411b] text-white py-20 lg:py-32 min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-between w-full gap-8 px-4 mx-auto lg:flex-row max-w-7xl">
        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="relative max-w-2xl space-y-6 text-center md:text-left">
            <Star className="absolute w-10 h-10 text-purple-700 fill-purple-700 -top-10 left-1/4 opacity-35" />
            <Star className="absolute text-[#C3A753] fill-[#C3A753] h-14 w-14 -bottom-24 left-1/5 opacity-35" />
            <div className="absolute w-4 h-4 rounded-full bg-primary right-[0%] opacity-35"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-orange-700 rounded-full opacity-35"></div>
            <h1 className="text-3xl font-bold md:text-5xl !leading-[50px] md:!leading-[80px]">
              পরিষ্কার ও সুশৃঙ্খলভাবে <br />
              <span className="text-[#C3A753]">কোরআন</span> তিলাওয়াত করুন
              <span className="block mt-2 text-sm font-normal text-gray-300">
                (সূরা মুজ্জাম্মিল : আয়াত ৪)
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-300">
              আরবি, কোরআন এবং ইসলামী স্টাডিজের সমন্বিত কোর্স যা সব বয়স ও দক্ষতার
              শিক্ষার্থীদের জন্য অনলাইনে সহজলভ্য।
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/courses"
                className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-[#4f7d52] transition"
              >
                আপনার কোর্স খুঁজুন
              </Link>
              <Link
                to="/register"
                className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#0f1e1d] transition"
              >
                বিনামূল্যে সাইন আপ করুন
              </Link>
            </div>
          </div>
        </FadeContent>
        <div className="relative w-full max-w-sm mt-12 md:mt-0 md:ml-12">
          <FadeContent
            blur={true}
            duration={1300}
            easing="ease-out"
            initialOpacity={0}
          >
            <Slider {...settings}>
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-[#1a2624] to-[#0f1e1d] rounded-2xl shadow-lg p-6 border border-gray-700"
                >
                  <div className="flex justify-center">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-contain h-40"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">
                    {course.title}
                  </h3>
                  <p className="text-[#C3A753] text-xl font-bold mt-2">
                    {course.price}
                  </p>
                  <div className="flex items-center justify-between pt-4 mt-6 text-sm border-t border-gray-600">
                    <div>
                      <p className="text-gray-400">সময়কাল</p>
                      <p className="font-medium text-green-400">
                        {course.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400">স্তর</p>
                      <p className="font-medium text-yellow-400">
                        {course.level}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between gap-4 mt-6">
                    <Link
                      to="/register"
                      className="text-center px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-[#4f7d52] transition"
                    >
                      এখনই ভর্তি হোন
                    </Link>
                    <Link
                      to={course.link}
                      className=" text-center px-4 py-2 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#0f1e1d] transition"
                    >
                      বিস্তারিত দেখুন
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
