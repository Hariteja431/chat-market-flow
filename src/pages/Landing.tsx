
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { useApp } from '@/context/AppContext';

const Landing = () => {
  const { setIsLoggedIn } = useApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Buying and selling{' '}
            <span className="relative whitespace-nowrap text-blue-600">
              <span className="relative">is as easy as chat</span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Skip the hassle of traditional marketplaces. Just chat with our AI to list your items or find exactly what you're looking for. It's like having a personal shopping assistant that never sleeps.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link to="/sell/chat">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Start Selling
              </Button>
            </Link>
            <Link to="/buy/chat">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Chat to Find Deals
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Faster & Easier</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to buy and sell
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <span className="text-white font-bold">AI</span>
                    </div>
                    Smart Listings
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Our AI helps you create perfect listings by asking the right questions and suggesting optimal prices.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <span className="text-white font-bold">💬</span>
                    </div>
                    Chat Interface
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    No complex forms or confusing interfaces. Just chat naturally to buy or sell anything.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <span className="text-white font-bold">⚡</span>
                    </div>
                    Instant Results
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Get your listings live in minutes, not hours. Find what you need with lightning-fast search.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <span className="text-white font-bold">🔒</span>
                    </div>
                    Secure & Safe
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Built-in verification and secure payment processing keep your transactions safe.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Mobile CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-30">
          <div className="flex space-x-3">
            <Button 
              onClick={() => setIsLoggedIn(true)} 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </Button>
            <Button 
              onClick={() => setIsLoggedIn(true)} 
              variant="outline" 
              className="flex-1"
            >
              Log In
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
