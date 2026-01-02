import React from "react";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const EasyQuranLearning = () => {
  return (
    <section className="bg-white overflow-hidden">
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="flex flex-col gap-10 lg:gap-[100px] items-center py-16 md:py-24 lg:py-32 justify-center mx-auto max-w-7xl px-6 lg:flex-row">

          {/* Text Content Area */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] lg:leading-[1.3]">
              আধুনিক প্রযুক্তিতে <br />
              <span className="text-primary">সহজ ও শুদ্ধ</span> কুরআন শিক্ষা
            </h2>

            <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                সময়ের ব্যস্ততায় আমাদের অনেকেরই ইচ্ছা থাকা সত্ত্বেও কুরআন শেখা হয়ে ওঠে না। অনলাইন কুরআন শিক্ষা আপনাকে সেই সুযোগ করে দিচ্ছে, যেখানে আপনি আপনার সুবিধাজনক সময়ে পৃথিবীর যেকোনো প্রান্ত থেকে সরাসরি উস্তাদদের সান্নিধ্যে ইলম অর্জন করতে পারবেন।
              </p>
              <p className="font-medium text-gray-700">
                আমাদের এই পাঠ্যক্রম এমনভাবে সাজানো হয়েছে, যা আপনার ব্যক্তিগত প্রয়োজন এবং ব্যস্ত জীবনযাত্রার সাথে সামঞ্জস্যপূর্ণ। ঘরে বসেই একান্তে সহিহ-শুদ্ধভাবে আল্লাহর কালাম শেখার এই সুযোগ আপনার আধ্যাত্মিক পথচলাকে করবে আরও সহজ ইনশাআল্লাহ।
              </p>
            </div>

            <div className="pt-4">
              <button className="px-10 py-4 font-bold text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-primary hover:shadow-xl hover:-translate-y-1 active:scale-95">
                আপনার ইলমি সফর শুরু করুন
              </button>
            </div>
          </div>

          {/* Image Area with Decorative Frame */}
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-[60px] -rotate-3 scale-95 pointer-events-none"></div>
            <img
              src="/online-quran.png"
              alt="কুরআন শিক্ষা অনলাইন"
              className="relative z-10 w-full h-auto object-cover rounded-t-[60px] rounded-br-[60px] shadow-2xl border-b-8 border-primary"
            />
            {/* Floating Badge (Optional) */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <p className="text-primary font-bold text-xl">১০০% অনলাইন</p>
              <p className="text-gray-500 text-sm">সরাসরি লাইভ সেশন</p>
            </div>
          </div>

        </div>
      </FadeContent>
    </section>
  );
};

export default EasyQuranLearning;