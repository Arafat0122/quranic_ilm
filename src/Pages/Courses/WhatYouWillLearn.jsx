import FadeContent from "../../Common/AnimatedText/AnimatedText";

const WhatYouWillLearn = () => {


  return (
    <section className="">
      <div className=" flex flex-col items-center justify-center text-center bg-gradient-to-tr from-[#071111] via-[#071111] to-[#50411b] text-white pt-[120px] pb-[30px] md:pt-[150px] px-4 md:pb-[120px]">
        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="mb-4 text-3xl md:text-5xl font-tiroBangla">
            ইলমুল <span className="text-[#C3A753]">কোরআন</span> আপনি যা শিখতে
            পারবেন
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg font-hindSiliguri">
            ঘরে বসেই সহিহ কুরআন শিক্ষা ও ইসলামিক জ্ঞান — সরাসরি অভিজ্ঞ শিক্ষকের
            তত্ত্বাবধানে।
          </p>
          <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#0f1e1d] transition mt-[30px]">
            এখনই শুরু করুন
          </button>
        </FadeContent>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;