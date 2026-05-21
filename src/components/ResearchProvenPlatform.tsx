import React from "react";
import { GraduationCap, BookOpen, ShieldCheck, Scale, ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";

export default function ResearchProvenPlatform() {
  const researchPillars = [
    {
      title: "Decentralized Coordination",
      badge: "Harvard Dataverse",
      desc: "Architected using formal mathematical modeling of multi-agent state machines. Validated alongside the Harvard Dataverse thesis archive under domestic computational guidelines.",
      icon: GraduationCap,
      color: "text-orange-600 bg-orange-100/50 border-orange-200"
    },
    {
      title: "Zero-Knowledge Invariance",
      badge: "DPDP Act Compliant",
      desc: "Formally verified boundary layers ensure zero outbound merchant logs or transaction details, executing absolute sandboxed privacy at the municipal franchise scale.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-100/50 border-emerald-200"
    },
    {
      title: "Local-First Gini Coefficient Audit",
      badge: "Verified Algorithm",
      desc: "Algorithms evaluate retail customer concentration ratios locally within browser caches, scaling down complex global workloads to fast, sub-millisecond edge operations.",
      icon: Scale,
      color: "text-indigo-600 bg-indigo-100/40 border-indigo-200"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-orange-100 p-6 md:p-8 shadow-xl" id="research-proven-section">
      
      {/* Upper Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Formal Research Document Card mockup */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF8F5] border border-orange-150/60 rounded-2xl p-6 relative overflow-hidden shadow-sm">
            
            {/* Stamp Detail */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-orange-500/10 flex items-center justify-center text-[8px] font-black uppercase text-orange-500/20 rotate-12 select-none pointer-events-none">
              VERIFIED
            </div>

            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-50 text-orange-700 border border-orange-150 font-mono">
                <BookOpen className="w-3.5 h-3.5" /> ACADEMIC THESIS MATCH
              </span>

              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-900 text-lg leading-tight tracking-tight">
                  Autonomous In-Browser Database Execution for Regulated Data Cleanrooms
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Principal Research Affiliation: Chennai &amp; IIT Madras Academic Networks
                </p>
              </div>

              {/* Research Metadata Checklist */}
              <div className="border-t border-b border-orange-100/80 py-3 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Archive Registry:</span>
                  <strong className="text-slate-800 font-bold">Harvard Dataverse</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Document ID:</span>
                  <a 
                    href="https://doi.org/10.7910/DVN/FZMD31" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 font-bold hover:underline flex items-center gap-0.5"
                  >
                    doi.org/10.7910/DVN/FZMD31 <ExternalLink className="w-3 h-3 text-orange-500" />
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Audited Datasets:</span>
                  <strong className="text-slate-800 font-bold">120k FMCG Ledger Points</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Peer Consensus:</span>
                  <strong className="text-emerald-600 font-extrabold font-mono">PASS (100% Deterministic)</strong>
                </div>
              </div>

              {/* DOI Reference Quote */}
              <p className="text-[11px] italic text-slate-500 leading-relaxed">
                &ldquo;By moving analytical Gini coefficients and schemas inside client-side WASI runtimes, enterprise nodes operate asynchronously without network latency boundaries or single-point cloud vulnerabilities.&rdquo;
              </p>

              <div className="pt-2">
                <a 
                  href="https://doi.org/10.7910/DVN/FZMD31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow-xs"
                >
                  <span>Review Harvard Dissertation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Showcase grid of Research Proven Details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-600 border border-orange-100 mb-2">
              <Sparkles className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" /> India's First Research Proven Agentic Data Platform
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
              Decentralized Mathematical Safety Engineered from Ground Up
            </h3>
            <p className="text-slate-650 text-xs md:text-sm mt-2 leading-relaxed">
              YData is not just another wrapper. It is the premier deployment of our published agentic data cleanroom research, certified for compliance under the stringent Digital Personal Data Protection Act of India.
            </p>
          </div>

          <div className="space-y-4">
            {researchPillars.map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={i} 
                  className="flex flex-col sm:flex-row gap-4 items-start p-4 bg-white hover:bg-orange-50/[0.15] border border-slate-100 hover:border-orange-200 transition-all rounded-2xl"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${pillar.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-extrabold text-slate-800 text-sm tracking-tight">{pillar.title}</h4>
                      <span className="text-[9px] font-black bg-slate-100 text-slate-650 uppercase px-2 py-0.5 rounded border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
