import { BookOpen, Calendar, Users, FileText } from "lucide-react"; // Icons updated for better context
import FadeContent from "../../../Common/AnimatedText/AnimatedText";

const CreateStudent = () => {
  // Feature Data with Islamic Tone & Polished Bangla
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />, // Assuming 'text-primary' is your brand color
      title: "সুশৃঙ্খল পাঠ্যক্রম",
      description:
        "অভিজ্ঞ উস্তাদদের নিবিড় তত্ত্বাবধানে সুসংগঠিত সিলেবাসের মাধ্যমে সহিহ শুদ্ধভাবে দ্বীনি ইলম অর্জনের সুযোগ।",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "ফ্লেক্সিবল সময়সূচি",
      description:
        "আপনার ব্যস্ততা অনুযায়ী ক্লাস শিডিউল সাজিয়ে নিন। দুনিয়াবি কাজের পাশাপাশি ইলম চর্চা এখন আরও সহজ।",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "সরাসরি লাইভ ক্লাস",
      description:
        "উস্তাদ ও ছাত্রের সরাসরি কথোপকথনের মাধ্যমে পাঠ গ্রহণ এবং তাৎক্ষণিক প্রশ্নোত্তরের মাধ্যমে সংশোধনের ব্যবস্থা।",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "পাঠ্য উপকরণ ও রিসোর্স",
      description:
        "কোর্সের সাথে পাচ্ছেন প্রয়োজনীয় পিডিএফ বই, শিট এবং প্র্যাকটিস ম্যাটেরিয়ালস, যা আপনার শেখার পথকে সহজ করবে ইনশাআল্লাহ।",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 bg-gray-50/50">
      <FadeContent
        blur={true}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <header className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 lg:mb-16">
            <div className="text-center lg:text-left space-y-4 max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                তালিবুল ইলমদের জন্য <br />
                <span className="text-primary inline-block mt-2">
                  আমাদের বিশেষ সুবিধাসমূহ
                </span>
              </h1>
              <div className="h-1 w-24 bg-primary/30 mx-auto lg:mx-0 rounded-full"></div>
            </div>

            <p className="max-w-md text-base text-gray-600 text-center lg:text-right leading-relaxed font-medium">
              ব্যস্ততার মাঝেও দ্বীনি ইলম অর্জন যেন সহজ হয়, সেদিকে লক্ষ্য রেখেই আমাদের এই আয়োজন। আপনার সুবিধামতো সময়েই ক্লাস করার সুযোগ রয়েছে।
            </p>
          </header>

          {/* Features Grid - Improved Responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                {/* Icon Circle with Hover Effect */}
                <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {/* Cloning element to control color on hover if needed, or rely on parent class */}
                  <div className="text-primary group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeContent>
    </section>
  );
};

export default CreateStudent;