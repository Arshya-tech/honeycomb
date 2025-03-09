"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Background stars with animation */}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.4;
          }
        }
        .star {
          animation: twinkle 3s infinite ease-in-out;
        }
        .star:nth-child(2) {
          animation-delay: 0.5s;
        }
        .star:nth-child(3) {
          animation-delay: 1s;
        }
        .star:nth-child(4) {
          animation-delay: 1.5s;
        }
        .star:nth-child(5) {
          animation-delay: 2s;
        }
      `}</style>
      <div className="star absolute top-32 left-40 text-xl text-gray-400">
        ✧
      </div>
      <div className="star absolute top-16 right-24 text-xl text-gray-400">
        ✧
      </div>
      <div className="star absolute bottom-96 left-80 text-xl text-gray-400">
        ✧
      </div>
      <div className="star absolute top-96 right-60 text-xl text-gray-400">
        ✧
      </div>
      <div className="star absolute right-80 bottom-32 text-xl text-gray-400">
        ✧
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Navigation */}
        <nav className="mb-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/assets/honeycomb-coin.png"
              alt="Honeycomb Logo"
              width={24}
              height={24}
              className="mr-2"
            />
            <span className="font-bold text-yellow-500">honeycomb</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-black hover:text-yellow-500">
              Home
            </a>
            <a href="#" className="text-black hover:text-yellow-500">
              About Us
            </a>
            <a href="#" className="text-black hover:text-yellow-500">
              Features
            </a>
            <button className="rounded bg-black px-6 py-2 text-white transition-colors hover:bg-gray-900">
              Download
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-5xl font-bold">
              Smarter Spending,
              <br />
              Better <span className="text-yellow-500">Savings.</span>
            </h1>
            <p className="mb-8 max-w-md text-gray-600">
              Build Smart Money Habits With AI-Powered Coaching And Gamified
              Challenges. Earn Rewards As You Learn And Take Control Of Your
              Financial Future.
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center rounded bg-black px-6 py-3 text-white transition-colors hover:bg-gray-900">
                Get Started <span className="ml-2">→</span>
              </button>
              <button className="flex items-center text-black hover:text-yellow-500">
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-black">
                  ▶
                </div>
                Watch Video
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Red glow effect */}
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-red-500 opacity-30 blur-3xl filter"></div>

            {/* Phone mockups - stacked */}
            <div className="relative">
              <div className="absolute -top-8 -right-4">
                <PhoneMockup />
              </div>
              <div className="absolute top-8 right-8">
                <PhoneMockup />
              </div>
              <div className="absolute top-16 right-20">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Premium banner */}
        <div className="relative mb-24">
          <div className="max-w-lg rounded-lg bg-gradient-to-r from-black to-red-600 p-4 pr-32">
            <div className="flex items-center">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                <span className="text-white">⊳</span>
              </div>
              <div>
                <p className="text-sm text-gray-300">Audio preview</p>
                <p className="font-medium text-white">
                  Fight your improper spending habits with AI assistance
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-24 -bottom-5 rotate-3 transform rounded bg-red-500 p-2 text-white shadow-md">
            <p className="text-xs">Utility Premium</p>
            <p className="text-xs font-bold">Free Trial</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative flex justify-center">
            {/* Yellow glow effect */}
            <div className="absolute h-64 w-64 rounded-full bg-yellow-500 opacity-30 blur-3xl filter"></div>
            <div className="relative">
              <div className="absolute -bottom-16 -left-16 z-0 opacity-70">
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

          <div>
            <div className="mb-2 text-red-500">FEATURES</div>
            <h2 className="mb-8 text-4xl font-bold">Honeycomb Pro</h2>

            <div className="space-y-6">
              <FeatureItem
                icon="✚"
                title="AI-Powered Financial Guidance"
                description="Get Personalized Money Tips Based On Your Spending And Goals."
              />

              <FeatureItem
                icon="⊕"
                title="Gamified Learning & Challenges"
                description="Learn Smart Money Habits Through Interactive Tasks And Quizzes."
              />

              <FeatureItem
                icon="⊕"
                title="Earn Rewards As You Grow"
                description="Complete Challenges And Unlock Cashback, Crypto, And More."
              />
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
    <div className="relative w-56">
      <div className="rounded-3xl border border-gray-800 bg-black p-3">
        <div className="overflow-hidden rounded-2xl bg-white">
          {/* Phone notch */}
          <div className="relative h-6 bg-black">
            <div className="absolute top-0 left-1/2 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-black"></div>
          </div>
          <div className="flex items-center justify-between border-b bg-white p-2">
            <div className="text-xs text-black">Hello Sami</div>
            <div className="h-5 w-5 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
          </div>
          <div className="p-3">
            <div className="mb-4 rounded-lg bg-black p-3 text-white">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">
                    0000 8888 2222 3333
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-xs">vPay</span>
                    <span className="text-xs">VISA</span>
                  </div>
                </div>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                  V
                </div>
              </div>
              <div className="mt-6 flex justify-between text-sm">
                <div>
                  <div className="mb-1 text-xs text-gray-400">Balance</div>
                  <div className="text-sm">$4,264</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-400">Limit</div>
                  <div className="text-sm">$3,897</div>
                </div>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
                <Image
                  src="/assets/honey.webp"
                  alt="Honey"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-black">$560.00</div>
                  <div className="rounded bg-red-50 px-2 py-0.5 text-xs text-red-500">
                    -$74.10
                  </div>
                </div>
                <div className="text-xs text-gray-500">From Adam</div>
              </div>
            </div>
            <div className="mb-4 flex justify-between text-xs text-gray-600">
              <span>Transaction</span>
              <span className="font-medium text-black">View All</span>
            </div>
            <div className="flex justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-400 text-xs text-white">
                A
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-600">
                B
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white">
                C
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-600">
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
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <div className="bg-opacity-10 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-red-500">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="mb-1 font-bold">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};
