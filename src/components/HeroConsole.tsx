"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, RotateCcw, Terminal } from "lucide-react";

const tsLog = [
  "$ npm run dev",
  "ready - Next.js & enterprise UI features loaded on :3000",
  "info  - Finacle banking workflows initialized (4+ yrs experience)",
  "metric - automated CodeGen tooling reduced repo size by 50%",
  " Likith's Full-Stack Platform is ONLINE! 🚀 30+ UI features delivered.",
];

const javaLog = [
  "$ mvn spring-boot:run",
  "INFO  - Connected to PostgreSQL / Supabase cluster with pooling",
  "INFO  - Finacle Core Banking workflow engine operational",
  "METRIC - 140+ production banking defects diagnosed & resolved",
  " Likith's Spring Boot Banking Service is live at :8080! ⚡ Over-Achiever (2023).",
];

export default function HeroConsole() {
  const [activeTab, setActiveTab] = useState<"ts" | "java">("ts");
  const [isRunning, setIsRunning] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [outputIndex, setOutputIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      const logs = activeTab === "ts" ? tsLog : javaLog;
      if (outputIndex < logs.length) {
        interval = setTimeout(() => {
          setConsoleOutput((prev) => [...prev, logs[outputIndex]]);
          setOutputIndex((prev) => prev + 1);
        }, 500);
      }
    }
    return () => clearTimeout(interval);
  }, [isRunning, outputIndex, activeTab]);

  const handleRun = () => {
    if (isRunning) {
      setIsRunning(false);
      setConsoleOutput([]);
      setOutputIndex(0);
    } else {
      setIsRunning(true);
      setConsoleOutput([]);
      setOutputIndex(0);
    }
  };

  return (
    <div className="w-full max-w-[450px] md:max-w-[550px] mx-auto rounded-3xl border border-panel-line bg-panel shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col font-mono text-[11px] md:text-xs text-left">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-panel border-b border-panel-line">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full inline-block bg-dot-red" />
          <span className="w-2.5 h-2.5 rounded-full inline-block bg-dot-yellow" />
          <span className="w-2.5 h-2.5 rounded-full inline-block bg-dot-green" />
        </div>
        <div className="flex items-center bg-bgcolor/70 border border-panel-line rounded-xl p-0.5">
          <button
            onClick={() => {
              setActiveTab("ts");
              setIsRunning(false);
              setConsoleOutput([]);
              setOutputIndex(0);
            }}
            className={`px-3 py-1 rounded-lg font-mono font-medium text-[10px] md:text-xs transition-all cursor-pointer ${
              activeTab === "ts"
                ? "bg-primary text-slate-950 font-bold shadow-xs"
                : "text-muted hover:text-foreground"
            }`}
          >
            Likith.ts
          </button>
          <button
            onClick={() => {
              setActiveTab("java");
              setIsRunning(false);
              setConsoleOutput([]);
              setOutputIndex(0);
            }}
            className={`px-3 py-1 rounded-lg font-mono font-medium text-[10px] md:text-xs transition-all cursor-pointer ${
              activeTab === "java"
                ? "bg-primary text-slate-950 font-bold shadow-xs"
                : "text-muted hover:text-foreground"
            }`}
          >
            BankingService.java
          </button>
        </div>
        <button
          onClick={handleRun}
          className={`flex items-center gap-1 px-3 py-1 rounded-full font-mono font-bold text-[10px] md:text-xs transition-all cursor-pointer ${
            isRunning
              ? "bg-dot-red/15 text-dot-red border border-dot-red/30 hover:bg-dot-red/25"
              : "bg-primary text-slate-950 hover:bg-primary/90 shadow-sm shadow-primary/20"
          }`}
        >
          {isRunning ? (
            <>
              <RotateCcw className="size-3" /> Stop
            </>
          ) : (
            <>
              <Play className="size-3 fill-current" /> Run
            </>
          )}
        </button>
      </div>

      {/* Editor Content */}
      <div className="relative p-5 h-56 overflow-y-auto leading-relaxed select-none bg-panel">
        <pre className="text-foreground font-medium whitespace-pre-wrap break-all font-mono">
          {activeTab === "ts" ? (
            <code>
              <span className="text-primary font-bold">const</span>{" "}
              <span className="text-foreground">engineer</span> = &#123;{"\n"}
              {"  "}name:{" "}
              <span className="text-code-str">
                &quot;Likith Naga Sai Adusumalli&quot;
              </span>
              ,{"\n"}
              {"  "}role:{" "}
              <span className="text-code-str">
                &quot;Product Technical Analyst @ EdgeVerve&quot;
              </span>
              ,{"\n"}
              {"  "}platform:{" "}
              <span className="text-code-str">
                &quot;Finacle Core Banking Platform&quot;
              </span>
              ,{"\n"}
              {"  "}experience:{" "}
              <span className="text-code-str">&quot;4+ Years&quot;</span>
              ,{"\n"}
              {"  "}award:{" "}
              <span className="text-code-str">
                &quot;Over-Achiever of the Year (2023)&quot;
              </span>
              ,{"\n"}
              {"  "}impact:{" "}
              <span className="text-code-str">
                &quot;Delivered 30+ UI features & cut repo size 50%&quot;
              </span>
              ,{"\n"}
              {"  "}openToRoles:{" "}
              <span className="text-primary font-semibold">true</span>
              {"\n"}
              &#125;;{"\n\n"}
              <span className="text-primary font-bold">function</span>{" "}
              <span className="text-foreground font-bold">verifyArchitecture</span>() &#123;{"\n"}
              {"  "}console.log(
              <span className="text-code-str">
                \`Banking workflows: 100% operational\`
              </span>
              );{"\n"}
              {"  "}
              <span className="text-primary font-bold">return</span>{" "}
              <span className="text-code-str">\`Bulletproof & fast ⚡\`</span>;{"\n"}
              &#125;
            </code>
          ) : (
            <code>
              <span className="text-primary font-bold">package</span>{" "}
              com.edgeverve.finacle;{"\n\n"}
              <span className="text-primary font-bold">@Service</span>{"\n"}
              <span className="text-primary font-bold">public class</span>{" "}
              BankingService &#123;{"\n"}
              {"  "}
              <span className="text-primary font-bold">private final</span>{" "}
              <span className="text-foreground">String</span> engineer ={" "}
              <span className="text-code-str">
                &quot;Likith Naga Sai Adusumalli&quot;
              </span>
              ;{"\n"}
              {"  "}
              <span className="text-primary font-bold">private final</span>{" "}
              <span className="text-foreground">String</span> role ={" "}
              <span className="text-code-str">&quot;Product Technical Analyst&quot;</span>
              ;{"\n"}
              {"  "}
              <span className="text-primary font-bold">private final</span>{" "}
              <span className="text-foreground">int</span> enterpriseFeatures ={" "}
              <span className="text-primary font-semibold">30</span>;{"\n"}
              {"  "}
              <span className="text-primary font-bold">private final</span>{" "}
              <span className="text-foreground">String</span> repoCut ={" "}
              <span className="text-code-str">&quot;50% via CodeGen CI/CD&quot;</span>
              ;{"\n\n"}
              {"  "}
              <span className="text-primary font-bold">public</span>{" "}
              <span className="text-foreground">String</span> processWorkflow() &#123;
              {"\n"}
              {"    "}
              <span className="text-primary font-bold">return</span>{" "}
              <span className="text-code-str">
                &quot;Finacle core banking platform: 100% reliable ⚡&quot;
              </span>
              ;{"\n"}
              {"  "}&#125;{"\n"}
              &#125;
            </code>
          )}
        </pre>
      </div>

      {/* Terminal Output */}
      <AnimatePresence>
        {isRunning && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="border-t border-panel-line bg-bgcolor overflow-hidden"
          >
            <div className="px-4 py-2 border-b border-panel-line flex items-center gap-2 text-muted font-bold text-[9px] uppercase tracking-wider font-mono">
              <Terminal className="size-3.5 text-primary" /> Terminal Logs
            </div>
            <div className="p-4 space-y-1.5 h-32 overflow-y-auto font-mono text-[10px] md:text-[11px]">
              {consoleOutput.map((line, idx) => {
                const isSpecial = line.startsWith(" Likith's");
                return (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      isSpecial
                        ? "text-dot-green font-bold bg-dot-green/10 p-2 rounded-xl border border-dot-green/20"
                        : line.startsWith("$")
                        ? "text-primary font-semibold"
                        : "text-muted"
                    }`}
                  >
                    {line}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
