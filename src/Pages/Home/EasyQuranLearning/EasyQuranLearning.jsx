import React from "react";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const EasyQuranLearning = () => {
  return (
    <section>
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="flex flex-col gap-4 lg:gap-[70px] items-center py-[30px] md:py-[60px] lg:py-[120px] justify-center mx-auto max-w-7xl px-4 lg:flex-row">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="mb-4 text-3xl font-bold text-black md:text-4xl lg:!leading-[60px]">
              সহজ কোরআন শিক্ষা <br />
              অনলাইনের মাধ্যমে <span className="text-primary">সহজভাবে</span>
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              অনলাইন কোরআন শিক্ষা আপনাকে সুবিধা দেয় যে আপনি আপনার সুবিধাজনক
              সময় ও স্থানে কোরআন শেখার পাঠ নিতে পারবেন। এটি একটি গুরুত্বপূর্ণ
              ধর্মীয় শিক্ষার সুযোগ যা সহজেই অনুসরণযোগ্য।
            </p>
            <p className="mb-8 text-lg text-gray-700">
              অনলাইন কোরআন শিক্ষা নমনীয়তা এবং সুবিধা প্রদান করে, যা আপনাকে
              আপনার শেখার অভিজ্ঞতা আপনার প্রয়োজন এবং সময়সূচি অনুযায়ী সাজাতে
              সাহায্য করে।
            </p>
            <button className="px-6 py-3 font-semibold text-white transition-colors duration-300 bg-black rounded-full hover:bg-gray-800">
              সকল স্তরের জন্য শেখা
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/online-quran.png"
              alt="একট"
              className="w-full h-auto lg:h-[400px] rounded-t-[50px] rounded-br-[50px]"
            />
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default EasyQuranLearning;
