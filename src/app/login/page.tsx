"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowVerification(true);
    setIsLoading(false);
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification logic here
    console.log("Verification attempt:", { email, verificationCode });
  };

  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (/^\d*$/.test(value)) {
      setVerificationCode(value);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-[980px] w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Logo, image and text */}
        <div className="text-center md:text-left max-w-[500px]">
          <div className="mb-4">
            <h1 className="text-red-600 text-5xl md:text-6xl font-bold mb-2">
              Sushiro
            </h1>
            <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
                alt="Sushiro restaurant"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            <h2 className="text-xl md:text-2xl leading-7 font-normal text-gray-700">
              Get to be part of sushiro team or be a guest and enjoy your time here
            </h2>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full max-w-[396px]">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200">
            {!showVerification ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Email address or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Logging in..." : "Log in"}
                </button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>
                <Link
                  href="/signup"
                  className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors inline-block text-center"
                >
                  Create New Account
                </Link>
              </form>
            ) : (
              <form onSubmit={handleVerificationSubmit} className="space-y-4">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Enter Security Code
                  </h3>
                  <p className="text-sm text-gray-600">
                    We sent a security code to your phone number ending in {email.slice(-4)}
                  </p>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter code"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-center text-2xl tracking-widest text-gray-900 placeholder-gray-500"
                  maxLength={6}
                />
                <div className="flex justify-between items-center text-sm">
                  <button
                    type="button"
                    onClick={() => setShowVerification(false)}
                    className="text-red-600 hover:underline"
                  >
                    Back to login
                  </button>
                  <button
                    type="button"
                    className="text-red-600 hover:underline"
                  >
                    Get code again
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Continue
                </button>
              </form>
            )}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <Link
                href="/create-page"
                className="font-semibold text-gray-700 hover:underline"
              >
                Create a Page
              </Link>{" "}
              for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
