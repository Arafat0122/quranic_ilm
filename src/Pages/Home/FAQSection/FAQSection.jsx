import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

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
        <section
            className="px-4 py-16 relative"
            style={{ backgroundColor: "#FAF9E9" }}
        >
            <div className="max-w-4xl mx-auto">
                <h2
                    className="text-3xl md:text-5xl font-tiroBangla font-bold text-center mb-12"
                    style={{ color: "#146C50" }}
                >
                    সচরাচর প্রশ্ন ও উত্তর
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-[#C3A753] rounded-xl bg-white shadow-md transition-all duration-300"
                        >
                            <button
                                className="w-full flex justify-between items-center px-6 py-4 font-hindSiliguri text-base md:text-lg text-left"
                                onClick={() => toggle(idx)}
                            >
                                <span style={{ color: "#333333" }}>{faq.question}</span>
                                <span className="text-[#C3A753] text-xl">
                                    {openIndex === idx ? <FiMinus /> : <FiPlus />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 px-6 ${openIndex === idx ? "max-h-96 pb-4" : "max-h-0"
                                    }`}
                            >
                                <p
                                    className="font-notoSansBengali text-sm md:text-base text-justify"
                                    style={{ color: "#333333" }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Curved SVG Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="w-full h-20 md:h-28"
                >
                    <path
                        d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,90.7C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32V100H1392C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100H0Z"
                        fill="#FAF9E9"
                    />
                </svg>
            </div>
        </section>
    );
};

export default FAQSection;