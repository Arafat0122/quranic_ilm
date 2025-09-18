import { useState } from "react";
import FadeContent from "../../Common/AnimatedText/AnimatedText";

const WhatYouWillLearn = () => {
  const [expanded, setExpanded] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [displayText, setDisplayText] = useState("short");

  const shortText = `ইলমুল কোরআন-এ আপনি সরাসরি অভিজ্ঞ শিক্ষকের মাধ্যমে লাইভ ওয়ান-টু-ওয়ান ক্লাস করার সুযোগ পাবেন। ক্লাসগুলো Google Meet অথবা WhatsApp কলের মাধ্যমে পরিচালিত হয় এবং প্রয়োজনীয় স্ক্রিন শেয়ার ও টেকনিক্যাল সহায়তা নিশ্চিত করা হয়।`;

  const fullText = `ইলমুল কোরআন-এ আপনি সরাসরি অভিজ্ঞ শিক্ষকের মাধ্যমে লাইভ ওয়ান-টু-ওয়ান ক্লাস করার সুযোগ পাবেন। ক্লাসগুলো Google Meet অথবা WhatsApp কলের মাধ্যমে পরিচালিত হয় এবং প্রয়োজনীয় স্ক্রিন শেয়ার ও টেকনিক্যাল সহায়তা নিশ্চিত করা হয়।
    আমাদের প্রতিটি শিক্ষককে অনলাইন ক্লাস নেওয়ার টেকনিক্যাল বিষয়ে প্রশিক্ষণ দেওয়া হয়, যাতে আপনাকে সর্বোচ্চ মানের শিক্ষা দিতে পারি ইনশা-আল্লাহ।
    সাধারণত ৩০ মিনিট বা ৬০ মিনিটের ক্লাস অফার করা হয়, তবে আপনি চাইলে সময়, দিন, কিংবা দৈর্ঘ্য আপনার সুবিধামত কাস্টমাইজ করতে পারেন। সপ্তাহের যেকোনো দিন, আপনার সুবিধামত সময়ে ক্লাস নিতে পারবেন।
    ক্লাস টাইম বা তারিখও আপনি প্রয়োজনে শিক্ষকের সঙ্গে সরাসরি আলোচনা করে পরিবর্তন করতে পারবেন।
    আমরা আগেই কোনো হাদিয়া/ফি গ্রহণ করি না। প্রথমে একটি ট্রায়াল ক্লাস নিতে পারবেন। তারপর আপনি আমাদের পদ্ধতি, মান, এবং সেবা পছন্দ করলে, মাস শেষে আপনি যতগুলো ক্লাস করেছেন তার জন্য কেবলমাত্র সেগুলোরই ইনভয়েস প্রদান করা হবে।
    আমাদের ওয়েবসাইট বা ফেসবুকে কোনো নির্ধারিত ফি উল্লেখ করা হয় না — আপনি আমাদের সঙ্গে কথা বলে আপনার সাধ্য ও ইচ্ছা অনুযায়ী হাদিয়ার পরিমাণ নির্ধারণ করবেন ইনশা-আল্লাহ।
    আমরা চাই, আপনি কুরআনর এই খেদমতে আপনার সামর্থ্য অনুযায়ী অংশ নিন এবং আপনার জীবন কুরআনর আলোয় আলোকিত করুন।`;

  const handleToggle = () => {
    setIsFading(true);
    setTimeout(() => {
      setDisplayText(displayText === "short" ? "full" : "short");
      setExpanded(!expanded);
      setIsFading(false);
    }, 300);
  };

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
