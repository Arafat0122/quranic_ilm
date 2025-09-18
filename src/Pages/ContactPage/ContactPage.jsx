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
    <section className="pb-[30px] md:pb-20">
      <div className="pt-[120px] pb-[30px] md:pt-[150px]  md:pb-[120px] flex flex-col items-center justify-center text-center bg-gradient-to-tr from-[#071111] via-[#071111] to-[#50411b] text-white px-4">
        <FadeContent
          blur={true}
          duration={700}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="mb-4 text-3xl md:text-5xl font-tiroBangla">
            আমাদের সঙ্গে <span className="text-[#C3A753]">যোগাযোগ</span> করুন
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg font-hindSiliguri">
            আপনার যেকোনো প্রশ্ন, জিজ্ঞাসা বা ভর্তির জন্য আমাদের সঙ্গে সরাসরি
            যোগাযোগ করুন। আমরা সবসময় আপনার জন্য প্রস্তুত।
          </p>
        </FadeContent>
      </div>

      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="grid  pt-[30px] md:pt-[60px] lg:pt-[120px] max-w-6xl grid-cols-1 gap-10 px-4 mx-auto p md:grid-cols-2">
          {/* CONTACT INFO */}
          <div>
            <h2 className="mb-4 text-3xl text-black md:text-5xl font-tiroBangla">
              আমাদের সঙ্গে <span className="text-primary">যোগাযোগ</span> করুন
            </h2>
            <p className="font-hindSiliguri text-[#333333] text-base md:text-lg mb-6 leading-relaxed">
              আপনি দেশ কিংবা দেশের বাইরে যেখানেই থাকুন, আমাদের মেহমান হিসেবে
              আপনাকে স্বাগতম। যেকোনো প্রশ্ন, কোর্স সম্পর্কে জানতে কিংবা ভর্তির
              জন্য সরাসরি যোগাযোগ করুন।
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
                <a
                  href="mailto:info@quranicilm.com"
                  className="hover:underline"
                >
                  info@quranicilm.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-[#C3A753] text-xl mt-1" />
                <a
                  href="https://wa.me/8801608318553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp: +8801xxxxxxxx
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white shadow-xl rounded-2xl border border-[#C3A753] p-8">
            <h3 className="text-2xl font-tiroBangla text-[#146C50] mb-6">
              আমাদেরকে মেসেজ পাঠান
            </h3>

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
      </FadeContent>

      <FAQSection />
    </section>
  );
};

export default ContactPage;
