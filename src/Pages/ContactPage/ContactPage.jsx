import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import FAQSection from "../Home/FAQSection/FAQSection";
import FadeContent from "../../Common/AnimatedText/AnimatedText";

const ContactPage = () => {
  return (
    <section className="bg-white min-h-screen">
      {/* Hero Header Section */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-[#060d0d] via-[#0b1a19] to-[#3a2f14] text-white px-4">
        <FadeContent blur={true} duration={700}>
          <h1 className="mb-6 text-4xl md:text-6xl font-bold font-tiroBangla">
            যোগাযোগ ও <span className="text-[#C3A753]">পরামর্শ</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-hindSiliguri text-gray-300 leading-relaxed">
            আপনার যেকোনো জিজ্ঞাসা বা পরামর্শ আমাদের জন্য অত্যন্ত মূল্যবান। দ্বীনি এই ইলমি সফরে আমরা সর্বদা আপনার পাশে আছি ইনশাআল্লাহ।
          </p>
        </FadeContent>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <FadeContent blur={true} duration={800}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Contact Information Side */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-tiroBangla mb-6">
                  আমাদের সাথে <span className="text-primary">যুক্ত হোন</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-hindSiliguri mb-8">
                  আপনি দেশ কিংবা দেশের বাইরে যেখানেই থাকুন, সরাসরি যোগাযোগ করুন। কোর্সের ফি, সময়সূচী কিংবা যেকোনো পরামর্শের জন্য আমাদের হোয়াটসঅ্যাপ বা ইমেইল করতে পারেন।
                </p>
              </div>

              <div className="space-y-6">
                {/* Info Card - Location */}
                <div className="flex items-center gap-5 group p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#C3A753]/10 text-[#C3A753] rounded-full text-xl group-hover:bg-[#C3A753] group-hover:text-white transition-all">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">অফিস ঠিকানা</h4>
                    <p className="text-gray-600">রংপুর, বাংলাদেশ</p>
                  </div>
                </div>

                {/* Info Card - Phone */}
                <div className="flex items-center gap-5 group p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#C3A753]/10 text-[#C3A753] rounded-full text-xl group-hover:bg-[#C3A753] group-hover:text-white transition-all">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">সরাসরি কল করুন</h4>
                    <a href="tel:+8801608318553" className="text-gray-600 hover:text-primary transition-colors">+880 1608-318553</a>
                  </div>
                </div>

                {/* Info Card - Email */}
                <div className="flex items-center gap-5 group p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#C3A753]/10 text-[#C3A753] rounded-full text-xl group-hover:bg-[#C3A753] group-hover:text-white transition-all">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ইমেইল ঠিকানা</h4>
                    <a href="mailto:info@quranicilm.com" className="text-gray-600 hover:text-primary transition-colors">info@quranicilm.com</a>
                  </div>
                </div>

                {/* Info Card - WhatsApp */}
                <div className="flex items-center gap-5 group p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-xl group-hover:bg-green-600 group-hover:text-white transition-all">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">হোয়াটসঅ্যাপ</h4>
                    <a href="https://wa.me/8801608318553" target="_blank" className="text-gray-600 hover:text-green-600 transition-colors">+880 1608-318553</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#C3A753]/10 rounded-[2.5rem] blur-xl -z-10"></div>
              <div className="bg-white shadow-2xl rounded-[2rem] p-8 md:p-12 border border-gray-100 relative">
                <h3 className="text-2xl md:text-3xl font-bold font-tiroBangla text-gray-900 mb-8 border-b border-gray-100 pb-4">
                  আপনার মেসেজ পাঠান
                </h3>

                <form className="space-y-6 font-notoSansBengali">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">আপনার নাম</label>
                      <input
                        type="text"
                        placeholder="নাম লিখুন"
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">মোবাইল নম্বর</label>
                      <input
                        type="text"
                        placeholder="017XXXXXXXX"
                        className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">ইমেইল (ঐচ্ছিক)</label>
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">আপনার জিজ্ঞাসা</label>
                    <textarea
                      rows="4"
                      placeholder="বিস্তারিত এখানে লিখুন..."
                      className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-[#3d633f] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95"
                  >
                    মেসেজ পাঠান
                  </button>
                </form>
              </div>
            </div>

          </div>
        </FadeContent>
      </div>

      <FAQSection />
    </section>
  );
};

export default ContactPage;