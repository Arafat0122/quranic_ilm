import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAF9F6] px-6 py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <p
          className="text-2xl md:text-3xl font-naskhArabic text-[#146C50] mb-4 leading-relaxed"
          dir="rtl"
        >
          وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
        </p>
        <p className="font-hindSiliguri text-[#333333] text-base md:text-lg mb-10">
          “আর যে আল্লাহকে ভয় করে, তিনি তার জন্য উত্তরণের ব্যবস্থা করে দেন।”
          (সূরা আত-তালাক: ২)
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-[#C3A753] font-poppins mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-tiroBangla text-[#146C50] mb-2">
          আপনি ভুল পথে চলে এসেছেন
        </h2>

        <p className="font-hindSiliguri text-[#333333] text-base md:text-lg mb-8">
          সম্ভবত পৃষ্ঠাটি বিদ্যমান নেই বা লিঙ্কটি ভুল। চিন্তা করবেন না, চলুন
          সঠিক পথে ফিরে যাই ইনশা-আল্লাহ।
        </p>

        <Link
          to="/"
          className="inline-block font-hindSiliguri px-6 py-3 rounded-full transition hover:scale-105 shadow-md text-[#FAF9F6]"
          style={{ backgroundColor: "#C3A753" }}
        >
          হোমপেইজে ফিরে যান
        </Link>
      </div>
    </section>
  );
};

export default Error;
