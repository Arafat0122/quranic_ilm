import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
    return (
        <section className="bg-[#FAF9F6] py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* CONTACT INFO SECTION */}
                <div>
                    <h2 className="text-4xl font-tiroBangla text-[#146C50] mb-4">
                        যোগাযোগ করুন
                    </h2>
                    <p className="font-hindSiliguri text-[#333333] text-base md:text-lg mb-6 leading-relaxed">
                        আপনি দেশ কিংবা দেশের বাইরে যেখানেই থাকুন, আমাদের মেহমান হিসেবে আপনাকে স্বাগতম।
                        যেকোনো প্রশ্ন, কোর্স সম্পর্কে জানতে কিংবা ভর্তির জন্য সরাসরি যোগাযোগ করুন।
                    </p>

                    <ul className="space-y-4 font-hindSiliguri text-[#333333] text-base">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-[#C3A753] text-xl mt-1" />
                            <span>কায়রো, মিশর</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaPhoneAlt className="text-[#C3A753] text-xl mt-1" />
                            <a className="hover:underline">+8801xxxxxxxx</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaEnvelope className="text-[#C3A753] text-xl mt-1" />
                            <a href="mailto:info@quranicilm.com" className="hover:underline">info@quranicilm.com</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <FaWhatsapp className="text-[#C3A753] text-xl mt-1" />
                            <a href="https://wa.me/8801608318553" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                WhatsApp: +8801xxxxxxxx
                            </a>
                        </li>
                    </ul>
                </div>

                {/* CONTACT FORM */}
                <div className="bg-white shadow-xl rounded-2xl border border-[#C3A753] p-8">
                    <h3 className="text-2xl font-tiroBangla text-[#146C50] mb-6">আমাদেরকে মেসেজ পাঠান</h3>

                    <form className="space-y-5 font-notoSansBengali">
                        <div>
                            <label className="block mb-1 text-[#333333]">নাম</label>
                            <input
                                type="text"
                                placeholder="আপনার নাম"
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C3A753]"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-[#333333]">ইমেইল</label>
                            <input
                                type="email"
                                placeholder="আপনার ইমেইল"
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C3A753]"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-[#333333]">মেসেজ</label>
                            <textarea
                                rows="5"
                                placeholder="আপনার বার্তা লিখুন..."
                                className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C3A753]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#C3A753] hover:bg-emerald-700 text-[#FAF9F6] py-3 rounded-full font-semibold transition-all"
                        >
                            মেসেজ পাঠান
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;