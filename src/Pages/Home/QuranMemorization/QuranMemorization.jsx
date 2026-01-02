import React from "react";
import { CheckCircle2 } from "lucide-react"; // আইকন ব্যবহারের জন্য
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const QuranMemorization = () => {
  const points = [
    "ইখলাসের সাথে নিয়ত করা",
    "ইলম অর্জনের পরিবেশ তৈরি",
    "তিলওয়াত শ্রবণ ও মাস্ক করা",
    "ছোট ছোট অংশে ভাগ করে মুখস্থ",
    "পরিকল্পিতভাবে সূরা নির্বাচন",
    "প্রতিদিনের পড়া নিয়মিত শোনানো",
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="flex flex-col-reverse gap-10 lg:gap-[80px] items-center justify-center mx-auto max-w-7xl px-4 lg:flex-row">

          {/* Image Area */}
          <div className="flex justify-center flex-1 relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-t-[50px] rounded-bl-[50px] blur-lg group-hover:blur-xl transition-all opacity-50"></div>
            <img
              src="/memorize-quran.png"
              alt="কুরআন হিফয"
              className="relative w-full h-auto lg:h-[450px] object-cover rounded-t-[50px] rounded-bl-[50px] shadow-xl border-l-4 border-primary"
            />
          </div>

          {/* Text Content Area */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              অনলাইনে কিভাবে সহজে <br />
              <span className="text-primary italic">কুরআন হিফয</span> করবেন?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              কুরআন হিফয করা মহান আল্লাহর এক বিশেষ নিয়ামত। আধুনিক প্রযুক্তির কল্যাণে এখন ঘরে বসেই অভিজ্ঞ হাফেজ উস্তাদদের তত্ত্বাবধানে আপনি আপনার হিফযের সফরটি শুরু করতে পারেন ইনশাআল্লাহ।
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-gray-800">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-10 py-4 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-primary shadow-lg hover:shadow-primary/30 hover:-translate-y-1">
                আপনার হিফয সফর শুরু করুন
              </button>
            </div>
          </div>

        </div>
      </FadeContent>
    </section>
  );
};

export default QuranMemorization;