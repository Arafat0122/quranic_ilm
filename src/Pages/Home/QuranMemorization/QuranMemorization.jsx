import React from "react";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const QuranMemorization = () => {
  return (
    <FadeContent
      blur={true}
      duration={700}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="flex flex-col-reverse gap-6 lg:gap-[70px] items-center justify-center mx-auto max-w-7xl px-4 lg:flex-row">
        <div className="flex justify-center flex-1 mb-8 md:justify-start md:mb-0">
          <img
            src="/memorize-quran.png"
            alt="কোরআনের"
            className="w-full h-auto lg:h-[400px] rounded-t-[50px] rounded-bl-[50px]"
          />
        </div>

        <div className="flex-1 ">
          <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl !leading-[50px]">
            কিভাবে সহজে কোরআন{" "}
            <span className="text-primary">অনলাইনে memorize করবেন</span>
          </h2>

          <p className="mb-8 text-lg text-gray-700">
            কোরআন memorize করা একটি মহৎ ও পুরস্কারপ্রদ কাজ। অনলাইন সংস্থানগুলোর
            মাধ্যমে এটি আগের চেয়ে অনেক সহজলভ্য হয়েছে।
          </p>

          <div className="grid grid-cols-1 text-black sm:grid-cols-2 gap-x-8 gap-y-3">
            <p className="font-semibold">নিয়ত ঠিক করুন</p>
            <p className="font-semibold">নির্দিষ্ট স্থান তৈরি করুন</p>
            <p className="font-semibold">শুনুন এবং পুনরাবৃত্তি করুন</p>

            <p className="font-semibold">বিভাগে ভাগ করুন</p>
            <p className="font-semibold">নির্দিষ্ট সূরা নির্বাচন করুন</p>
          </div>

          <button className="px-6 py-3 mt-8 font-semibold text-white transition-colors duration-300 bg-black rounded-full hover:bg-gray-800">
            সকল স্তরের জন্য শেখা
          </button>
        </div>
      </div>
    </FadeContent>
  );
};

export default QuranMemorization;
