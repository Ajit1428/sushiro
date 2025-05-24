"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    if (/^\d*$/.test(value)) {
      setVerificationCode(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowVerification(true);
    setIsLoading(false);
    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle verification logic here
    console.log("Verification attempt:", { email: formData.email, verificationCode });
    
    // Simulate verification process
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    
    // Redirect to login page after successful verification
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[432px]">
        <div className="text-center mb-6">
          <Link href="/" className="text-red-600 text-4xl font-bold">
            Sushiro
          </Link>
          <div className="relative w-full h-[200px] my-4 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80"
              alt="Sushi preparation"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          <h2 className="text-xl text-gray-700 mt-2">
            {showVerification ? "Verify your email" : "Create a new account"}
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-gray-200">
          {!showVerification ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="New password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-500"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating account..." : "Sign Up"}
              </button>

              <div className="text-center">
                <Link
                  href="/login"
                  className="text-red-600 hover:underline text-sm"
                >
                  Already have an account?
                </Link>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerificationSubmit} className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Enter Security Code
                </h3>
                <p className="text-sm text-gray-600">
                   Facebook will text you a code, use the code to continue the process
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
                  Back to signup
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
                className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Verify Email
              </button>
            </form>
          )}
        </div>

        {!showVerification && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              By clicking Sign Up, you agree to our{" "}
              <Link href="/terms" className="text-gray-700 hover:underline">
                Terms
              </Link>
              ,{" "}
              <Link href="/privacy" className="text-gray-700 hover:underline">
                Privacy Policy
              </Link>
              {" "}and{" "}
              <Link href="/cookies" className="text-gray-700 hover:underline">
                Cookies Policy
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 