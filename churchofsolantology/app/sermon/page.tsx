'use client';

import Link from 'next/link';

export default function Sermon() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background">
      {/* Back Button */}
      <Link href="/">
        <div className="fixed top-4 left-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition-colors cursor-pointer">
          Back
        </div>
      </Link>

      <div className="p-8 border-2 border-foreground rounded-lg bg-purple-600 dark:bg-purple-800 shadow-md">
        <h1 className="text-2xl font-bold text-center text-white mb-4">
          Degen Sermon
        </h1>
        <p className="text-center text-gray-200 dark:text-gray-300 text-lg mb-6">
          Join us in our holy gambling endeavors
        </p>
        <a 
          href="https://solcasino.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md text-center font-medium transition-colors"
        >
          Visit SolCasino
        </a>
      </div>
    </div>
  );
} 