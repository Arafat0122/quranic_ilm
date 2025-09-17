import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-[#0F1E1D] text-[#FAF9F6] pt-12 pb-6 px-4 md:px-10 font-hindSiliguri">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-3xl font-tiroBangla mb-2 text-[#C3A753]">Qur’anic ‘Ilm</h2>
                    <p className="text-sm text-[#FAF9F6]/80">
                        একটি বিশ্বস্ত ইসলামি অনলাইন একাডেমি যেখানে আপনি হিফজ, সহিহ কুরআন শিক্ষা এবং আরবি ভাষা শিখতে পারবেন অভিজ্ঞ শিক্ষকদের মাধ্যমে।
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-[#C3A753] mb-4">দ্রুত লিংক</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">হোম</a></li>
                        <li><a href="/courses" className="hover:underline">কোর্সসমূহ</a></li>
                        <li><a href="/contact" className="hover:underline">যোগাযোগ</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-bold text-[#C3A753] mb-4">যোগাযোগ</h3>
                    <ul className="text-sm space-y-3 text-[#FAF9F6]/90">
                        <li className="flex items-center gap-2">
                            <FiPhone className="text-[#C3A753]" />
                            <span>+8801xxxxxxxx</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMail className="text-[#C3A753]" />
                            <span>quranicilm@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMapPin className="text-[#C3A753]" />
                            <span>Cairo, Egypt</span>
                        </li>
                    </ul>
                </div>

                {/* WhatsApp Button */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-[#C3A753] mb-4">যোগ দিন</h3>
                    <p className="text-sm mb-4">ক্লাসে অংশ নিতে WhatsApp এ বার্তা পাঠান</p>
                    <a
                        href="https://wa.me/8801608318553?text=আমি কুরআন শেখার কোর্সে ভর্তি হতে চাই।"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#C3A753] text-[#FAF9F6] px-6 py-2 rounded-full font-semibold text-sm hover:bg-emerald-700 transition shadow"
                    >
                        WhatsApp এ মেসেজ করুন
                    </a>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t border-[#FAF9F6]/20 mt-12 pt-4 text-center text-sm text-[#FAF9F6]/70">
                © {new Date().getFullYear()} Qur’anic ‘Ilm. সর্বস্বত্ব সংরক্ষিত।
            </div>
        </footer>
    );
};

export default Footer;
