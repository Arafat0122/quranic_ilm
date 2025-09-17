import { useState } from "react";

const WhatYouWillLearn = () => {
    const [expanded, setExpanded] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const [displayText, setDisplayText] = useState("short");

    const shortText = `ইলমুল কোরআন-এ আপনি সরাসরি অভিজ্ঞ শিক্ষকের মাধ্যমে লাইভ ওয়ান-টু-ওয়ান ক্লাস করার সুযোগ পাবেন। ক্লাসগুলো Google Meet অথবা WhatsApp কলের মাধ্যমে পরিচালিত হয় এবং প্রয়োজনীয় স্ক্রিন শেয়ার ও টেকনিক্যাল সহায়তা নিশ্চিত করা হয়।`;

    const fullText = `ইলমুল কোরআন-এ আপনি সরাসরি অভিজ্ঞ শিক্ষকের মাধ্যমে লাইভ ওয়ান-টু-ওয়ান ক্লাস করার সুযোগ পাবেন। ক্লাসগুলো Google Meet অথবা WhatsApp কলের মাধ্যমে পরিচালিত হয় এবং প্রয়োজনীয় স্ক্রিন শেয়ার ও টেকনিক্যাল সহায়তা নিশ্চিত করা হয়।
    আমাদের প্রতিটি শিক্ষককে অনলাইন ক্লাস নেওয়ার টেকনিক্যাল বিষয়ে প্রশিক্ষণ দেওয়া হয়, যাতে আপনাকে সর্বোচ্চ মানের শিক্ষা দিতে পারি ইনশা-আল্লাহ।
    সাধারণত ৩০ মিনিট বা ৬০ মিনিটের ক্লাস অফার করা হয়, তবে আপনি চাইলে সময়, দিন, কিংবা দৈর্ঘ্য আপনার সুবিধামত কাস্টমাইজ করতে পারেন। সপ্তাহের যেকোনো দিন, আপনার সুবিধামত সময়ে ক্লাস নিতে পারবেন।
    ক্লাস টাইম বা তারিখও আপনি প্রয়োজনে শিক্ষকের সঙ্গে সরাসরি আলোচনা করে পরিবর্তন করতে পারবেন।
    আমরা আগেই কোনো হাদিয়া/ফি গ্রহণ করি না। প্রথমে একটি ট্রায়াল ক্লাস নিতে পারবেন। তারপর আপনি আমাদের পদ্ধতি, মান, এবং সেবা পছন্দ করলে, মাস শেষে আপনি যতগুলো ক্লাস করেছেন তার জন্য কেবলমাত্র সেগুলোরই ইনভয়েস প্রদান করা হবে।
    আমাদের ওয়েবসাইট বা ফেসবুকে কোনো নির্ধারিত ফি উল্লেখ করা হয় না — আপনি আমাদের সঙ্গে কথা বলে আপনার সাধ্য ও ইচ্ছা অনুযায়ী হাদিয়ার পরিমাণ নির্ধারণ করবেন ইনশা-আল্লাহ।
    আমরা চাই, আপনি কুরআনর এই খেদমতে আপনার সামর্থ্য অনুযায়ী অংশ নিন এবং আপনার জীবন কুরআনর আলোয় আলোকিত করুন।`;

    const handleToggle = () => {
        setIsFading(true);
        setTimeout(() => {
            setDisplayText(displayText === "short" ? "full" : "short");
            setExpanded(!expanded);
            setIsFading(false);
        }, 300); // fade duration
    };

    return (
        <div className="max-w-4xl mx-auto p-8 transition-all duration-500 animate-fadeIn">
            <h2
                className="text-3xl md:text-5xl font-tiroBangla text-center mb-6"
                style={{ color: "#146C50" }}
            >
                ইলমুল কুরআনে আপনি যা শিখতে পারবেন
            </h2>

            <p
                className={`font-hindSiliguri text-base md:text-lg leading-relaxed text-center transition-all duration-500 ease-in-out transform ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    }`}
                style={{ color: "#333333" }}
            >
                {displayText === "short" ? shortText : fullText}
            </p>

            <div className="text-center mt-6">
                <button
                    onClick={handleToggle}
                    disabled={isFading}
                    className="font-hindSiliguri px-6 py-2 rounded-full transition duration-300 hover:scale-105 shadow-md"
                    style={{
                        backgroundColor: "#C3A753",
                        color: "#FAF9F6",
                    }}
                >
                    {expanded ? "টেক্সট শর্ট করুন" : "আরও পড়ুন"}
                </button>
            </div>
        </div>
    );
};

export default WhatYouWillLearn;