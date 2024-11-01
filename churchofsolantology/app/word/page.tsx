'use client';

import Link from 'next/link';

export default function Word() {
  return (
    <div className="min-h-screen bg-[#000d2a]">
      {/* Navigation Bar */}
      <div className="bg-[#001440] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="text-white hover:text-green-400 transition-colors cursor-pointer">
              ← Back to Home
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-white">
            The Word of Our Lord
          </h1>
          <div className="w-20"></div> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-[#002060] p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            The Word of Our Lord
          </h2>
          <p className="text-center text-gray-200 text-lg mb-6">
            The Word of Our Lord is a place for all members to post the best and latest Solana plays.
          </p>
          <p className="text-center text-gray-200 text-lg font-semibold italic">
            If you post a shit play, may our Lord strike you down in cold blood.
          </p>
        </div>
      </div>
    </div>
  );
} 