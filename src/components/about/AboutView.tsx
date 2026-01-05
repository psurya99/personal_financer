import React from 'react';
import { Github, Linkedin, Code, Boxes, Layers, Globe } from 'lucide-react';

export function AboutView() {
    return (
        <div className="space-y-8 pb-10">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">About & Documentation</h2>
                <p className="mt-1 text-sm text-slate-500">Meet the developer and understand the technology behind FinWise.</p>
            </div>

            {/* Developer Profile Card - "Elevated" */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-900 to-slate-900 p-8 shadow-xl text-white">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl"></div>

                <div className="relative flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <div className="h-32 w-32 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 p-1 shadow-lg">
                            <div className="h-full w-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                                SP
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <div>
                            <h3 className="text-3xl font-bold text-white">Surya Padala</h3>
                            <p className="text-brand-200 font-medium text-lg">Full Stack Architect & Lead Developer</p>
                        </div>
                        <p className="max-w-xl text-slate-300 leading-relaxed">
                            A visionary technologist with a passion for crafting pixel-perfect, scalable web ecosystems.
                            Specializing in the React stack, high-performance computing, and intuitive user experiences.
                            Building the future of personal finance, one component at a time.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                            <a href="https://linkedin.com/in/surya-padala" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors border border-white/10">
                                <Linkedin className="h-4 w-4" />
                                <span>Connect on LinkedIn</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors border border-white/10">
                                <Github className="h-4 w-4" />
                                <span>GitHub Profile</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Documentation Section */}
            <div className="grid gap-6 md:grid-cols-2">
                {/* Tech Stack */}
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                            <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">Modern Tech Stack</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 h-2 w-2 rounded-full bg-brand-500"></div>
                            <div>
                                <span className="font-semibold text-slate-900 block">React 19 & TypeScript</span>
                                <span className="text-sm text-slate-500">Leveraging the latest features for type-safe, high-performance UI rendering.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 h-2 w-2 rounded-full bg-accent-500"></div>
                            <div>
                                <span className="font-semibold text-slate-900 block">Tailwind CSS & Lucide</span>
                                <span className="text-sm text-slate-500">Utility-first styling system with consistent design tokens and crisp vector icons.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                            <div>
                                <span className="font-semibold text-slate-900 block">Vite Build System</span>
                                <span className="text-sm text-slate-500">Next-generation frontend tooling for lightning-fast HMR and optimized production builds.</span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Architecture */}
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-violet-50 text-violet-600">
                            <Layers className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">System Architecture</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="p-1 rounded bg-slate-100 text-slate-600">
                                <Boxes className="h-4 w-4" />
                            </div>
                            <div>
                                <span className="font-semibold text-slate-900 block">Component Composition</span>
                                <span className="text-sm text-slate-500">Modular design pattern separating Layouts, Views, and UI primitives for maximum reusability.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="p-1 rounded bg-slate-100 text-slate-600">
                                <Globe className="h-4 w-4" />
                            </div>
                            <div>
                                <span className="font-semibold text-slate-900 block">State Management</span>
                                <span className="text-sm text-slate-500">Context API for global state (Currency, User) combined with custom hooks for local persistence.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Folder Structure */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Project Structure</h3>
                <pre className="bg-slate-50 p-4 rounded-lg text-xs md:text-sm font-mono text-slate-700 overflow-x-auto border border-slate-100">
                    {`src/
├── components/         # UI Building Blocks
│   ├── layout/        # Sidebar, Main Layout
│   ├── dashboard/     # Charts, Summaries
│   ├── auth/          # Registration Flow
│   └── ui/            # Reusable Atoms (Buttons, Cards)
├── context/           # Global State (User, Currency)
├── hooks/             # Custom Logic (usePersistence)
└── utils/             # Helper Functions & Calculations`}
                </pre>
            </div>
        </div>
    );
}
