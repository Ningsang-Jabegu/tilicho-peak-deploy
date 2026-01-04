import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Expedition = () => {
  return (
    <main className="min-h-screen bg-background py-12 md:py-24">
      <div className="container max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif">Expedition Details</h1>
            <p className="text-lg text-muted-foreground">
              Journey to Tilicho Lake - 4,919m
            </p>
          </div>

          <div className="bg-muted/60 border border-border/50 rounded-lg p-4 md:p-6">
            <h2 className="text-xs font-sans font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Expedition Metadata
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm md:text-base">
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground font-semibold">Expedition Date:</span>
                <span className="text-foreground">December 2025</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground font-semibold">Max Altitude:</span>
                <span className="text-foreground">4,919 m</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground font-semibold">Starting Point:</span>
                <span className="text-foreground">Tilicho Base Camp</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground font-semibold">Expedition Type:</span>
                <span className="text-foreground">High-altitude field deployment</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Location</h2>
              <p className="text-muted-foreground">
                Tilicho Lake is located in the Manang District of Nepal’s central Himalayas. The expedition route originates from Tilicho Base Camp and ascends to the lake at an elevation of 4,919 meters, passing through snow- and ice-covered terrain during the final ascent.
              </p>
            </div>

            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Altitude</h2>
              <p className="text-muted-foreground">
                At 4,919 meters (16,138 feet) above sea level, the environment is characterized by reduced oxygen availability, sub-zero morning temperatures, and rapidly changing weather conditions. These factors impose strict time windows and operational constraints on field activities.
              </p>
            </div>

            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Route Overview</h2>
              <p className="text-muted-foreground">
                The expedition followed the established Tilicho Lake trekking route via the Manang Valley, with a pre-dawn ascent from Tilicho Base Camp. The final segment involved snow and ice traversal, requiring careful pacing and route correction under low-visibility conditions.
              </p>
            </div>

            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Operational Objective</h2>
              <p className="text-muted-foreground">
                The primary objective was to execute a symbolic technical deployment at high altitude while maintaining structured time logging, environmental awareness, and safe ascent–descent protocols during a college-organized trekking expedition.
              </p>
            </div>
            
            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Technical & Environmental Challenges</h2>
              <p className="text-muted-foreground">
                High-altitude deployment introduced multiple constraints, including limited oxygen levels, cold-induced equipment sensitivity, reduced battery efficiency, and restricted on-site operation time. These conditions required prior preparation and rapid execution at the deployment location.
              </p>
            </div>

            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Expedition Outcome</h2>
              <p className="text-muted-foreground">
                The expedition successfully reached Tilicho Lake, completed the intended deployment activity, and returned to base camp without incident. All major milestones were time-stamped and documented for post-expedition analysis and archival.
              </p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif">Day-by-Day Expedition Log</h2>
              <p className="text-muted-foreground">
                Tilicho Lake High-Altitude Deployment Expedition (December 2025)
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-3 p-4 rounded-lg bg-background/40 border border-border/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Day 0 — Pre-Expedition Decision & Preparation</p>
                    <p className="text-sm text-muted-foreground">Date: 22 December 2025 • Location: Tilicho Base Camp • Altitude: ~4,150 m</p>
                  </div>
                  <span className="text-xs font-semibold text-glacial">20:03 (NPT)</span>
                </div>
                <div className="space-y-2 text-sm text-foreground">
                  <p>Final decision to attempt a symbolic website deployment at Tilicho Lake was made after the practicality of carrying a laptop was questioned.</p>
                  <p className="text-muted-foreground">Decision rationale: leverage the rare presence of computing equipment at extreme altitude to execute a live deployment.</p>
                  <div className="bg-muted/60 rounded-md p-3 border border-border/40">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Preparation Notes</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Laptop carried in a front-facing backpack for balance and protection</li>
                      <li>Hand-carry bag used for essentials during ascent</li>
                      <li>No external power bank available for laptop</li>
                      <li>Mobile device (iPhone 13 Pro) fully charged prior to ascent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-4 rounded-lg bg-background/40 border border-border/50">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Day 1 — Summit Ascent & Deployment</p>
                  <p className="text-sm text-muted-foreground">Date: 23 December 2025</p>
                </div>

                <div className="space-y-3">
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Ascent Phase</p>
                    <p className="text-sm font-semibold text-foreground">03:06</p>
                    <p className="text-muted-foreground text-sm">Trek commenced from Tilicho Base Camp (28.679723, 83.907528); dark, cold, limited visibility; no flashlight carried.</p>
                  </div>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">05:37</p>
                    <p className="text-muted-foreground text-sm">Reached snow and ice zone after ~22 switchbacks (28.672030, 83.875778); temperature below freezing with stronger wind.</p>
                  </div>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">05:42</p>
                    <p className="text-muted-foreground text-sm">Temporary route deviation (28.671908, 83.875288); regrouped with team and fellow trekkers before correcting course.</p>
                  </div>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">06:27</p>
                    <p className="text-muted-foreground text-sm">Arrival at Tilicho Lake (28.677473, 83.864169), altitude 4,919 m; strong cold wind, sub-zero; networks unstable (NTC/Ncell intermittent).</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Deployment Phase</p>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">06:27 – 06:55</p>
                    <p className="text-muted-foreground text-sm">Initial attempt delayed by fluctuating mobile data; both networks alternated between brief availability and total loss.</p>
                  </div>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">~06:55</p>
                    <p className="text-muted-foreground text-sm">Deployment command executed during a brief signal window; laptop powered off immediately due to cold-induced battery failure; no on-site confirmation possible.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Descent Phase</p>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">~07:00 – 07:31</p>
                    <p className="text-muted-foreground text-sm">Most members began descent due to cold exposure; extended stay minimized to reduce altitude-related risk.</p>
                  </div>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">07:31</p>
                    <p className="text-muted-foreground text-sm">Final departure from Tilicho Lake initiated.</p>
                  </div>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">10:28</p>
                    <p className="text-muted-foreground text-sm">Returned safely to Tilicho Base Camp (28.679723, 83.907528).</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Post-Expedition Verification</p>
                  <div className="border-l border-border/60 pl-4 space-y-1">
                    <p className="text-sm font-semibold text-foreground">Later the same day (Base Camp)</p>
                    <p className="text-muted-foreground text-sm">Website accessibility verified; deployment confirmed successful; live URL reachable: tilicho.ningsangjabegu.com.np.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Key Observations (Log-Level)</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                    <li>Battery performance degraded rapidly in cold, high-altitude conditions.</li>
                    <li>Mobile battery percentage increased during descent, indicating cold-induced suppression.</li>
                    <li>Hunger sensation appeared only after reaching peak altitude, not during ascent.</li>
                    <li>Insufficient water intake slowed ascent and weakened physical condition.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Log Integrity Statement</p>
                  <p className="text-sm text-muted-foreground">All timestamps are in NPT and were reconstructed immediately post-expedition. GPS coordinates are approximate and device-derived.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-md border border-dashed border-border/60 bg-muted/40 p-4 text-sm text-muted-foreground text-center">
                    Figure placeholder — route map / altitude profile
                  </div>
                  <div className="rounded-md border border-dashed border-border/60 bg-muted/40 p-4 text-sm text-muted-foreground text-center">
                    Figure placeholder — deployment log excerpt / screenshot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Expedition;
