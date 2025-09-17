import {
    FiBookOpen,
    FiUsers,
    FiCheckCircle,
} from "react-icons/fi";
import { FaQuran } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

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

const HomeCoursesSection = () => {
    const handleWhatsApp = (courseTitle) => {
        const url = `https://wa.me/8801608318553?text=${encodeURIComponent(
            `আমি ${courseTitle} কোর্সে ভর্তি হতে আগ্রহী।`
        )}`;
        window.open(url, "_blank");
    };

    return (
        <section className="py-20 pb-32 px-4 bg-[#FAF9E6] relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-tiroBangla text-center font-bold text-[#146C50] mb-12">
                    আমাদের জনপ্রিয় কোর্সসমূহ
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#C3A753] rounded-xl p-6 shadow-lg flex flex-col transition hover:-translate-y-1 hover:shadow-xl duration-300 w-96 lg:w-full mx-auto"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-20 h-20 mx-auto mb-4"
                            />

                            <h3 className="text-xl font-tiroBangla text-[#146C50] mb-2 text-center">
                                {course.title}
                            </h3>

                            <span className="text-sm font-hindSiliguri bg-[#C3A753] text-white px-3 py-1 rounded-full text-center mx-auto mb-4 inline-block">
                                {course.tag}
                            </span>

                            <ul className="text-sm font-hindSiliguri text-[#333333] space-y-3 mb-6">
                                {course.features.map((feature, i) => (
                                    <li key={i} className="flex gap-2 items-start">
                                        <span className="text-[#C3A753] text-lg mt-1">{feature.icon}</span>
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleWhatsApp(course.title)}
                                className="mt-auto font-hindSiliguri bg-[#C3A753] text-[#FAF9F6] px-6 py-2 rounded-full transition hover:bg-emerald-700"
                            >
                                ভর্তি হোন
                            </button>
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
                        fill="#FAF9F9"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HomeCoursesSection;