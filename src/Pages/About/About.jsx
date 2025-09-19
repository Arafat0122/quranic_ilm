import React from "react";
import {
  FaGlobe,
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
} from "react-icons/fa";
import CreateStudent from "../Home/CreateStudent/CreateStudent";
import FadeContent from "../../Common/AnimatedText/AnimatedText";

const About = () => {
  return (
    <section className="bg-[#FAF9F6] text-[#333] font-notoSansBengali ">
     
      <div className="bg-gradient-to-tr pb-[30px] md:pb-[120px] pt-[130px] md:pt-[200px] from-[#071111] via-[#071111] to-[#50411b] backdrop-blur-2xl  flex flex-col items-center justify-center text-center text-white px-6">
        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="mb-4 text-3xl md:text-5xl font-tiroBangla">
            ইলমুল কুরআন - আপনার বিশ্বস্ত{" "}
            <span className="text-[#C3A753]">ইসলামিক </span> শিক্ষা প্ল্যাটফর্ম
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl font-hindSiliguri">
            ঘরে বসেই অভিজ্ঞ শিক্ষকের মাধ্যমে সহিহ কুরআন শিক্ষা ও ইসলামি জ্ঞান।
          </p>
          <button className="px-6 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-[#0f1e1d] transition mt-[30px]">
            কোর্সগুলো দেখুন
          </button>
        </FadeContent>
      </div>

      <div className="py-[30px] mx-auto  md:py-16 max-w-7xl ">
        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="pb-[30px] text-center  md:pb-20 ">
            <p className="text-2xl md:text-3xl font-naskhArabic mb-4 text-[#146C50]">
              ﴿خَيْرُكُم مَّن تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ﴾
            </p>
            <p className="text-lg italic font-hindSiliguri">
              — “তোমাদের মধ্যে সর্বশ্রেষ্ঠ হলো সে, যে কুরআন শিখে এবং অন্যকে
              শিখায়।”
              <br />
              <span className="text-sm">[সহীহ বুখারী, হাদীস: ৫০২৭]</span>
            </p>
          </div>
        </FadeContent>

        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="grid items-center gap-10 px-4 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl text-black md:text-5xl font-tiroBangla lg:!leading-[70px]">
                ইলমুল কুরআন <span className="text-primary">একাডেমি</span>{" "}
                পরিচিতি
              </h2>

              <p className="mb-4 text-base leading-relaxed font-hindSiliguri md:text-lg">
                <span className="font-semibold">ইলমুল কুরআন</span> একটি আধুনিক
                ইসলামিক একাডেমি, যেখানে বিশ্বের যেকোন প্রান্তে থাকা মুসলিম
                ভাই-বোনেরা ঘরে বসেই প্রামাণ্য, সুন্নাহভিত্তিক ও মানসম্মত ইসলামি
                শিক্ষা গ্রহণ করতে পারেন। আমাদের লক্ষ্য হলো কুরআন ও ইসলামি
                জ্ঞানকে সহজলভ্য ও আকর্ষণীয় করে তোলা।
              </p>

              <p className="mb-4 text-base leading-relaxed font-hindSiliguri md:text-lg">
                আমাদের শিক্ষকেরা মিসরের{" "}
                <span className="font-semibold">আল-আজহার ইউনিভার্সিটি</span>,
                মদিনার ইসলামি বিশ্ববিদ্যালয় এবং দেশের স্বনামধন্য ইসলামী
                প্রতিষ্ঠানে অধ্যয়নরত বা গ্র্যাজুয়েট। তাঁরা অভিজ্ঞ, আমানতদার ও
                সহিহ আকীদা-ভিত্তিক শিক্ষাদানে প্রতিশ্রুতিবদ্ধ।
              </p>

              <p className="text-base leading-relaxed font-hindSiliguri md:text-lg">
                আমাদের বিশ্বাস —{" "}
                <span className="italic">
                  "কুরআন শিখা ও শেখানো শুধু ইবাদত নয়, বরং উম্মাহ গঠনের একটি
                  গুরুত্বপূর্ণ দায়িত্ব।"
                </span>
                তাই প্রযুক্তির মাধ্যমে আমরা তৈরি করেছি একটি সহজ ও নিরাপদ শিক্ষা
                পরিবেশ, যেখানে ছাত্র-শিক্ষক সরাসরি যুক্ত হতে পারে লাইভ ক্লাস,
                স্ক্রিন শেয়ারিং ও ইন্টার‌্যাকটিভ টুলসের মাধ্যমে।
              </p>
            </div>

            <img
              src="/about-us.jpg"
              alt="About Quran Academy"
              className="shadow-lg rounded-xl"
            />
          </div>
        </FadeContent>

        <div>
          <CreateStudent />
        </div>

        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="text-center bg-white border border-[#C3A753] rounded-xl shadow-md p-8 space-y-4 max-w-4xl lg:mx-auto my-[30px] md:my-20 mx-4">
            <h3 className="text-2xl font-tiroBangla text-[#146C50]">
              আপনি যেখানেই থাকুন, আমরা আপনার জন্য আছি!
            </h3>
            <p className="text-base font-hindSiliguri md:text-lg">
              আমরা বিশ্বাস করি — কুরআন শিখা ও শেখানো কেবল ইবাদত নয়, বরং উম্মাহ
              গঠনের একটি গুরুত্বপূর্ণ দায়িত্ব।
            </p>
            <button className="mt-4 px-6 py-2 rounded-full bg-[#C3A753] text-white hover:bg-[#146C50]">
              এখনই ভর্তি হন
            </button>
          </div>
        </FadeContent>


        <div className="text-center ">
          <p className="text-xl font-naskhArabic text-[#146C50] mb-2">
            ﴿طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ﴾
          </p>
          <p className="text-base italic font-hindSiliguri md:text-lg">
            — “জ্ঞান অর্জন করা প্রত্যেক মুসলিমের উপর ফরজ।” <br />
            <span className="text-sm">[ইবনে মাজাহ, হাদীস: ২২৪]</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
