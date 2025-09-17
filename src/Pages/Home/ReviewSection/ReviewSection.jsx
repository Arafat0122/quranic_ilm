import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
        <section
            className="py-20 px-4 bg-[#FAF9F6] relative"
            aria-label="শিক্ষার্থীদের মতামত"
        >
            <h2
                className="text-3xl md:text-5xl font-tiroBangla font-bold text-center mb-16"
                style={{ color: "#146C50" }}
            >
                শিক্ষার্থীদের মতামত
            </h2>

            <div
                className="max-w-3xl mx-auto relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Carousel */}
                <div className="overflow-hidden rounded-3xl shadow-xl bg-white border border-[#C3A753]">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full p-10 max-w-3xl mx-auto relative"
                                role="tabpanel"
                                aria-hidden={current !== index}
                                aria-label={`Review by ${review.name}`}
                            >
                                {/* Quote Icon as background */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="#C3A753"
                                    className="w-16 h-16 opacity-10 absolute top-8 left-8 select-none pointer-events-none"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>

                                <p
                                    className="font-hindSiliguri text-xl md:text-2xl mb-10 text-gray-800 relative z-10 leading-relaxed"
                                    style={{ lineHeight: "1.8" }}
                                >
                                    “{review.text}”
                                </p>

                                <hr className="border-[#C3A753] opacity-40 mb-8" />

                                <h3
                                    className="font-tiroBangla text-3xl text-[#146C50] mb-1"
                                    aria-label={`Review by ${review.name}`}
                                >
                                    {review.name}
                                </h3>

                                <p className="font-hindSiliguri text-base text-[#C3A753] uppercase tracking-wider">
                                    {review.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-5 mt-12">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            className={`w-6 h-6 rounded-full transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#C3A753] ${idx === current
                                    ? "bg-[#C3A753] scale-125 shadow-lg"
                                    : "bg-gray-300 hover:bg-[#C3A753]"
                                }`}
                            aria-label={`Go to review ${idx + 1}`}
                            aria-pressed={idx === current}
                            type="button"
                            tabIndex="0"
                        />
                    ))}
                </div>

                {/* Prev/Next Buttons */}
                <div className="flex justify-center gap-8 mt-10">
                    <button
                        onClick={prevSlide}
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#C3A753] text-[#FAF9F6] font-semibold hover:bg-emerald-700 transition shadow-lg focus:outline-none focus:ring-4 focus:ring-[#A08D40]"
                        aria-label="Previous review"
                    >
                        <FiChevronLeft className="text-xl" />
                        পূর্বের
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#C3A753] text-[#FAF9F6] font-semibold hover:bg-emerald-700 transition shadow-lg focus:outline-none focus:ring-4 focus:ring-[#A08D40]"
                        aria-label="Next review"
                    >
                        পরের
                        <FiChevronRight className="text-xl" />
                    </button>
                </div>
            </div>
            {/* Curved SVG Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="w-full h-20 md:h-28"
                >
                    <path
                        d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,90.7C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32V100H1392C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100H0Z"
                        fill="#FAF9E9"
                    />
                </svg>
            </div>
        </section>
    );
};

export default ReviewSection;