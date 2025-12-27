import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif">
              About This Project
            </h1>
            <p className="text-lg text-muted-foreground">
              This website exists as a record of a decision made under physical
              strain, limited resources, and time pressure.
            </p>
            <p className="text-lg text-muted-foreground">
              The idea to deploy a website at Tilicho Lake was not pre-planned.
              It was decided one day before the summit, during the stay at
              Tilicho Base Camp.
            </p>
            <p className="text-lg text-muted-foreground">
              On <strong>Monday, 22 December 2025 at 8:03 PM</strong>, while
              resting at base camp, a casual question from my friends triggered
              the idea:
              <br />
              <em>
                "Are you really carrying your laptop bag all the way to Tilicho
                Lake?"
              </em>
            </p>
            <p className="text-lg text-muted-foreground">
              I paused, thought through the effort already invested, and
              responded with a better question:
              <br />
              <em>
                "What if I actually deploy the two websites from Tilicho Lake
                itself? One for RAC Baneshwor and this website."
              </em>
            </p>
            <p className="text-lg text-muted-foreground">
              That moment marked the start of this mission.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Decision & Preparation</h2>
              <p className="text-muted-foreground leading-relaxed">
                At that point, I had already been carrying:
                <ul className="list-disc list-inside mt-2">
                  <li>
                    A laptop bag weighting approximately 1.8 kg on the front
                  </li>
                  <li>
                    A hand-carry bag on the back weighing approximately 3.2 kg
                  </li>
                  <li>
                    Supplies for three consecutive days of high-altitude hiking
                  </li>
                </ul>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The additional weight was already committed. The only remaining
                variable was intent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With limited connectivity, cold conditions, and no margin for
                retries, the goal became clear:
                <br />
                prepare everything in advance and execute a single, clean
                deployment at the lake.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This project is not about speed or convenience.
                <br />
                It is about{" "}
                <strong>commitment after a decision is made.</strong>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Execution at Tilicho Lake</h2>
              <p className="text-muted-foreground leading-relaxed">
                The deployment was completed at{" "}
                <strong>Tilicho Lake (4,919 m)</strong> during a college
                trekking expedition.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                No additional equipment was added after the decision.
                <br />
                No backup plan existed beyond preparation and discipline.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The act of deploying code at this altitude was symbolic, but the
                constraints were real.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">What This Represents</h2>
              <p className="text-muted-foreground leading-relaxed">
                <ul className="list-disc list-inside mt-2">
                  <li>Ownership of an idea from inception to execution</li>
                  <li>Working under physical and environmental stress</li>
                  <li>
                    Making technical decisions with zero tolerance for error
                  </li>
                  <li>
                    Carrying responsibility when comfort is no longer available
                  </li>
                </ul>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>
                  <em>
                    Technology doesn’t stop working because conditions are
                    difficult.
                    <br />
                    People usually do.
                  </em>
                </strong>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Deployment Evidence</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm font-medium text-muted-foreground">
                    Exact deployment timestamp (Nepal Time)
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm font-medium text-muted-foreground">
                    Device used for deployment
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm font-medium text-muted-foreground">
                    Deployment screenshots and hosting confirmation
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-sm font-medium text-muted-foreground">
                    Post-deployment verification after returning to base camp
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Technical Stack & Hosting</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-muted-foreground">
                    <strong>Frontend:</strong> React
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Language:</strong> TypeScript
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30">
                  <p className="text-muted-foreground">
                    <strong>Build Tool:</strong> Vite
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Hosting Platform:</strong> Vercel
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Connectivity Challenges During Deployment</h2>
              <p className="text-muted-foreground leading-relaxed">
                The deployment was executed near Tilicho Lake at coordinates 28.677473, 83.864169 (Google Maps Plus Code: MVG7+XMM, Khangsar). At this altitude, mobile connectivity was extremely unstable. Both NTC and NCELL networks were intermittently available - sometimes neither worked, sometimes only one appeared briefly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reached Tilicho Lake at 6:27 AM, but due to inconsistent network availability, deployment was delayed. After several attempts, the deployment was initiated at approximately 6:55 AM.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Immediately after pressing the deploy command, the laptop powered off due to battery failure caused by cold conditions. The deployment status was verified later after returning to base camp, confirming that the website had been successfully deployed and hosted.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Trek Route &amp; Altitude Timeline</h2>
              <div className="space-y-6 border-l border-border/50 pl-4 md:pl-6">
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">3:06 AM (Dec 23, 2025)</p>
                  <p className="text-foreground font-semibold">Started trekking from Tilicho Base Camp Hotel</p>
                  <p className="text-sm text-muted-foreground">Coordinates: 28.679723, 83.907528</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">5:37 AM</p>
                  <p className="text-foreground font-semibold">Completed 22 ghumtis and reached the snow and ice section</p>
                  <p className="text-sm text-muted-foreground">Coordinates: 28.672030, 83.875778</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">5:42 AM</p>
                  <p className="text-foreground font-semibold">Lost the route briefly</p>
                  <p className="text-sm text-muted-foreground">Near 28.671908, 83.875288 with Anupam Subedi, Achyut Adhikari, Bikash Saud, Suman Ghishing, myself, and one trekker from another group; route recovered after meeting Bibek Koirala and Suresh Subba.</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">6:27 AM</p>
                  <p className="text-foreground font-semibold">Reached Tilicho Lake, Deployed 2 Websites</p>
                  <p className="text-sm text-muted-foreground">Coordinates: 28.677473, 83.864169</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">~6:45-6:50 AM</p>
                  <p className="text-foreground font-semibold">All group members arrived at the lake</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">~7:00 AM</p>
                  <p className="text-foreground font-semibold">Several members returned to base camp due to extreme cold and strong winds</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">7:31 AM</p>
                  <p className="text-foreground font-semibold">Returned from the lake with Sakshyam Chhatkuli</p>
                </div>
                <div className="relative pl-6">
                  <span className="absolute left-[-10px] top-2 w-3 h-3 rounded-full bg-glacial ring-4 ring-background" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">10:28 AM</p>
                  <p className="text-foreground font-semibold">Reached Tilicho Base Camp Hotel</p>
                  <p className="text-sm text-muted-foreground">Coordinates: 28.679723, 83.907528</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Photos &amp; Proof of Execution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Due to extreme cold, limited battery life, and wind exposure, extensive documentation during deployment was not possible. Available proof includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Photos taken at Tilicho Lake</li>
                <li>Screenshots of deployment logs</li>
                <li>Hosting confirmation after returning to base camp</li>
                <li>Time-stamped system and deployment records</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Lessons Learned Under High-Altitude Constraints</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Battery performance drops drastically in cold environments; power banks are essential and must be insulated</li>
                <li>Cold temperatures can cause devices to shut down abruptly even when showing remaining charge</li>
                <li>iPhone battery percentage increased significantly while descending, confirming cold-induced power loss</li>
                <li>Appetite was suppressed during prolonged trekking but returned briefly at the summit</li>
                <li>Carrying sufficient water is non-negotiable; dehydration caused weakness and delayed progress</li>
                <li>Consistent pace, mental resilience, and commitment are more important than speed</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Post-Mortem: What Worked and What Didn’t</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30 space-y-2">
                  <p className="text-sm font-semibold text-foreground">What Worked</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Pre-charging all devices before the summit</li>
                    <li>Preparing the deployment pipeline in advance</li>
                    <li>Executing with minimal actions under pressure</li>
                    <li>Maintaining focus despite physical exhaustion</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-muted/30 space-y-2">
                  <p className="text-sm font-semibold text-foreground">What Didn’t</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Laptop battery lasted only ~20 minutes instead of the expected 30</li>
                    <li>No flashlight during a 3:06 AM summit start made navigation difficult</li>
                    <li>Spectacles fogged repeatedly due to warm breath in freezing air</li>
                    <li>Carrying non-essential weight reduced efficiency</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Final Reality Check</h2>
              <p className="text-muted-foreground leading-relaxed">
                This deployment succeeded not because conditions were favorable, but because preparation met commitment.
              </p>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For a detailed technical breakdown of the expedition, including comprehensive logs, sensor data, and environmental measurements collected during the trek:
                </p>
                <a href="https://doi.org/10.5281/zenodo.18060983" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    View Technical Expedition Log
                  </Button>
                </a>
                <a href="/documents/tilicho_expedition_onepage.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 ml-2">
                    Read Tilicho Expedition One Pager
                  </Button>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
