"use client";

import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';



export default function SignUpPage() {
  const { signUp, setActive, isLoaded } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
 const [step, setStep] = useState("start");

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setStep("verify");
    } catch (err) {
      setError(err.errors?.[0]?.message || "Signup failed");
    }
  };

  const handleVerify = async () => {
    try {
      const complete = await signUp.attemptEmailAddressVerification({ code });
      if (complete.status === "complete") {
        await setActive({ session: complete.createdSessionId });
        window.location.href = "/Auth";
      }
    } catch (err) {
      setError(err.errors?.[0]?.message || "Verification failed");
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen flex items-center justify-center background-col">
      <div className="backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl p-6 rounded-xl w-full max-w-[100%] md:max-w-3xl flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0 md:mr-6">
          <img
            src="/siginupimg.png"
            alt="Signup"
            className="w-full h-auto max-w-[200px] md:max-w-full rounded-lg"
            style={{
              animation: "float 5s ease-in-out infinite",
              objectFit: "contain",
            }}
          />
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }
          `}</style>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 hover:placeholder-fuchsia-600 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-black">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 hover:placeholder-fuchsia-600 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 hover:text-pink-400 cursor-pointer mt-5 px-3 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-black">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 hover:placeholder-fuchsia-600 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="absolute inset-y-0 hover:text-pink-400 cursor-pointer right-0 mt-5 px-3 text-sm"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {step === "start" && (
              <button
                type="submit"
                className="w-full hover:bg-pink-600  text-white py-2 cursor-pointer rounded-3xl bg-fuchsia-600 transitionn"
              >
                Sign Up
              </button>
            )}
            <div id="clerk-captcha" />

            {step === "verify" && (
              <>
                <input
                  className="border p-2 hover:text-pink-600 rounded-3xl w-full"
                  placeholder="Verification Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleVerify }
                  className="mt-2 bg-green-600 cursor-pointer text-white w-full p-2 rounded-4xl"
                >
                  Verify Email
                </button>
              </>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-black">
              Already have an account?{" "}
              <Link
                href="/Auth"
                className="text-pink-400 text-xl animate-pulse font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
