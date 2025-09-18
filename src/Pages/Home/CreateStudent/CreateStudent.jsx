import React from "react";
import { BookOpen, Calendar, UserCheck, Gamepad2 } from "lucide-react";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const CreateStudent = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-600" />,
      title: "অনলাইন লার্নিং প্ল্যাটফর্ম",
      description:
        "একটি সুসংগঠিত কোর্স পরিকল্পনা অনুসরণ করে, আপনার শিক্ষক আপনাকে দ্রুত এবং সঠিকভাবে শেখার জন্য গাইড করবেন।",
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-600" />,
      title: "লচিকতাসম্পন্ন সময়সূচি",
      description:
        "আপনার আরবি এবং কোরআন ক্লাসের সময় নিজের সুবিধা অনুযায়ী নির্ধারণ করুন! আমাদের শিক্ষক ২৪/৭ উপলব্ধ।",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-yellow-600" />,
      title: "লাইভ শিক্ষক",
      description:
        "ইন্টারেক্টিভ লাইভ ক্লাস যেখানে বিশেষজ্ঞ শিক্ষক আপনাকে ধাপে ধাপে গাইড করবেন।",
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-yellow-600" />,
      title: "খেলাধুলা ও কার্যক্রম",
      description:
        "আমাদের অনলাইন কার্যক্রম কেন্দ্রের মাধ্যমে গেম, ওয়ার্কশীট এবং শেখার উপকরণ পাওয়া যাবে।",
    },
  ];

  return (
    <section className="pt-[30px] md:pt-20 lg:pt-[120px] px-4">
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="mx-auto max-w-7xl ">
          <header className="flex flex-col items-center justify-between w-full gap-4 mb-10 lg:gap-8 lg:flex-row">
            <h1 className="lg:mb-4 text-2xl md:text-4xl font-bold text-black md:!leading-[50px]">
              শিক্ষার্থীদের সফলতা নিশ্চিত করছি <br />{" "}
              <span className="text-primary">আল কোরআন</span> এর মাধ্যমে
            </h1>
            <p className="max-w-md text-sm text-black md:text-base">
              আমরা বুঝি সবাইর সময়সূচি ভিন্ন। এজন্য আমরা নমনীয় লার্নিং অপশন
              প্রদান করি।
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 p-8 text-white rounded-xl md:grid-cols-2 2xl:grid-cols-4 bg-primary md:p-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-full p-6 text-center text-gray-800 bg-white shadow-lg rounded-2xl md:p-8"
              >
                <div className="p-3 mb-4 bg-yellow-200 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default CreateStudent;
