'use client';

import Link from "next/link";
import { ShoppingCart, User, Search, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">NovaCart</h1>
          </div>

          <div className="flex items-center gap-8">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 py-2.5 w-96">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search products, brands..." 
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-gray-400"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-7 text-sm font-medium">
              <Link href="/shop" className="hover:text-blue-600 transition-colors">Shop</Link>
              <Link href="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
              <Link href="/admin" className="hover:text-blue-600 transition-colors">Admin</Link>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <User className="h-5 w-5 cursor-pointer hover:text-blue-600 transition" />
              <div className="relative cursor-pointer">
                <ShoppingCart className="h-5 w-5 hover:text-blue-600 transition" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-medium rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Shop Smart.<br />Shop NovaCart
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-blue-100">
            A modern full-stack e-commerce platform built with Next.js 15, TypeScript & Tailwind CSS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop" 
              className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all"
            >
              Browse Products
            </Link>
            <a 
              href="https://github.com/yourusername/novacart-ecommerce" 
              target="_blank"
              className="border-2 border-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              View Source on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Simple Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">Built with Modern Technologies</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-3xl bg-gray-50">
              <div className="text-blue-600 mb-4">⚡</div>
              <h4 className="text-2xl font-semibold mb-3">Next.js 15</h4>
              <p className="text-gray-600">App Router + Server Components</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50">
              <div className="text-blue-600 mb-4">🎨</div>
              <h4 className="text-2xl font-semibold mb-3">Tailwind CSS</h4>
              <p className="text-gray-600">Beautiful & Responsive Design</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50">
              <div className="text-blue-600 mb-4">🗄️</div>
              <h4 className="text-2xl font-semibold mb-3">MongoDB Ready</h4>
              <p className="text-gray-600">Full backend coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}