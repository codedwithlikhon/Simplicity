'use client'

import { useState } from 'react'
import { Zap, Cpu, Bug, ArrowUpCircle, Shuffle, GitBranch, PlusCircle, GitPullRequest, Check, Code, Terminal, TestTube } from 'lucide-react'

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const capabilities = [
    {
      id: 'bug-fixes',
      icon: Bug,
      title: 'Fix Bugs with Test Verified Patches',
      description: 'Automatically identify, reproduce, and fix bugs with comprehensive test coverage.',
      demo: 'I can analyze your codebase, identify potential bugs, create reproduction steps, fix the issue, and write comprehensive tests to prevent regression.',
      features: ['Static analysis', 'Test generation', 'Regression prevention']
    },
    {
      id: 'dependency-upgrades',
      icon: ArrowUpCircle,
      title: 'Handle Version Bumps & Dependency Upgrades',
      description: 'Seamlessly upgrade dependencies and handle version conflicts across your codebase.',
      demo: 'I can automatically update your package.json, resolve version conflicts, migrate deprecated APIs, and ensure all breaking changes are handled properly.',
      features: ['Version conflict resolution', 'Breaking change migration', 'Automatic testing']
    },
    {
      id: 'code-transformations',
      icon: Shuffle,
      title: 'Perform Scoped Code Transformations',
      description: 'Apply targeted code changes across specific files or modules with precision.',
      demo: 'I can refactor code patterns, update coding standards, implement architectural improvements, and ensure consistent style across your codebase.',
      features: ['Pattern-based refactoring', 'Style standardization', 'Architecture updates']
    },
    {
      id: 'migrations',
      icon: GitBranch,
      title: 'Migrate Code Across Languages or Frameworks',
      description: 'Intelligent code translation between programming languages and frameworks.',
      demo: 'I can translate code between languages, migrate between frameworks (React to Vue, Express to FastAPI), and adapt to new ecosystems while maintaining functionality.',
      features: ['Language translation', 'Framework migration', 'Ecosystem adaptation']
    },
    {
      id: 'feature-development',
      icon: PlusCircle,
      title: 'Ship Isolated, Scoped Features',
      description: 'Develop and deploy new features independently without affecting existing functionality.',
      demo: 'I can build new features from specification, create isolated implementations, write comprehensive tests, and ensure zero-impact deployment.',
      features: ['Feature isolation', 'Specification-based development', 'Zero-impact deployment']
    },
    {
      id: 'pr-creation',
      icon: GitPullRequest,
      title: 'Open PRs with Runnable Code & Test Results',
      description: 'Automatically creates comprehensive pull requests with detailed changelogs and verification.',
      demo: 'I can create detailed pull requests with runnable code, comprehensive test results, changelogs, and deployment instructions for immediate review.',
      features: ['Comprehensive changelogs', 'Test verification', 'Deployment ready']
    }
  ]

  const handleDemoClick = (capabilityId: string) => {
    setActiveDemo(activeDemo === capabilityId ? null : capabilityId)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[560px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`,
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            MiniMax M2 & Agent:{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              Ingenious in Simplicity
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Simplicity helps you move faster by working asynchronously on tasks in your GitHub repo. 
            Fix bugs, update dependencies, migrate code, and add new features with full transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Start Building
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-800/50">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Dual Mode Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Choose Your Mode</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Simplicity offers two powerful modes to match your needs, from quick tasks to comprehensive development work.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold">Lightning Mode</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                High-efficiency, high-speed agent for instant output in scenarios like conversational Q&A, 
                lightweight search, and simple coding tasks.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Quick code reviews and suggestions
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Simple bug fixes and patches
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Basic documentation updates
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Lightweight code transformations
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <Cpu className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold">Pro Mode</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional agent capabilities with optimal performance on complex, long-running tasks. 
                Excels at in-depth research, full-stack development, and comprehensive projects.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Complex system migrations
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Full-stack feature development
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Comprehensive dependency updates
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  Multi-language framework migrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capabilities Demo */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">What Simplicity Can Do Today</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Simplicity demonstrates its work as it makes progress, so you never have to guess what code it's writing, 
            or what it's thinking. Every action is transparent and verifiable.
          </p>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon
              const isActive = activeDemo === capability.id
              
              return (
                <div key={capability.id} className="group">
                  <div 
                    className={`bg-gray-900/70 border rounded-xl p-6 transition-all duration-300 cursor-pointer h-full ${
                      isActive 
                        ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                        : 'border-gray-700 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50'
                    }`}
                    onClick={() => handleDemoClick(capability.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`w-8 h-8 transition-colors ${
                        isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-blue-400'
                      }`} />
                      <Code className={`w-5 h-5 transition-colors ${
                        isActive ? 'text-green-400' : 'text-gray-500'
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    {isActive && (
                      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                        <div className="flex items-center mb-3">
                          <Terminal className="w-5 h-5 text-green-400 mr-2" />
                          <span className="text-green-400 font-mono text-sm">Live Demo Active</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {capability.demo}
                        </p>
                        <div className="space-y-2">
                          {capability.features.map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-400">
                              <TestTube className="w-4 h-4 text-blue-400 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          {activeDemo && (
            <div className="mt-8 text-center">
              <p className="text-gray-400 mb-4">Ready to see it in action?</p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                Try This Capability
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">How Simplicity Works</h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Once you give Simplicity a task, it follows a systematic approach to ensure quality and transparency.
          </p>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: 1, title: 'Environment Setup', desc: 'Spins up fresh dev environment in VM and installs dependencies' },
              { step: 2, title: 'Test Creation', desc: 'Writes comprehensive tests to verify current behavior' },
              { step: 3, title: 'Code Changes', desc: 'Makes targeted changes with full transparency' },
              { step: 4, title: 'Test Verification', desc: 'Runs tests to ensure changes work correctly' },
              { step: 5, title: 'PR Creation', desc: 'Opens pull request with runnable code and results' }
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-8" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Accelerate Your Development?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join developers who are moving faster with Simplicity. 
            Experience the future of AI-assisted coding with full transparency and control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              Get Started Today
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-800/50">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 MiniMax. Built with Simplicity AI Coding Agent.</p>
        </div>
      </footer>
    </div>
  )
}