"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MessageSquare, 
  Book, 
  Download, 
  HelpCircle, 
  Mail, 
  Users, 
  FileText, 
  Video, 
  ChevronUp,
  Twitter,
  Linkedin,
  Youtube,
  Bot,
  BarChart3,
  Shield,
  Music,
  Brain,
  Headphones,
  Send,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Restez informé des mises à jour</h3>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Recevez les dernières nouvelles, mises à jour et fonctionnalités directement dans votre boîte mail
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                {isSubscribed ? (
                  <>
                    <span>Inscrit !</span>
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <>
                    <span>S'inscrire</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            
            {/* À propos / Astron Collection */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">Astron Collection</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                La suite de bots Discord ultime pour gérer, modérer et faire grandir votre communauté avec professionnalisme.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium group"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Applications / Modules */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Dashboard</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/dashboard" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Bot className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                    <span>Tableau de bord</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/bots" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <BarChart3 className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    <span>Gestion des bots</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/analytics" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Shield className="w-4 h-4 text-pink-400 group-hover:text-pink-300" />
                    <span>Statistiques</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/settings" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Music className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    <span>Paramètres</span>
                  </Link>
                </li>
              </ul>
              
              <h5 className="font-medium mb-3 mt-6 text-slate-300 text-sm">Add-ons</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/addons/gpt" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Brain className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                    <span>GPT</span>
                  </Link>
                </li>
                <li>
                  <Link href="/addons/voip" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Headphones className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                    <span>VoIP</span>
                  </Link>
                </li>
                <li>
                  <Link href="/addons/mail" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Mail className="w-4 h-4 text-orange-400 group-hover:text-orange-300" />
                    <span>Mail</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Ressources */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Ressources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Book className="w-4 h-4" />
                    <span>Documentation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/downloads" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Download className="w-4 h-4" />
                    <span>Téléchargements</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Video className="w-4 h-4" />
                    <span>Tutoriels / Guides</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <HelpCircle className="w-4 h-4" />
                    <span>FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Communauté */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Communauté</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://discord.gg/astron" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
                  >
                    <MessageSquare className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
                    <span>Discord / Forum</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/astron-collection" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <FileText className="w-4 h-4" />
                    <span>Blog / News</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contributors" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Users className="w-4 h-4" />
                    <span>Contributeurs</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/help-center" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <HelpCircle className="w-4 h-4" />
                    <span>Centre d'aide</span>
                  </Link>
                </li>
                <li>
                  <Link href="/troubleshooting" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <FileText className="w-4 h-4" />
                    <span>Troubleshooting</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm group">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Guide de contribution</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Astron Collection. Tous droits réservés. • Non affilié à Discord Inc.
              </div>
              
              {/* Legal Links */}
              <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  CGU / CGV
                </Link>
                <Link href="/discord-terms" className="hover:text-white transition-colors">
                  Terms Discord
                </Link>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://twitter.com/astron-collection" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <Twitter className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/company/astron-collection" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://youtube.com/@astron-collection" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <Youtube className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://github.com/astron-collection" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-200 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-40"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  );
};

export default Footer;