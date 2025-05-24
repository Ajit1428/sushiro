"use client";

import { useState } from "react";
import Link from "next/link";

type BilingualField = {
  en: string;
  ja: string;
};

type FormData = {
  name: BilingualField;
  address: BilingualField;
  phoneNumber: BilingualField;
  timeInJapan: BilingualField;
  jobHistory: BilingualField;
  japaneseLevel: BilingualField;
  facebookProfile: string;
  dateOfBirth: string;
  shiftTime: BilingualField;
};

export default function JobApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: { en: "", ja: "" },
    address: { en: "", ja: "" },
    phoneNumber: { en: "", ja: "" },
    timeInJapan: { en: "", ja: "" },
    jobHistory: { en: "", ja: "" },
    japaneseLevel: { en: "", ja: "" },
    facebookProfile: "",
    dateOfBirth: "",
    shiftTime: { en: "", ja: "" }
  });

  const handleChange = (field: keyof FormData, value: string, lang?: "en" | "ja") => {
    setFormData(prev => {
      if (lang && typeof prev[field] === "object" && "en" in prev[field]) {
        return {
          ...prev,
          [field]: {
            ...(prev[field] as BilingualField),
            [lang]: value
          }
        };
      }
      return {
        ...prev,
        [field]: value
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    console.log("Application submitted:", formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">申し訳ありませんが、ご応募ありがとうございます。</h2>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your application!</h2>
          <p className="text-gray-600 mb-6">
            We will contact you via Facebook for further interview process.
            <br />
            Facebookを通じて、次の面接プロセスについてご連絡いたします。
          </p>
          <Link
            href="/"
            className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black min-h-screen bg-white flex flex-col items-center p-4 py-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          <span className="block mb-2">Job Application Form</span>
          <span className="block text-xl text-gray-600">求人応募フォーム</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-lg p-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Name / お名前</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="English"
                value={formData.name.en}
                onChange={(e) => handleChange("name", e.target.value, "en")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="text"
                placeholder="日本語"
                value={formData.name.ja}
                onChange={(e) => handleChange("name", e.target.value, "ja")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Address / 住所</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="English"
                value={formData.address.en}
                onChange={(e) => handleChange("address", e.target.value, "en")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="text"
                placeholder="日本語"
                value={formData.address.ja}
                onChange={(e) => handleChange("address", e.target.value, "ja")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Phone Number / 電話番号</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="English"
                value={formData.phoneNumber.en}
                onChange={(e) => handleChange("phoneNumber", e.target.value, "en")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="tel"
                placeholder="日本語"
                value={formData.phoneNumber.ja}
                onChange={(e) => handleChange("phoneNumber", e.target.value, "ja")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>

          {/* Time in Japan */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">How long have you been in Japan? / 日本に来てどのくらいですか？</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="English"
                value={formData.timeInJapan.en}
                onChange={(e) => handleChange("timeInJapan", e.target.value, "en")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="text"
                placeholder="日本語"
                value={formData.timeInJapan.ja}
                onChange={(e) => handleChange("timeInJapan", e.target.value, "ja")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>

          {/* Job History */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Past Job History / 職歴</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <textarea
                placeholder="English"
                value={formData.jobHistory.en}
                onChange={(e) => handleChange("jobHistory", e.target.value, "en")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 h-24"
                required
              />
              <textarea
                placeholder="日本語"
                value={formData.jobHistory.ja}
                onChange={(e) => handleChange("jobHistory", e.target.value, "ja")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 h-24"
                required
              />
            </div>
          </div>

          {/* Japanese Level */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Japanese Language Level / 日本語レベル</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="English"
                value={formData.japaneseLevel.en}
                onChange={(e) => handleChange("japaneseLevel", e.target.value, "en")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="text"
                placeholder="日本語"
                value={formData.japaneseLevel.ja}
                onChange={(e) => handleChange("japaneseLevel", e.target.value, "ja")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>

          {/* Facebook Profile */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Facebook Profile Link / Facebookプロフィールリンク</span>
            </label>
            <input
              type="url"
              placeholder="https://facebook.com/your-profile"
              value={formData.facebookProfile}
              onChange={(e) => handleChange("facebookProfile", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Date of Birth / 生年月日</span>
            </label>
            <input
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              required
            />
          </div>

          {/* Shift Time */}
          <div className="space-y-2">
            <label className="block font-semibold">
              <span className="block">Preferred Shift Time / 希望勤務時間</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="English"
                value={formData.shiftTime.en}
                onChange={(e) => handleChange("shiftTime", e.target.value, "en")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="text"
                placeholder="日本語"
                value={formData.shiftTime.ja}
                onChange={(e) => handleChange("shiftTime", e.target.value, "ja")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Submit Application / 応募する"}
          </button>
        </form>
      </div>
    </div>
  );
} 