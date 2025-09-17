import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section
            className="relative min-h-[40vh] flex items-center justify-center px-4 md:px-8 bg-cover bg-center"
            style={{
                backgroundColor: "#FAF9F6",
            }}
        >
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12">
                {/* LEFT CONTENT */}
                <div className="text-center md:text-left space-y-6">
                    <h1
                        className="text-4xl md:text-6xl font-tiroBangla font-bold"
                        style={{ color: "#146C50" }}
                    >
                        Qur’anic ‘Ilm
                        <div
                            className="h-1 w-24 mt-2 rounded mx-auto md:mx-0"
                            style={{ backgroundColor: "#C3A753" }}
                        />
                    </h1>
                    <p
                        className="text-lg md:text-xl font-hindSiliguri leading-relaxed"
                        style={{ color: "#333333" }}
                    >
                        একটি আধুনিক ইসলামী একাডেমি, যেখানে আপনি অভিজ্ঞ শিক্ষকদের মাধ্যমে কুরআন ও ইসলামি জ্ঞান অর্জন করতে পারবেন।
                    </p>
                    <Link
                        to="/courses"
                        className="inline-block font-semibold font-hindSiliguri text-base transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                        style={{
                            backgroundColor: "#C3A753",
                            color: "#FAF9F6",
                            padding: "0.75rem 2rem",
                            borderRadius: "999px",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        কোর্সসমূহ দেখুন
                    </Link>
                </div>

                {/* RIGHT IMAGE / ILLUSTRATION */}
                <div className="flex justify-center">
                    <img
                        src="/Quranic-Ilm.png"
                        alt="Islamic Learning Illustration"
                        className="w-72 md:w-full animate-fadeInSlow"
                        loading="lazy"
                    />
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

export default HeroSection;
