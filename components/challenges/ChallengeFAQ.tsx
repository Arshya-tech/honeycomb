"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";

import { FAQ } from "@/lib/data/challenges";

interface ChallengeFAQProps {
  faqs: FAQ[];
}

export function ChallengeFAQ({ faqs }: ChallengeFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="mt-12 overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
        </div>
      </div>

      <div className="divide-y">
        {faqs.map((faq, index) => (
          <div key={index} className="p-4">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <h3 className="font-medium text-gray-800">{faq.question}</h3>
              <div
                className={`transform transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>

            {openFAQ === index && (
              <div className="mt-2 text-sm text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t bg-purple-50 p-4">
        <div className="flex items-center justify-center gap-2 text-purple-700">
          <HelpCircle className="h-4 w-4" />
          <a href="/support" className="text-sm font-medium hover:underline">
            Need more help? Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
