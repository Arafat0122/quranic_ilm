import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const faqs = [
  {
    question: "আপনাদের ক্লাসগুলো নেওয়ার পদ্ধতি কী?",
    answer:
      "আমাদের ক্লাসগুলো অভিজ্ঞ উস্তাদদের তত্ত্বাবধানে সরাসরি (Live) নেওয়া হয়। সাধারণত Google Meet অথবা WhatsApp-এর মাধ্যমে ওয়ান-টু-ওয়ান (একজনের জন্য একজন শিক্ষক) পদ্ধতিতে ক্লাসগুলো সম্পন্ন হয়, যাতে শিক্ষার্থী পূর্ণ মনোযোগ পায়।",
  },
  {
    question: "আমি কি একটি ট্রায়াল ক্লাস করতে পারি?",
    answer:
      "জি অবশ্যই! আমাদের পাঠদান পদ্ধতি এবং মান যাচাই করার জন্য আপনি সম্পূর্ণ বিনামূল্যে একটি 'ডিমো বা ট্রায়াল' ক্লাস করতে পারেন। ট্রায়াল ক্লাসের পর আপনি সন্তুষ্ট হলে তবেই নিয়মিত ক্লাস শুরু করার সিদ্ধান্ত নেবেন ইনশাআল্লাহ।",
  },
  {
    question: "কোর্সের হাদিয়া বা ফি কত?",
    answer:
      "দ্বীনি খিদমতের এই পথচলায় আমরা কোনো বাণিজ্যিক ফি নির্ধারণ করিনি। প্রতিষ্ঠানের পরিচালনা ব্যয় এবং উস্তাদদের সম্মানী স্বরূপ আমরা একটি ন্যূনতম হাদিয়া গ্রহণ করি। আপনার সামর্থ্য অনুযায়ী হাদিয়ার বিষয়টি আলোচনার মাধ্যমে ইনশাআল্লাহ সহজ করে নেওয়া যাবে।",
  },
  {
    question: "সপ্তাহে কতদিন এবং কোন সময়ে ক্লাস হবে?",
    answer:
      "সময়ের ব্যাপারে আমরা সর্বোচ্চ নমনীয়তা প্রদান করি। আপনি সপ্তাহে ১ দিন থেকে শুরু করে প্রতিদিনও ক্লাস করার সুযোগ পাবেন। আপনার সুবিধাজনক সময় এবং দিন অনুযায়ী আমাদের উস্তাদরা শিডিউল সাজিয়ে দেবেন।",
  },
  {
    question: "হাদিয়া প্রদানের মাধ্যম কী কী?",
    answer:
      "আপনি খুব সহজেই বিকাশ, নগদ, রকেট অথবা সরাসরি ব্যাংক ট্রান্সফারের মাধ্যমে আপনার হাদিয়া প্রদান করতে পারবেন। বিস্তারিত তথ্যের জন্য আমাদের হোয়াটসঅ্যাপে যোগাযোগ করলে তাৎক্ষণিক সহায়তা পাবেন।",
  },
  {
    question: "মহিলাদের জন্য কি আলাদা কোনো ব্যবস্থা আছে?",
    answer:
      "আলহামদুলিল্লাহ, আমাদের এখানে পর্দার বিধান বজায় রেখে নারী শিক্ষার্থীদের জন্য অভিজ্ঞ নারী উস্তাদ (উস্তাযা) দ্বারা ক্লাস পরিচালনা করার ব্যবস্থা রয়েছে।",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-6 py-16 md:py-24 bg-white">
      <FadeContent blur={true} duration={700}>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              জিজ্ঞাসিত কিছু <span className="text-primary">সাধারণ প্রশ্ন</span>
            </h2>
            <p className="text-gray-500 font-medium">
              আপনার মনে থাকা প্রশ্নগুলোর উত্তর এখানে পাওয়ার চেষ্টা করুন
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border ${isOpen ? "border-primary shadow-lg" : "border-gray-100 shadow-sm"
                    } rounded-2xl bg-white transition-all duration-300 overflow-hidden`}
                >
                  <button
                    className="flex items-center justify-between w-full px-6 py-5 text-left transition-colors"
                    onClick={() => toggle(idx)}
                  >
                    <span className={`text-base md:text-lg font-bold ${isOpen ? "text-primary" : "text-gray-800"
                      }`}>
                      {faq.question}
                    </span>
                    <span className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-gray-400"
                      }`}>
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Help Text */}
          <div className="mt-12 text-center p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-600">
              আপনার কাঙ্ক্ষিত উত্তরটি পাননি? সরাসরি আমাদের সাথে যোগাযোগ করুন।
            </p>
            <button className="mt-3 text-primary font-bold hover:underline">
              হোয়াটসঅ্যাপে প্রশ্ন করুন →
            </button>
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default FAQSection;