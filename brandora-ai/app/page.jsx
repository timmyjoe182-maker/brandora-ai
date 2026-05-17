"use client";

import React, { useState } from "react";

const niches = [
  "Wedding Photographer","Elopement Photographer","Event Photographer","Videographer","Content Creator","Influencer","Podcast Host","YouTuber",
  "Ranch / Farm Brand","Horse Trainer","Equestrian Facility","Dog Trainer","Pet Groomer","Veterinary Clinic","Animal Rescue",
  "Real Estate Agent","Luxury Realtor","Property Developer","Airbnb Host","Vacation Rental Manager",
  "Luxury Local Business","Fine Dining Restaurant","Cafe","Coffee Shop","Bar","Winery","Brewery","Catering Company",
  "Fitness Coach","Gym","Yoga Studio","Pilates Studio","CrossFit Gym","Personal Trainer","Nutrition Coach",
  "Salon","Hair Stylist","Barber","Med Spa","Aesthetic Clinic","Dermatology Clinic","Makeup Artist","Nail Salon",
  "Law Firm","Attorney","CPA","Accounting Firm","Financial Advisor","Insurance Agency","Mortgage Broker",
  "Marketing Agency","Social Media Manager","Brand Consultant","Copywriter","Web Designer","SEO Agency",
  "Construction Company","General Contractor","Interior Designer","Architect","Home Builder","Landscaper",
  "Auto Dealership","Car Detailer","Mechanic","Car Wrap Shop","Auto Body Shop",
  "Retail Boutique","E-commerce Brand","Jewelry Brand","Clothing Brand","Luxury Goods Brand",
  "Tech Startup","SaaS Company","App Developer","AI Startup","IT Services",
  "Nonprofit Organization","Church","Community Organization","School","Private Tutor",
  "Travel Agency","Tour Company","Adventure Guide","Hotel","Resort","Spa",
  "Photobooth Company","DJ","Wedding Planner","Florist","Event Venue",
  "Cleaning Service","Home Services","Pool Service","HVAC Company","Plumbing Company","Electrical Company",
  "Tattoo Artist","Creative Studio","Art Gallery","Music Studio",
  "Bakery","Dessert Shop","Food Truck","Meal Prep Service","Private Chef",
  "Security Company","Private Investigator","Consulting Firm","Coaching Business",
  "Drone Services","Aerial Photography","Real Estate Media","Production Company",
  "Logistics Company","Trucking Company","Delivery Service","Warehouse Business",
  "Solar Company","Energy Consultant","Sustainability Brand",
  "Gaming Brand","Esports Team","Streamer","Apparel Startup",
  "Luxury Concierge","Private Chef Service","Personal Assistant Service","Lifestyle Brand"
];

const tones = ["Luxury", "Premium", "Elegant", "Refined", "Modern", "Warm", "Bold", "Simple", "Funny", "Professional"];

const sampleOpeners = [
  "A sharper way to show up online.",
  "Built for brands with taste.",
  "Less writing. More polish.",
  "Your next post, refined."
];

function Button({ children, className = "", ...props }) {
  return (
    <button className={"inline-flex items-center justify-center rounded-full font-medium transition hover:-translate-y-0.5 " + className} {...props}>
      {children}
    </button>
  );
}

function makePreviewContent({ businessType, tone, topic, contentType }) {
  const opener = sampleOpeners[Math.floor(Math.random() * sampleOpeners.length)];
  return `${opener}

${contentType}
For: ${businessType}
Voice: ${tone}

${topic || "Share the idea, offer, event, or product you want to promote."}

Caption:
A clean, confident way to bring this moment to life — crafted to feel polished, modern, and ready for the right audience.

Hook options:
1. A better way to say it.
2. Simple, polished, ready to post.
3. Make the moment feel premium.

CTA:
Save this, share it, or send us a message to learn more.`;
}

export default function Page() {
  const [businessType, setBusinessType] = useState("Luxury Local Business");
  const [tone, setTone] = useState("Refined");
  const [topic, setTopic] = useState("A new service, product, offer, or brand moment");
  const [contentType, setContentType] = useState("Instagram caption + Reel hook");
  const [caption, setCaption] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setCaption(makePreviewContent({ businessType, tone, topic, contentType }));
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-neutral-950">
      <section className="relative overflow-hidden px-6 py-7 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.06),transparent_32%),linear-gradient(to_bottom,#ffffff,#f7f5f0)]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-sm text-white">B</div>
            Brandora AI
          </div>
          <div className="hidden items-center gap-7 text-sm text-neutral-500 md:flex">
            <a href="#features" className="hover:text-neutral-950">Features</a>
            <a href="#pricing" className="hover:text-neutral-950">Pricing</a>
            <a href="#demo" className="hover:text-neutral-950">Studio</a>
          </div>
          <Button className="bg-neutral-950 px-5 py-2.5 text-sm text-white hover:bg-neutral-800">Start free</Button>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-neutral-500 shadow-sm">
              Private AI content studio
            </div>
            <h1 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Modern content, made simple.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 md:text-lg">
              Brandora turns one idea into polished captions, hooks, ads, emails, and campaigns for any brand.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button className="bg-neutral-950 px-6 py-3 text-sm text-white hover:bg-neutral-800">Try the studio</Button>
              <Button className="border border-black/10 bg-white px-6 py-3 text-sm text-neutral-950 hover:bg-neutral-100">View plans</Button>
            </div>
          </div>

          <div id="demo" className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-2xl shadow-neutral-300/40 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Premium workspace</p>
                <h2 className="mt-1 text-xl font-medium tracking-tight text-neutral-950">Content Studio</h2>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm text-white">B</div>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-neutral-500">Brand category</span>
                <select value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-neutral-950 outline-none">
                  {niches.map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-neutral-500">Voice</span>
                  <select value={tone} onChange={(e) => setTone(e.target.value)} className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-neutral-950 outline-none">
                    {tones.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-neutral-500">Output</span>
                  <select value={contentType} onChange={(e) => setContentType(e.target.value)} className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-neutral-950 outline-none">
                    <option>Instagram caption + Reel hook</option>
                    <option>Weekly content calendar</option>
                    <option>Facebook post</option>
                    <option>LinkedIn post</option>
                    <option>Email promo</option>
                    <option>Ad copy</option>
                    <option>Hashtag set</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm text-neutral-500">Idea</span>
                <textarea value={topic} onChange={(e) => setTopic(e.target.value)} rows={4} className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-neutral-950 outline-none" />
              </label>

              <Button onClick={handleGenerate} className="w-full rounded-2xl bg-neutral-950 py-4 text-sm text-white hover:bg-neutral-800">
                {isGenerating ? "Generating..." : "Generate"}
              </Button>

              {caption && (
                <div className="rounded-2xl border border-black/10 bg-[#faf9f6] p-5 text-neutral-800">
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-neutral-400">Preview output</p>
                  <p className="whitespace-pre-line text-sm leading-7">{caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Features</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">Everything your brand needs to post well.</h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["Captions", "Polished posts for every platform."],
              ["Hooks", "Short lines built to stop the scroll."],
              ["Campaigns", "Turn one idea into a full content plan."],
            ].map((feature) => (
              <div key={feature[0]} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
                <h3 className="mb-2 text-lg font-medium text-neutral-950">{feature[0]}</h3>
                <p className="text-sm leading-6 text-neutral-500">{feature[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Pricing</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">Simple plans.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Starter", "$19", ["50 generations", "Captions + hooks", "Saved history"]],
              ["Pro", "$49", ["250 generations", "Calendars", "More brand types"]],
              ["Agency", "$99", ["1,000 generations", "Client workspaces", "Campaigns"]],
            ].map((plan) => (
              <div key={plan[0]} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-medium text-neutral-950">{plan[0]}</h3>
                <div className="mt-4 text-4xl font-medium tracking-tight text-neutral-950">{plan[1]}<span className="text-sm font-normal text-neutral-400">/mo</span></div>
                <div className="mt-6 space-y-3">
                  {plan[2].map((item) => <div key={item} className="text-sm text-neutral-500">✓ {item}</div>)}
                </div>
                <Button className="mt-7 w-full rounded-2xl bg-neutral-950 py-3 text-sm text-white hover:bg-neutral-800">Choose plan</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-9 text-center text-sm text-neutral-400 md:px-12 lg:px-20">
        © 2026 Brandora AI
      </footer>
    </div>
  );
}
