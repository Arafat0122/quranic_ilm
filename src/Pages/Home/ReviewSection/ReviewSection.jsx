import { MoveLeft, MoveRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const reviews = [
  {
    name: "মোঃ হাসান",
    text: "ইলমুল কোরআনে আমার অভিজ্ঞতা খুব ভালো। শিক্ষকদের পাঠদান সহজ এবং হৃদয়স্পর্শী।",
    role: "শিক্ষার্থী",
  },
  {
    name: "আলিয়া রহমান",
    text: "লাইভ ক্লাস এবং ব্যক্তিগত মনোযোগ আমাকে অনেক সাহায্য করেছে। আলহামদুলিল্লাহ।",
    role: "শিক্ষার্থী",
  },
  {
    name: "হাবিবুর রহমান",
    text: "গুগল মিট ও হোয়াটসঅ্যাপ কলের মাধ্যমে শেখানো খুব সুবিধাজনক। পরিষেবা মানসম্পন্ন।",
    role: "শিক্ষার্থী",
  },
  // add more if you want...
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  };

  // Auto play effect with pause on hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <section className="relative pt-[30px] md:pt-20 ">
      <div className=" py-[30px] md:py-20 bg-primary">
        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <h2 className="text-3xl font-bold text-center text-white lg:mb-16 md:text-5xl font-tiroBangla">
            আমাদের শিক্ষার্থীদের{" "}
            <span className="text-[#C3A753] !leading-[70px]">অভিজ্ঞতা</span>
          </h2>

          <div
            className="relative flex items-center max-w-4xl px-4 mx-auto gap-7"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              onClick={nextSlide}
              className=" hidden md:flex items-center gap-2 px-5 py-2 font-semibold text-black transition bg-white rounded-md shadow-lg h-fit focus:outline-none hover:bg-[#C3A753] "
              aria-label="Next review"
            >
              <MoveLeft />
            </button>
            <div className="overflow-hidden bg-white border shadow-xl rounded-3xl ">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-full max-w-3xl p-4 mx-auto md:p-10"
                    role="tabpanel"
                    aria-hidden={current !== index}
                    aria-label={`Review by ${review.name}`}
                  >
          
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#C3A753"
                      className="absolute w-16 h-16 pointer-events-none select-none opacity-10 top-8 left-8"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>

                    <p
                      className="relative z-10 mb-4 leading-relaxed text-gray-800 tb-ext-lg md:mb-10 font-hindSiliguri md:text-2xl"
                      style={{ lineHeight: "1.8" }}
                    >
                      “{review.text}”
                    </p>

                    <hr className="border-[#C3A753]  opacity-40 mb-4 lg:mb-8" />

                    <h3
                      className="font-tiroBangla text-xl md:text-3xl text-[#146C50] mb-1"
                      aria-label={`Review by ${review.name}`}
                    >
                      {review.name}
                    </h3>

                    <p className="font-hindSiliguri text-base text-[#C3A753]  uppercase tracking-wider">
                      {review.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="hidden md:flex items-center gap-2 px-5 py-2 font-semibold text-black transition bg-white rounded-md shadow-lg h-fit focus:outline-none hover:bg-[#C3A753] "
              aria-label="Next review"
            >
              <MoveRight />
            </button>

          
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default ReviewSection;
