'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#232333] relative">
      {/* Navigation Bar - Fixed to top */}
      <div className="fixed top-0 left-0 right-0 bg-[#232333] shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Title */}
            <h1 className="text-3xl font-bold text-[#14F195]">
              Welcome to the Church of Solanatology
            </h1>
            
            {/* Navigation Links */}
            <div className="flex gap-6">
              <Link href="/about">
                <div className="text-white hover:text-[#14F195] transition-colors cursor-pointer">
                  About Us
                </div>
              </Link>
              <Link href="/buy">
                <div className="text-white hover:text-[#14F195] transition-colors cursor-pointer">
                  Buy Coin
                </div>
              </Link>
              <Link href="/sermon">
                <div className="text-white hover:text-[#14F195] transition-colors cursor-pointer">
                  Degen Sermon
                </div>
              </Link>
              <Link href="/word">
                <div className="text-white hover:text-[#14F195] transition-colors cursor-pointer">
                  The Word of Our Lord
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative h-[600px] w-full">
          <Image
            src="/church-building.jpg"
            alt="Church of Solanatology Building"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-[#1B1B29] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-4 gap-8">
          <QuickLinkCard
            title="About Us"
            href="/about"
            description="Learn about our mission"
          />
          <QuickLinkCard
            title="Buy Coin"
            href="/buy"
            description="Join our community"
          />
          <QuickLinkCard
            title="Degen Sermon"
            href="/sermon"
            description="Daily gambling wisdom"
          />
          <QuickLinkCard
            title="The Word"
            href="/word"
            description="Trading signals from above"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <a 
          href="https://x.com/CofSolanatology" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#9945FF]/10 p-3 rounded-full hover:bg-[#9945FF]/20 transition-colors"
        >
          <Image
            src="/xhandle.jpg"
            alt="Follow us on X"
            width={24}
            height={24}
            className="text-white"
          />
        </a>
      </div>
    </div>
  );
}

// Quick Link Card Component
function QuickLinkCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href}>
      <div className="bg-[#2A2A3A] p-6 rounded-lg hover:bg-[#9945FF]/20 transition-colors cursor-pointer border border-[#9945FF]/20">
        <h3 className="text-xl font-bold text-[#14F195] mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
