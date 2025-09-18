import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const faqs = [
  {
    question: "ক্লাস কীভাবে নেওয়া হবে?",
    answer:
      "ক্লাসগুলো সরাসরি অভিজ্ঞ শিক্ষক দ্বারা Google Meet অথবা WhatsApp কলের মাধ্যমে নেওয়া হবে। প্রয়োজন অনুযায়ী স্ক্রিন শেয়ার ও অন্যান্য টেকনিক্যাল সহায়তা প্রদান করা হবে।",
  },
  {
    question: "কীভাবে ফ্রি ট্রায়াল ক্লাস পাবো?",
    answer:
      "ফর্ম পূরণ বা WhatsApp-এ যোগাযোগ করলেই আপনি একটি সম্পূর্ণ ফ্রি ট্রায়াল ক্লাস নিতে পারবেন। এতে আপনি আমাদের পদ্ধতি ও মান বুঝতে পারবেন ইনশাআল্লাহ।",
  },
  {
    question: "ট্রায়াল ক্লাসের পর কী করতে হবে?",
    answer:
      "ট্রায়াল ক্লাস ভালো লাগলে, আপনি আপনার পছন্দের সময় ও দিন অনুযায়ী ক্লাস চালিয়ে যেতে পারবেন। মাস শেষে শুধুমাত্র ক্লাস অনুযায়ী হাদিয়া নির্ধারিত হবে।",
  },
  {
    question: "হাদিয়া বা ফি কত?",
    answer:
      "আমরা কোনো নির্ধারিত হাদিয়া নির্ধারণ করি না। আপনি আপনার সামর্থ্য অনুযায়ী আমাদের খেদমতের জন্য হাদিয়া দিতে পারেন ইনশাআল্লাহ।",
  },
  {
    question: "পেমেন্ট কীভাবে করবো?",
    answer:
      "আপনি আমাদের ব্যাংক অ্যাকাউন্ট, বিকাশ, নগদ অথবা রকেটের মাধ্যমে সহজেই পেমেন্ট করতে পারবেন। বিস্তারিত পেমেন্ট তথ্য WhatsApp-এ যোগাযোগ করলেই পাওয়া যাবে।",
  },
  {
    question: "সাপ্তাহে কতদিন ক্লাস করতে পারব?",
    answer:
      "আপনি চাইলে সপ্তাহে ১ দিন থেকে শুরু করে প্রতিদিনও ক্লাস করতে পারবেন। সময় ও দিনের বিষয়টি আপনি আপনার সুবিধামতো নির্ধারণ করতে পারবেন।",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-4 pt-[20px] md:pt-[60px] lg:pt-[120px]">
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center text-black lg:mb-12 md:text-5xl font-tiroBangla">
            শিক্ষার্থীদের জন্য{" "}
            <span className="text-primary">সাধারণ প্রশ্ন</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#C3A753]/50 rounded-xl bg-white shadow-md transition-all duration-300"
              >
                <button
                  className="flex items-center justify-between w-full px-6 py-4 text-base text-left font-hindSiliguri md:text-lg"
                  onClick={() => toggle(idx)}
                >
                  <span style={{ color: "#333333" }}>{faq.question}</span>
                  <span className="text-[#C3A753] text-xl">
                    {openIndex === idx ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 px-6 ${
                    openIndex === idx ? "max-h-96 pb-4" : "max-h-0"
                  }`}
                >
                  <p
                    className="text-sm text-justify font-notoSansBengali md:text-base"
                    style={{ color: "#333333" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default FAQSection;
