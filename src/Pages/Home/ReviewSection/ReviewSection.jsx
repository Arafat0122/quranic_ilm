import { MoveLeft, MoveRight, Quote } from "lucide-react"; // Quote আইকন ব্যবহার করা হয়েছে
import { useState, useEffect, useRef } from "react";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const reviews = [
  {
    name: "আব্দুল্লাহ আল মাসুম",
    text: "প্রবাসে থেকে শুদ্ধভাবে কুরআন শেখার সুযোগ পাচ্ছিলাম না। আলহামদুলিল্লাহ, এই প্ল্যাটফর্মের উস্তাদদের আন্তরিকতা এবং নমনীয় শিডিউল আমার সেই অভাব পূরণ করেছে। এখন আমি সহিহ তাজবীদের সাথে তিলাওয়াত করতে পারি।",
    role: "শিক্ষার্থী (প্রবাসী, দুবাই)",
  },
  {
    name: "ফাতেমা জোহরা",
    text: "আমার ১০ বছরের মেয়ের জন্য একজন ভালো উস্তাদ খুঁজছিলাম। এখানকার নারী উস্তাদরা বাচ্চাদের সাথে খুব বন্ধুসুলভ। তারা শুধু কোরআন পড়ানো নয়, বরং আদব-আখলাকও শেখান। আমি খুবই সন্তুষ্ট।",
    role: "অভিভাবক",
  },
  {
    name: "ইঞ্জিনিয়ার রাশেদ আহমেদ",
    text: "ব্যস্ত কর্মজীবনের মাঝেও যে অনলাইনে এতো চমৎকারভাবে হিফয করা সম্ভব, তা এখানে না আসলে বুঝতাম না। উস্তাদদের রিভিশন পদ্ধতি বা 'ইয়াদ' করানোর প্রক্রিয়াটি অসাধারণ। ইনশাআল্লাহ আমি পুরো কুরআন সম্পন্ন করবো।",
    role: "শিক্ষার্থী (চাকরিজীবী)",
  },
  {
    name: "নাসরিন আক্তার",
    text: "পর্দার বিধান বজায় রেখে ঘরে বসে নারী উস্তাযার কাছে সরাসরি শেখার সুযোগ আমার জন্য অনেক বড় পাওয়া। তাজবীদের খুঁটিনাটি বিষয়গুলো তারা অত্যন্ত ধৈর্যের সাথে বুঝিয়ে দেন। জাযাকাল্লাহু খাইরান!",
    role: "শিক্ষার্থী (মহিলা শাখা)",
  },
  {
    name: "ডা. আরিফ বিল্লাহ",
    text: "আরবি ভাষা ও ব্যাকরণ কোর্সে ভর্তি হয়ে আমি এখন কুরআনের আয়াতের অর্থ বুঝতে পারছি। ক্লাসের মান অত্যন্ত প্রফেশনাল এবং রিসোর্সগুলো খুব গোছানো। এটি শুধু একটি কোর্স নয়, একটি ইলমি সফর।",
    role: "শিক্ষার্থী (আরবি ভাষা কোর্স)",
  },
  {
    name: "জসিম উদ্দিন",
    text: "সহিহ কুরআন শিক্ষা কোর্সে ভর্তি হওয়ার পর আমার নামাজের তিলাওয়াত অনেক উন্নত হয়েছে। উস্তাদ প্রতিটি হরফের মাখরাজ আলাদা করে ধরিয়ে দেন। যারা নতুন শিখতে চান, তাদের জন্য এটি সেরা প্ল্যাটফর্ম।",
    role: "শিক্ষার্থী (বুনিয়াদি কোর্স)",
  },
  {
    name: "সায়মা পারভীন",
    text: "বাচ্চাদের জন্য অনলাইন মাদ্রাসা হিসেবে এটি অতুলনীয়। শিক্ষকরা খুবই যত্নশীল। ভিডিও কল এবং হোয়াইটবোর্ডের মাধ্যমে পাঠদান পদ্ধতিটি বাচ্চাদের জন্য বেশ আকর্ষণীয়।",
    role: "অভিভাবক (যুক্তরাজ্য প্রবাসী)",
  },
  {
    name: "মাওলানা আব্দুল কাইয়ুম",
    text: "একজন আলেম হিসেবে আমি তাদের সিলেবাসটি দেখেছি। তারা অত্যন্ত আধুনিক এবং শরীয়াহসম্মত পদ্ধতিতে পাঠদান করছেন। বিশেষ করে তাজবীদ ও সিফাতের ওপর তাদের গুরুত্বারোপ প্রশংসনীয়।",
    role: "শুভাকাঙ্ক্ষী ও আলেম",
  },
  {
    name: "তাহমিদ হাসান",
    text: "আমি আগে অনেক জায়গায় চেষ্টা করেছি কিন্তু তিলাওয়াত শুদ্ধ হচ্ছিল না। এখানকার ওয়ান-টু-ওয়ান (One-to-One) ক্লাসে উস্তাদ আমাকে পুরো সময় দেন, তাই ভুলগুলো দ্রুত শুধরে নিতে পারছি।",
    role: "শিক্ষার্থী",
  },
  {
    name: "মোসাম্মৎ খাদিজা",
    text: "আলহামদুলিল্লাহ, মাসনুন দুআ এবং প্রয়োজনীয় মাসয়ালা-মাসায়েল কোর্সে অনেক নতুন কিছু শিখতে পেরেছি। এটি আমার দৈনন্দিন জীবনকে সুন্নাহ অনুযায়ী পরিচালনা করতে সাহায্য করছে।",
    role: "শিক্ষার্থী (দ্বীনি শিক্ষা শাখা)",
  },
];

const ReviewSection = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === reviews.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <FadeContent blur={true} duration={700}>
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-tiroBangla">
              শিক্ষার্থীদের <span className="text-primary">অনুভূতি ও অভিজ্ঞতা</span>
            </h2>
            <div className="h-1 w-24 bg-[#C3A753] mx-auto rounded-full"></div>
          </div>

          <div
            className="relative flex items-center justify-center gap-4 md:gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="hidden lg:flex items-center justify-center w-14 h-14 bg-white text-primary rounded-full shadow-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 border border-primary/10"
            >
              <MoveLeft size={28} />
            </button>

            {/* Slider Container */}
            <div className="w-full max-w-4xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] border border-gray-100 relative">

              {/* Islamic Pattern Overlay (Optional Concept) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]"></div>

              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={index} className="flex-shrink-0 w-full p-8 md:p-16 text-center">

                    <div className="flex justify-center mb-6">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Quote size={40} className="text-[#C3A753] fill-[#C3A753]/20" />
                      </div>
                    </div>

                    <p className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-800 leading-[1.8] italic mb-8 font-notoSansBengali">
                      “{review.text}”
                    </p>

                    <div className="w-16 h-1 bg-[#C3A753]/30 mx-auto mb-6"></div>

                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                      {review.name}
                    </h3>
                    <p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest">
                      {review.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="hidden lg:flex items-center justify-center w-14 h-14 bg-white text-primary rounded-full shadow-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 border border-primary/10"
            >
              <MoveRight size={28} />
            </button>
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${current === idx ? "w-8 bg-primary" : "w-2 bg-gray-300"}`}
              ></button>
            ))}
          </div>

        </div>
      </FadeContent>
    </section>
  );
};

export default ReviewSection;