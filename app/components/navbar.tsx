"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Download, Book, Menu, X, Github, Music, Shield, BarChart3, Bot, Headphones, Ticket, MessageSquare, Settings, Zap, Lock, Palette, TrendingUp } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppsDropdownOpen, setIsAppsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAppsDropdown = () => {
    setIsAppsDropdownOpen(!isAppsDropdownOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Gauche */}
            <div className="flex-shrink-0 w-48">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-semibold text-zinc-900 dark:text-white">
                  Astron Collection
                </span>
              </Link>
            </div>

            {/* Menu Centre */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                >
                  Accueil
                </Link>

                {/* Applications avec dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleAppsDropdown}
                    className="flex items-center space-x-1 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                  >
                    <span>Applications</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isAppsDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isAppsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-black rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 py-2">
                      <div className="px-3 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Applications principales
                      </div>
                      <Link
                        href="/apps/astron"
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        Astron
                      </Link>
                      <Link
                        href="/apps/logger"
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        Logger
                      </Link>
                      <Link
                        href="/apps/protect"
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        Protect
                      </Link>
                      <Link
                        href="/apps/player"
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        Player
                      </Link>
                      
                      <div className="px-3 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-3">
                        Add-ons
                      </div>
                      <Link
                        href="/addons/gpt"
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        GPT
                      </Link>
                      <Link
                        href="/addons/voip"
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        VoIP
                      </Link>
                      <Link
                        href="/addons/mail"
                        className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        Mail
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/dashboard"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/commands"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                >
                  Commandes
                </Link>
                <Link
                  href="/docs"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                >
                  Documentation
                </Link>
                <Link
                  href="/pricing"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                >
                  Tarifs
                </Link>
                <Link
                  href="/support"
                  className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
                >
                  Support
                </Link>
              </div>
            </div>

            {/* CTA / Login - Droite */}
            <div className="flex items-center justify-end w-48 space-x-4">
              <a
                href="https://github.com/astron-collection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <Bot className="w-4 h-4" />
                Ajouter le bot
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Gauche */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                  Astron
                </span>
              </Link>
            </div>

            {/* CTA / Hamburger - Droite */}
            <div className="flex items-center space-x-3">
              <a
                href="https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center gap-1"
              >
                <Bot className="w-3 h-3" />
                Ajouter
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={toggleMobileMenu} />
            <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-black shadow-xl overflow-y-auto">
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <span className="text-xl font-semibold text-zinc-900 dark:text-white">
                      Astron Collection
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Accueil
                  </Link>

                  {/* Applications Mobile */}
                  <div className="space-y-1">
                    <button
                      onClick={toggleAppsDropdown}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <span>Applications</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isAppsDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isAppsDropdownOpen && (
                      <div className="ml-4 space-y-1">
                        <div className="px-3 py-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                          Applications principales
                        </div>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Tableau de bord
                  </Link>
                  <Link
                    href="/dashboard/bots"
                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Gestion des bots
                  </Link>
                  <Link
                    href="/dashboard/analytics"
                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Statistiques
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Paramètres
                  </Link>
                        <Link
                          href="/apps/logger"
                          className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          Logger
                        </Link>
                        <Link
                          href="/apps/protect"
                          className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          Protect
                        </Link>
                        <Link
                          href="/apps/player"
                          className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          Player
                        </Link>
                        
                        <div className="px-3 py-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-3">
                          Add-ons
                        </div>
                        <Link
                          href="/addons/gpt"
                          className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          GPT
                        </Link>
                        <Link
                          href="/addons/voip"
                          className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          VoIP
                        </Link>
                        <Link
                          href="/addons/mail"
                          className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          Mail
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/docs"
                    className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Documentation
                  </Link>
                  <Link
                    href="/downloads"
                    className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Téléchargements
                  </Link>
                  <Link
                    href="/community"
                    className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Communauté
                  </Link>
                  <Link
                    href="/support"
                    className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Support
                  </Link>
                  <Link
                    href="/hosting"
                    className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Hébergement/Services
                  </Link>

                  <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <a
                      href="https://github.com/astron-collection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;