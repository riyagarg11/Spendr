import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Rocket,
} from "lucide-react";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur">
      {/* Top */}
      <div className="container mx-auto px-4">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / Value */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Spendr"
                width={100}
                height={40}
                className="opacity-90"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your AI-powered finance companion. Track expenses, analyze spending,
              and make smarter financial decisions with real-time insights.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                AI Analytics
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                <BookOpen className="h-3.5 w-3.5" />
                Smart Budgeting
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                <Rocket className="h-3.5 w-3.5" />
                Financial Growth
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground/90">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="text-muted-foreground hover:text-foreground">
                  Transactions
                </Link>
              </li>
              <li>
                <Link href="/budgets" className="text-muted-foreground hover:text-foreground">
                  Budget Planner
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-muted-foreground hover:text-foreground">
                  AI Insights
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="text-muted-foreground hover:text-foreground">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground/90">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground hover:text-foreground">
                Financial Guides
              </li>
              <li className="text-muted-foreground hover:text-foreground">
                Investment Tips
              </li>
              <li className="text-muted-foreground hover:text-foreground">
                Blog
              </li>
              <li className="text-muted-foreground hover:text-foreground">
                Support
              </li>
              <li className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
                <ShieldCheck className="h-4 w-4 text-muted-foreground" />
                Security & Privacy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-foreground/90">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" />
                hello@spendr.com
              </li>
              <li className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" />
                +91 93899 49997
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>Dehradun, India</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-4 flex items-center gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
                aria-label="Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-accent"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle – newsletter */}
      <div className="border-t border-border bg-muted/40">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h5 className="text-sm font-semibold tracking-wide">
                Stay financially smarter
              </h5>
              <p className="text-sm text-muted-foreground">
                Get finance tips, product updates, and AI insights delivered to your inbox.
              </p>
            </div>
            <form
              action="/api/subscribe"
              method="post"
              className="flex w-full max-w-md items-center gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Subscribe <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-xs text-muted-foreground">
              © {year} Spendr • Built by Final Year Students • All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <li className="text-muted-foreground">
                Powered by Next.js • Clerk • Prisma • Supabase • Inngest • Gemini
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
