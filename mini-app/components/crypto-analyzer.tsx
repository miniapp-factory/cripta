"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CryptoAnalyzer() {
  const [status, setStatus] = useState<string>("idle");

  const handleAnalyze = async () => {
    setStatus("analyzing");
    // Simulate analysis
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("buying");
    // Simulate buying
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("completed");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <Button onClick={handleAnalyze} disabled={status !== "idle"}>
        {status === "idle" ? "Analyze & Buy Crypto" : status}
      </Button>
    </div>
  );
}
