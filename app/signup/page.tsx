"use client";

import { useState } from "react";
import Link from "next/link";
import  supabase  from '../utils/supabaseClient'; 




export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState('');
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        
      });

      if (error) {
        setError(error.message);
        return;
      }

      alert("✅ Signup successful! Please check your email to verify your account.");
    } catch (err) {
      setError("Signup failed");
    }
  };



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
                Username
                </label>
                <input
                type="text"
                placeholder="saran"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 hover:placeholder-fuchsia-600 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500"
                />
            </div>


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

            <button
              type="submit"
              className="w-full hover:bg-pink-600 text-white py-2 cursor-pointer rounded-3xl bg-fuchsia-600 transitionn"
            >
              Sign Up
            </button>
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
