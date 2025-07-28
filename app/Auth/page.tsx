'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import  supabase  from '../utils/supabaseClient'; 

export default function LoginPage() {
  const router = useRouter();
  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/");
      }
    };
    checkSession();
  }, [router]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        setError("Invalid email or password");
        return;
      }

      router.push("/");
    } catch (err: any) {
      console.error(err);
      setError("Login failed");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center background-col">
        <div className="flex flex-col sm:flex-row items-center justify-between backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl p-8 rounded-xl w-full max-w-3xl">
          {/* Image Section */}
          <div
            className="w-full sm:w-1/2 mb-6 sm:mb-0 sm:pr-6 animate-float"
            style={{
              animation: "float 5s ease-in-out infinite",
              objectFit: "contain",
            }}
          >
            <img
              src="/loginimg.png"
              alt="Login Image"
              className="w-full h-auto rounded-lg animate-in"
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
              .animate-float {
                animation: float 5s ease-in-out infinite;
              }

              @media (max-width: 767px) {
                main {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                .flex-1.p-12 {
                  padding-left: 1rem !important;
                  padding-right: 1rem !important;
                }
                form {
                  padding-left: 0 !important;
                  padding-right: 0 !important;
                }
                input,
                button,
                .social-login button {
                  width: 100% !important;
                  max-width: 100% !important;
                  margin: 0 !important;
                  border-radius: 0.75rem !important;
                }
                .social-login > div {
                  flex-direction: column !important;
                  gap: 0.5rem !important;
                }
              }
            `}</style>
          </div>

          {/* Form Section */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl fontCol font-bold mb-6 text-center">Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-shadow-white-100">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 hover:placeholder-fuchsia-600 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <div className="relative">
                  <label className="block text-sm font-medium text-shadow-white-100">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 hover:placeholder-fuchsia-600 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 mt-5 px-3 flex items-center text-sm cursor-pointer text-gray-500 hover:text-fuchsia-500 focus:outline-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <button
                type="submit"
                className="w-1/2 ml-20 hover:bg-pink-600 text-white py-2 cursor-pointer rounded-3xl bg-fuchsia-600 transition"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-shadow-white-100">
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-pink-400 text-xl cursor-pointer animate-pulse font-medium"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
