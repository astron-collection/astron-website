"use client";

import Link from "next/link";
import { Download, Book, Bot, BarChart3, Shield, Music, Headphones, Ticket, Zap, Lock, Palette, TrendingUp, Github, MessageSquare, Settings, ChevronDown, Check, Users, Clock, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-indigo-200 dark:bg-grid-indigo-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Solution complète pour serveurs Discord
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            La Suite
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              {" "}Discord
            </span>
            <br />
            pour Administrateurs
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Astron Collection est la suite d'applications open source ultime pour gérer, 
            modérer et faire grandir votre communauté Discord avec professionnalisme.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/downloads"
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Bot className="w-5 h-5" />
              Ajouter à Discord
              <span className="absolute -top-2 -right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Gratuit</span>
            </Link>
            <Link 
              href="/docs"
              className="px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-200 border border-slate-200 dark:border-slate-700 flex items-center gap-2"
            >
              <Book className="w-5 h-5" />
              Documentation
            </Link>
          </div>

          {/* Hero Illustration */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Astron", icon: Bot, color: "from-indigo-500 to-indigo-600", desc: "Bot principal" },
                  { name: "Logger", icon: BarChart3, color: "from-purple-500 to-purple-600", desc: "Logs & Stats" },
                  { name: "Protect", icon: Shield, color: "from-pink-500 to-pink-600", desc: "Sécurité" },
                  { name: "Player", icon: Music, color: "from-blue-500 to-blue-600", desc: "Musique" },
                ].map((app) => (
                  <div key={app.name} className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <app.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{app.name}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{app.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation du projet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Pourquoi choisir{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Astron Collection
                </span>
                {' '}pour Discord ?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Astron Collection est la solution tout-en-un pour les administrateurs Discord. 
                Notre suite de bots et d'outils vous permet de gérer votre communauté comme jamais 
                auparavant, avec des fonctionnalités professionnelles et une interface intuitive.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Des serveurs de gaming aux communautés professionnelles, nos bots s'adaptent 
                parfaitement à vos besoins avec une modularité exceptionnelle et des performances 
                éprouvées par des milliers de serveurs.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">API Discord Officielle</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Modération Avancée</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span className="text-sm font-medium text-pink-700 dark:text-pink-300">24/7 Uptime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                      <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules / Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Bots Discord Essentiels
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              La collection complète pour transformer votre serveur Discord
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { 
                name: "Astron", 
                desc: "Bot multifonction principal", 
                icon: Bot, 
                color: "from-indigo-500 to-indigo-600",
                features: ["Modération", "Rôles auto", "Commandes personnalisées"]
              },
              { 
                name: "Logger", 
                desc: "Logs et statistiques du serveur", 
                icon: BarChart3, 
                color: "from-purple-500 to-purple-600",
                features: ["Audit logs", "Statistiques membres", "Graphiques temps réel"]
              },
              { 
                name: "Protect", 
                desc: "Sécurité et anti-raid avancé", 
                icon: Shield, 
                color: "from-pink-500 to-pink-600",
                features: ["Anti-raid", "Verification CAPTCHA", "Blacklist"]
              },
              { 
                name: "Player", 
                desc: "Musique et streaming HD", 
                icon: Music, 
                color: "from-blue-500 to-blue-600",
                features: ["Spotify/YouTube", "Playlists", "Qualité HD"]
              },
            ].map((app) => (
              <div key={app.name} className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{app.name}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{app.desc}</p>
                <ul className="space-y-2">
                  {app.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Extensions & Modules
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "GPT", desc: "Assistant IA pour votre communauté", icon: Bot, color: "from-indigo-500 to-purple-600" },
              { name: "VoIP", desc: "Salons vocaux temporaires automatiques", icon: Headphones, color: "from-cyan-500 to-blue-600" },
              { name: "Tickets", desc: "Système de support et tickets", icon: Ticket, color: "from-orange-500 to-red-600" },
            ].map((addon) => (
              <div key={addon.name} className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200">
                <div className={`w-12 h-12 bg-gradient-to-br ${addon.color} rounded-lg flex items-center justify-center mb-4`}>
                  <addon.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{addon.name}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités / Avantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Pourquoi les administrateurs Discord nous choisissent
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Des fonctionnalités professionnelles pour votre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Modération IA",
                desc: "Détection automatique de spam et comportements toxiques",
                icon: Bot,
                color: "text-indigo-500"
              },
              {
                title: "24/7 Online",
                desc: "Hébergement professionnel avec uptime garanti",
                icon: Zap,
                color: "text-green-500"
              },
              {
                title: "Personnalisation",
                desc: "Rôles, commandes et interfaces entièrement configurables",
                icon: Palette,
                color: "text-purple-500"
              },
              {
                title: "Analytics",
                desc: "Statistiques détaillées sur l'activité de votre serveur",
                icon: TrendingUp,
                color: "text-pink-500"
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center group">
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-2 ${feature.color}`}>
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communauté / Contributions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.3))]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Rejoignez des milliers de serveurs Discord
              </h2>
              <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
                Découvrez pourquoi plus de 50 000 serveurs font confiance à Astron Collection 
                pour leur gestion quotidienne
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a 
                  href="https://discord.gg/astron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-200 flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Serveur Support
                  <span className="text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">24/7</span>
                </a>
                <a 
                  href="https://github.com/astron-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                  <span className="text-sm bg-indigo-800 px-2 py-1 rounded-full">Open Source</span>
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Users className="w-6 h-6 text-indigo-200" />
                    <div className="text-3xl font-bold">50k+</div>
                  </div>
                  <div className="text-indigo-100">Serveurs Actifs</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Star className="w-6 h-6 text-indigo-200" />
                    <div className="text-3xl font-bold">2M+</div>
                  </div>
                  <div className="text-indigo-100">Utilisateurs</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Clock className="w-6 h-6 text-indigo-200" />
                    <div className="text-3xl font-bold">99.9%</div>
                  </div>
                  <div className="text-indigo-100">Uptime</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <MessageSquare className="w-6 h-6 text-indigo-200" />
                    <div className="text-3xl font-bold">24/7</div>
                  </div>
                  <div className="text-indigo-100">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}