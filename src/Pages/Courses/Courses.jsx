import { FiBookOpen, FiUsers, FiClock, FiCheckCircle } from "react-icons/fi";
import { FaQuran } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import WhatYouWillLearn from "./WhatYouWillLearn";

const courses = [
    {
        title: "হিফযুল কোরআন",
        image: "https://openclipart.org/image/2000px/283527",
        features: [
            { icon: <FiUsers />, text: "৫ বছরের ওপরের বাচ্চা থেকে যেকোন বয়সের নারী-পুরুষ" },
            { icon: <FaQuran />, text: "সম্পূর্ণ কোরআন সহিহ শুদ্ধভাবে হিফয" },
            { icon: <FiBookOpen />, text: "মাখরাজ, তাজবীদ, সিফাত" },
            { icon: <FiCheckCircle />, text: "নাজরানা, মাসলা মাসায়েল" },
            { icon: <MdOutlineSupportAgent />, text: "২৪/৭ Whatsapp সাপোর্ট" },
        ],
        tag: "সবার জন্য",
    },
    {
        title: "সহিহ কোরআন শিক্ষা",
        image: "https://parspng.com/wp-content/uploads/2022/09/quranpng.parspng.com-9.png",
        features: [
            { icon: <FiBookOpen />, text: "মাখরাজ, তাজবীদ, সিফাত" },
            { icon: <FaQuran />, text: "নাজরানা, মাসনুন দোয়া" },
            { icon: <FiCheckCircle />, text: "প্রয়োজনীয় আয়াত / সুরাহ" },
            { icon: <FiCheckCircle />, text: "প্রয়োজনীয় মাসলা মাসায়েল" },
            { icon: <MdOutlineSupportAgent />, text: "২৪/৭ Whatsapp সাপোর্ট" },
        ],
        tag: "অধিক জনপ্রিয়",
    },
    {
        title: "আরবি ভাষা শিক্ষা",
        image: "https://img1.wsimg.com/isteam/ip/259fed34-5487-48a2-ab30-490aced15016/Main%20Icon.png/:/",
        features: [
            { icon: <FiBookOpen />, text: "Hedayatun Nahu (Arabic-Bangla)" },
            { icon: <FiBookOpen />, text: "Mijanus-sarf, Munshaib" },
            { icon: <FiBookOpen />, text: "Essential Tamrinaat" },
            { icon: <FiBookOpen />, text: "মাখরাজ, তাজবীদ, সিফাত" },
            { icon: <MdOutlineSupportAgent />, text: "২৪/৭ Whatsapp সাপোর্ট" },
        ],
        tag: "নতুন কোর্স",
    },
];

const Courses = () => {
    const handleWhatsApp = (course) => {
        const url = `https://wa.me/8801608318553?text=${encodeURIComponent(
            `আমি ${course} কোর্সে ভর্তি হতে আগ্রহী।`
        )}`;
        window.open(url, "_blank");
    };

    return (
        <section
            className="px-4 py-16"
            style={{ backgroundColor: "#FAF9F6" }}
        >
            <div className="max-w-7xl mx-auto">
                {/* What You Will Learn Box */}
                <WhatYouWillLearn />


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {courses.map((course, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-[#C3A753] w-96 lg:w-full mx-auto"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-20 h-20 mx-auto mb-4"
                            />

                            <h3
                                className="text-2xl font-tiroBangla mb-2"
                                style={{ color: "#146C50" }}
                            >
                                {course.title}
                            </h3>

                            {course.tag && (
                                <span
                                    className="text-base px-3 py-1 rounded-full mb-4 font-hindSiliguri w-fit mx-auto"
                                    style={{
                                        backgroundColor: "#C3A753",
                                        color: "#FAF9F6",
                                    }}
                                >
                                    {course.tag}
                                </span>
                            )}

                            <ul className="text-left font-hindSiliguri text-base mb-6 space-y-3" style={{ color: "#333333" }}>
                                {course.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-[#C3A753] text-lg mt-1">
                                            {feature.icon}
                                        </span>
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleWhatsApp(course.title)}
                                className="mt-auto font-hindSiliguri px-6 py-2 rounded-full transition duration-300 hover:scale-105 shadow"
                                style={{
                                    backgroundColor: "#C3A753",
                                    color: "#FAF9F6",
                                }}
                            >
                                আজই শুরু করুন
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;