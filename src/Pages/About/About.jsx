import React from "react";

const About = () => {
    return (
        <section className="bg-[#FAF9F6] text-[#333333] px-6 py-16 font-notoSansBengali">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Section: Quranic Verse */}
                <div className="text-center">
                    <p className="text-2xl md:text-3xl font-naskhArabic mb-4 text-[#146C50] leading-relaxed">
                        ﴿خَيْرُكُم مَّن تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ﴾
                    </p>
                    <p className="font-hindSiliguri text-lg md:text-xl italic">
                        — “তোমাদের মধ্যে সর্বশ্রেষ্ঠ হলো সে, যে কুরআন শিখে এবং অন্যকে শিখায়।” <br />
                        <span className="text-sm">[সহীহ বুখারী, হাদীস: ৫০২৭]</span>
                    </p>
                </div>

                {/* Section: About Us Statement */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-tiroBangla mb-4 text-[#146C50]">
                        ইলমুল কুরআন - একটি আন্তর্জতিক ইসলামিক শিক্ষাপ্ল্যাটফর্ম
                    </h2>
                    <p className="font-hindSiliguri text-base md:text-lg leading-relaxed">
                        ইলমুল কুরআন একটি আধুনিক ইসলামী একাডেমি, যেখানে বিশ্বের যেকোন প্রান্তে থাকা মুসলিম ভাই-বোনেরা ঘরে বসেই প্রামাণ্য, সুন্নাহভিত্তিক ও মানসম্মত ইসলামি শিক্ষা গ্রহণ করতে পারেন।
                    </p>
                    <p className="font-hindSiliguri text-base md:text-lg mt-4 leading-relaxed">
                        আমাদের শিক্ষকেরা মিসরের আল-আজহার ইউনিভার্সিটি, মাদিনার ইসলামী বিশ্ববিদ্যালয় এবং দেশের স্বনামধন্য ইসলামী প্রতিষ্ঠানে অধ্যয়নরত বা গ্র্যাজুয়েট। আমরা শিক্ষার্থীর বয়স, পেশা ও সময় অনুযায়ী কোর্সের ধরন নির্ধারণ করি।
                    </p>
                </div>

                {/* Section: Mission */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-tiroBangla mb-4 text-[#146C50]">
                        আমাদের লক্ষ্য ও উদ্দেশ্য
                    </h3>
                    <ul className="list-disc list-inside space-y-3 font-hindSiliguri text-base md:text-lg">
                        <li>
                            পৃথিবীর যেকোন প্রান্তে থাকা মুসলিমদের জন্য সঠিক ও সহিহ ইসলামি শিক্ষা পৌঁছে দেওয়া।
                        </li>
                        <li>
                            প্রযুক্তির মাধ্যমে ইসলামি জ্ঞান সহজলভ্য করা — লাইভ ক্লাস, হোয়াটসঅ্যাপ/গুগল মিট, ইন্টারঅ্যাক্টিভ টুলস ইত্যাদির মাধ্যমে।
                        </li>
                        <li>
                            শিশুরা, অফিসে কর্মরত মানুষ, অভিভাবক বা ছাত্র — সকল বয়সী মানুষের জন্য পৃথক ব্যবস্থা।
                        </li>
                        <li>
                            এমন একটি পরিবেশ তৈরি করা যেখানে আপনি মনযোগ দিয়ে কুরআন ও ইসলামি জ্ঞান অর্জন করতে পারেন ইনশাআল্লাহ।
                        </li>
                    </ul>
                </div>

                {/* Section: Invitation */}
                <div className="text-center bg-white border border-[#C3A753] rounded-xl shadow-md p-8 space-y-4">
                    <h3 className="text-2xl font-tiroBangla text-[#146C50]">
                        আপনি যেখানেই থাকুন, আমরা আপনার জন্য আছি!
                    </h3>
                    <p className="font-hindSiliguri text-base md:text-lg">
                        আপনি বাংলাদেশে, সৌদি আরবে, ইউরোপে বা আমেরিকায় থাকুন — ইলমুল কুরআন আপনার হাতে ইসলামী শিক্ষার দরজা খুলে দেয়। প্রযুক্তির মাধ্যমে আমরা আপনাকে যুক্ত করি অভিজ্ঞ, আমানতদার শিক্ষকের সাথে।
                    </p>
                    <p className="font-hindSiliguri text-base md:text-lg">
                        আমরা বিশ্বাস করি — কুরআন শিখা ও শেখানো কেবল ইবাদত নয়, বরং উম্মাহ গঠনের একটি গুরুত্বপূর্ণ দায়িত্ব।
                    </p>
                </div>

                {/* Section: Another Hadith */}
                <div className="text-center">
                    <p className="text-xl font-naskhArabic text-[#146C50] mb-2">
                        ﴿طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ﴾
                    </p>
                    <p className="font-hindSiliguri text-base md:text-lg italic">
                        — “জ্ঞান অর্জন করা প্রত্যেক মুসলিমের উপর ফরজ।” <br />
                        <span className="text-sm">[ইবনে মাজাহ, হাদীস: ২২৪]</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;