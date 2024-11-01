'use client';

import Link from 'next/link';

export default function About() {
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
          About Us
        </h1>
        <p className="text-center text-gray-200 dark:text-gray-300 text-lg">
          We are the mightiest warriors you have ever seen
        </p>
      </div>
    </div>
  );
} 