"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-background relative min-h-svh overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100/50">
      {/* Background stars with animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .honeycomb {
          animation: float 4s infinite ease-in-out;
          font-size: 1.5rem;
        }
        .honeycomb:nth-child(2) {
          animation-delay: 0.8s;
        }
        .honeycomb:nth-child(3) {
          animation-delay: 1.6s;
        }
        .honeycomb:nth-child(4) {
          animation-delay: 2.4s;
        }
        .honeycomb:nth-child(5) {
          animation-delay: 3.2s;
        }
      `}</style>
      <div className="honeycomb absolute top-20 left-10 text-amber-400 md:top-32 md:left-40">
        🍯
      </div>
      <div className="honeycomb absolute top-12 right-8 text-amber-400 md:top-16 md:right-24">
        🍯
      </div>
      <div className="honeycomb absolute bottom-64 left-20 text-amber-400 md:bottom-96 md:left-80">
        🍯
      </div>
      <div className="honeycomb absolute top-64 right-12 text-amber-400 md:top-96 md:right-60">
        🍯
      </div>
      <div className="honeycomb absolute right-16 bottom-20 text-amber-400 md:right-80 md:bottom-32">
        🍯
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8 flex items-center justify-between rounded-2xl border-2 border-amber-200/50 bg-white/50 p-4 backdrop-blur-sm md:mb-16">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/honeycomb-coin.png"
              alt="Honeycomb Logo"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-heading text-lg font-bold tracking-wider text-yellow-500 md:text-xl xl:text-2xl">
              honeycomb
            </span>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="flex items-center rounded p-2 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Desktop navigation */}
          <div className="hidden items-center space-x-6 md:flex xl:space-x-10">
            <Link
              href="#"
              className="font-semibold text-black hover:text-yellow-500"
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-semibold text-black hover:text-yellow-500"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="font-semibold text-black hover:text-yellow-500"
            >
              Features
            </Link>
            <Link
              href={"/onboarding"}
              className="rounded bg-black px-6 py-2 text-white transition-colors hover:bg-gray-900"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:mb-24 md:gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center rounded-3xl border-2 border-amber-200/50 bg-white/50 p-8 backdrop-blur-sm">
            <h1 className="font-heading mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Smarter Spending,
              <br />
              Better <span className="text-yellow-500">Savings.</span>
            </h1>
            <p className="mb-6 max-w-md text-sm text-gray-600 md:mb-8 md:text-base">
              Build Smart Money Habits With AI-Powered Coaching And Gamified
              Challenges. Earn Rewards As You Learn And Take Control Of Your
              Financial Future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={"/onboarding"}
                className="flex items-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:translate-y-[-1px] hover:shadow-xl md:text-base"
              >
                Get Started <span className="ml-2">→</span>
              </Link>
              <Link
                href="/sign-in"
                className="bg-foreground hover:text-background flex items-center gap-2 rounded-xl border px-4 py-2 font-medium text-amber-700 transition-colors hover:bg-amber-500"
              >
                sign-in
              </Link>
            </div>
          </div>

          <div className="relative mt-12 md:mt-0">
            {/* Red glow effect */}
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-red-500 opacity-30 blur-3xl filter md:h-64 md:w-64"></div>

            {/* Phone mockups - stacked */}
            <div className="relative mx-auto h-64 max-w-xs md:mx-0 md:h-auto md:max-w-none">
              <div className="absolute -top-8 -right-4 hidden md:block">
                <PhoneMockup />
              </div>
              <div className="absolute top-8 right-8 hidden md:block">
                <PhoneMockup />
              </div>
              <div className="md:absolute md:top-16 md:right-20">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Premium banner */}
        <div className="relative mb-16 md:mb-24">
          <div className="max-w-full rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-yellow-100 p-4 pr-16 shadow-lg md:max-w-lg md:p-6 md:pr-32">
            <div className="flex items-center">
              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-yellow-400 shadow-md md:mr-4 md:h-12 md:w-12">
                <span className="text-amber-900">🎧</span>
              </div>
              <div>
                <p className="text-xs text-amber-700 md:text-sm">
                  Audio preview
                </p>
                <p className="text-sm font-medium text-amber-900 md:text-base">
                  Fight your improper spending habits with AI assistance
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-8 -bottom-5 rotate-3 transform rounded-xl border-2 border-amber-300 bg-gradient-to-r from-amber-400 to-yellow-400 p-3 shadow-lg max-lg:hidden md:right-24">
            <p className="text-xs font-medium text-amber-900">Honeycomb Pro</p>
            <p className="text-xs font-bold text-amber-900">Free Trial ✨</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          <div className="relative order-2 mt-8 flex justify-center lg:order-1 lg:mt-0">
            {/* Yellow glow effect */}
            <div className="absolute h-48 w-48 rounded-full bg-yellow-500 opacity-30 blur-3xl filter md:h-64 md:w-64"></div>
            <div className="relative">
              <div className="absolute -bottom-16 -left-16 z-0 hidden opacity-70 md:block">
                <Image
                  src="/assets/bear-sitting-on-honeycomb.jpg"
                  alt="Bear on Honeycomb"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="relative z-10">
                <PhoneMockup />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-3xl border-2 border-amber-200/50 bg-white/50 p-8 backdrop-blur-sm">
              <div className="mb-2 text-sm font-medium text-amber-600 md:text-base">
                FEATURES
              </div>
              <h2 className="font-heading mb-6 text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
                Honeycomb Pro
              </h2>

              <div className="space-y-6 md:space-y-8">
                <FeatureItem
                  icon="🎯"
                  title="AI-Powered Financial Guidance"
                  description="Get Personalized Money Tips Based On Your Spending And Goals."
                />

                <FeatureItem
                  icon="🎮"
                  title="Gamified Learning & Challenges"
                  description="Learn Smart Money Habits Through Interactive Tasks And Quizzes."
                />

                <FeatureItem
                  icon="🎁"
                  title="Earn Rewards As You Grow"
                  description="Complete Challenges And Unlock Cashback, Crypto, And More."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Red glow at bottom */}
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-red-500 opacity-20 blur-3xl filter"></div>
      </div>
    </main>
  );
}

const PhoneMockup = () => {
  return (
    <div className="relative w-44 md:w-56">
      <div className="rounded-3xl border border-gray-800 bg-black p-2 md:p-3">
        <div className="overflow-hidden rounded-2xl bg-white">
          {/* Phone notch */}
          <div className="relative h-5 bg-black md:h-6">
            <div className="absolute top-0 left-1/2 h-3 w-12 -translate-x-1/2 rounded-b-xl bg-black md:h-4 md:w-16"></div>
          </div>
          <div className="flex items-center justify-between border-b bg-white p-1.5 md:p-2">
            <div className="text-xs text-black">Hello Bebi</div>
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-400 to-green-400 md:h-5 md:w-5"></div>
          </div>
          <div className="p-2 md:p-3">
            <div className="mb-3 rounded-lg bg-black p-2 text-white md:mb-4 md:p-3">
              <div className="mb-3 flex items-center justify-between md:mb-4">
                <div>
                  <div className="text-[10px] text-gray-400 md:text-xs">
                    0000 8888 2222 3333
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1 text-[10px] md:mr-2 md:text-xs">
                      vPay
                    </span>
                    <span className="text-[10px] md:text-xs">VISA</span>
                  </div>
                </div>
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[10px] font-bold text-black md:h-5 md:w-5 md:text-xs">
                  V
                </div>
              </div>
              <div className="mt-4 flex justify-between text-[10px] md:mt-6 md:text-sm">
                <div>
                  <div className="mb-1 text-[10px] text-gray-400 md:text-xs">
                    Balance
                  </div>
                  <div className="text-[10px] md:text-sm">$4,264</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] text-gray-400 md:text-xs">
                    Limit
                  </div>
                  <div className="text-[10px] md:text-sm">$3,897</div>
                </div>
              </div>
            </div>
            <div className="mb-3 flex items-center md:mb-4">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-lg bg-green-600 md:h-8 md:w-8">
                <Image
                  src="/assets/honey.webp"
                  alt="Honey"
                  width={16}
                  height={16}
                  className="md:h-[20px] md:w-[20px]"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-medium text-black md:text-sm">
                    $560.00
                  </div>
                  <div className="rounded bg-red-50 px-1 py-0.5 text-[8px] text-red-500 md:px-2 md:text-xs">
                    -$74.10
                  </div>
                </div>
                <div className="text-[8px] text-gray-500 md:text-xs">
                  From Adam
                </div>
              </div>
            </div>
            <div className="mb-3 flex justify-between text-[8px] text-gray-600 md:mb-4 md:text-xs">
              <span>Transaction</span>
              <span className="font-medium text-black">View All</span>
            </div>
            <div className="flex justify-between">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-[10px] text-white md:h-8 md:w-8 md:text-xs">
                A
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-[10px] text-gray-600 md:h-8 md:w-8 md:text-xs">
                B
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] text-white md:h-8 md:w-8 md:text-xs">
                C
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-[10px] text-gray-600 md:h-8 md:w-8 md:text-xs">
                D
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="group flex items-start transition-transform hover:translate-y-[-2px]">
      <div className="mr-4 flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 text-xl shadow-md transition-all group-hover:shadow-lg md:h-14 md:w-14 md:text-2xl">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-heading mb-2 text-base font-bold text-amber-900 md:text-lg">
          {title}
        </h3>
        <p className="text-sm text-amber-700 md:text-base">{description}</p>
      </div>
    </div>
  );
};
