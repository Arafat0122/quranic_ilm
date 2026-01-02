import { FiMail, FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; // হোয়াটসঅ্যাপের নিজস্ব আইকন বেশি মানানসই

const Footer = () => {
    return (
        <footer className="bg-[#0A1615] text-[#FAF9F6] pt-16 pb-8 px-6 md:px-10 font-hindSiliguri border-t-4 border-[#C3A753]">
            <div className="grid grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">

                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold font-tiroBangla text-[#C3A753] tracking-wide">
                        Qur’anic ‘Ilm
                    </h2>
                    <p className="text-[15px] leading-relaxed text-gray-400">
                        সহিহ শুদ্ধভাবে কুরআন শিক্ষা ও ইসলামি জ্ঞান চর্চার একটি বিশ্বস্ত অনলাইন প্ল্যাটফর্ম। অভিজ্ঞ উস্তাদদের তত্ত্বাবধানে আমরা ছড়িয়ে দিচ্ছি কুরআনের নূর।
                    </p>
                    <div className="flex gap-4 pt-2">
                        {/* সামাজিক যোগাযোগ মাধ্যমের আইকন যোগ করা যেতে পারে */}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-[#C3A753] mb-6 font-tiroBangla">দ্রুত লিংক</h3>
                    <ul className="space-y-3 text-[15px]">
                        <li>
                            <a href="/" className="flex items-center gap-2 text-gray-300 hover:text-[#C3A753] transition-colors group">
                                <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-xs" />
                                হোম পেজ
                            </a>
                        </li>
                        <li>
                            <a href="/courses" className="flex items-center gap-2 text-gray-300 hover:text-[#C3A753] transition-colors group">
                                <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-xs" />
                                কোর্সসমূহ
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="flex items-center gap-2 text-gray-300 hover:text-[#C3A753] transition-colors group">
                                <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-all text-xs" />
                                যোগাযোগ
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold text-[#C3A753] mb-6 font-tiroBangla">যোগাযোগ</h3>
                    <ul className="text-[15px] space-y-4 text-gray-300">
                        <li className="flex items-center gap-3 group">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#C3A753] group-hover:bg-[#C3A753] group-hover:text-white transition-all">
                                <FiPhone />
                            </div>
                            <a href="tel:+8801608318553" className="hover:text-white transition-colors">+88 01608-318553</a>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#C3A753] group-hover:bg-[#C3A753] group-hover:text-white transition-all">
                                <FiMail />
                            </div>
                            <a href="mailto:info@quranicilm.com" className="hover:text-white transition-colors italic">info@quranicilm.com</a>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#C3A753] group-hover:bg-[#C3A753] group-hover:text-white transition-all">
                                <FiMapPin />
                            </div>
                            <span>রংপুর, বাংলাদেশ (Rangpur, Bangladesh)</span>
                        </li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner">
                    <h3 className="text-xl font-bold text-[#C3A753] mb-4 font-tiroBangla">আজই শুরু করুন</h3>
                    <p className="mb-6 text-sm text-gray-400 leading-relaxed">
                        দ্বীনি ইলম অর্জনের পথে আপনার প্রথম পদক্ষেপ নিতে আমাদের হোয়াটসঅ্যাপে বার্তা পাঠান।
                    </p>
                    <a
                        href="https://wa.me/8801608318553?text=আসসালামু আলাইকুম, আমি আপনাদের কুরআন শিক্ষা কোর্সে ভর্তি হতে আগ্রহী।"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/20"
                    >
                        <FaWhatsapp className="text-xl" />
                        হোয়াটসঅ্যাপে মেসেজ দিন
                    </a>
                </div>
            </div>

            {/* Bottom Credit */}
            <div className="border-t border-white/10 mt-16 pt-8 flex flex-col items-center gap-4">
                <p className="text-sm text-gray-500 font-hindSiliguri">
                    © {new Date().getFullYear()} <span className="text-[#C3A753] font-bold">Qur’anic ‘Ilm</span>. আল্লাহর সন্তুষ্টির উদ্দেশ্যে একটি ক্ষুদ্র প্রচেষ্টা।
                </p>

                <p className="text-xs text-gray-500 font-hindSiliguri">
                    Developed by{" "}
                    <a
                        href="https://codesraft.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C3A753] hover:text-white transition-all font-semibold"
                    >
                        CodesRaft
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;