import { Link } from "react-router-dom";
import cookingTeam from "@/assets/cooking-team.jpg";
import leafService from "@/assets/gallery-leaf-service.jpg";
import heroFeast from "@/assets/hero-feast.jpg";
import founderImage from "@/assets/founder.png";
import proprietorImage from "@/assets/proprietor.png";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { MangoLeafDivider } from "@/components/common/Motif";
import { btnPrimary } from "@/components/common/buttons";
import { site } from "@/data/siteData";

const pillars = [
  {
    title: "Who We Are",
    body: "Sri Kousalya Catering & Cooking Services is a family-run catering business based in Dabagardens, Visakhapatnam, cooking traditional Andhra food for weddings, poojas and family celebrations.",
  },
  {
    title: "Our Approach",
    body: "We start with your guest list and your family's taste, then build a menu around it — never a fixed package forced onto an event.",
  },
  {
    title: "Food Philosophy",
    body: "Andhra food is about balance: the heat of a pachadi against the calm of pappu, the sweet served before the meal begins. We cook to keep that balance.",
  },
  {
    title: "Preparation",
    body: "Ingredients are bought fresh for each function and cooked in traditional proportions, on site where the venue allows.",
  },
  {
    title: "Hygiene",
    body: "Clean handling through preparation, transport and serving, with covered vessels and trained staff.",
  },
  {
    title: "Service",
    body: "Our serving team keeps the rounds moving so every guest is served hot food at the right time.",
  },
];

export function About() {
  return (
    <>
      <PageHero
        te="మా కథ"
        title="Our Food. Our Tradition."
        intro={`Cooking for families across ${site.city} — one celebration at a time.`}
        image={cookingTeam}
        alt="Catering cooks preparing food in large brass vessels"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark dark:text-gold mb-5 self-start">
              <span className="te font-normal">మా మూలాలు</span>
              <span className="size-1 rounded-full bg-gold/60" aria-hidden="true" />
              <span>Our Heritage</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Rooted in <span className="text-gold italic font-serif relative inline-block">Indupalli<svg className="absolute -bottom-1.5 left-0 w-full h-2 text-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" fill="none"/></svg></span>
            </h2>
            
            <div className="rule-gold my-6 sm:my-8 max-w-[8rem]" />
            
            <div className="space-y-5 text-base sm:text-[1.05rem] leading-relaxed text-muted-foreground">
              <p>
                <span className="text-lg sm:text-xl text-foreground font-semibold font-serif italic pr-1">Some flavours begin with a recipe. Ours begins with a family legacy.</span> 
                Our journey started in Indupalli, Krishna District, founded by the late <strong className="text-foreground font-semibold">Sri B. Kasulu</strong>, whose passion for authentic Telugu cuisine laid the foundation of our catering business.
              </p>
              <div className="pl-4 border-l-2 border-gold/50 bg-gradient-to-r from-gold/5 to-transparent py-3 pr-2 rounded-r-lg relative">
                <p className="italic text-foreground/90 font-serif text-[1.05rem]">
                  &ldquo;Today, I am proud to carry my father's legacy forward. Operating from Dabagardens, Visakhapatnam, our team honors his unwavering commitment to quality, authentic taste, and genuine hospitality in every wedding, pooja, and celebration we serve.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-6 sm:w-10 bg-gold/60" />
                  <div>
                    <p className="font-display text-base sm:text-lg font-bold text-foreground leading-none">Sri B. Nageshwara Rao</p>
                    <p className="text-gold mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">Managing Proprietor</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal className="relative mt-12 lg:mt-0 lg:ml-8 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] mx-auto">
              
              {/* Decorative Gold Frame Outline */}
              <div className="absolute -top-4 -right-4 w-[60%] h-[65%] rounded-3xl border-2 border-gold/40 z-0 hidden sm:block transition-transform duration-700 hover:scale-105" />
              <div className="absolute -bottom-4 -left-4 w-[55%] h-[60%] rounded-3xl border-2 border-gold/40 z-0 hidden sm:block transition-transform duration-700 hover:scale-105" />
              
              {/* Founder Image (Top Left) */}
              <div className="absolute top-0 left-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-gold/20 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(212,175,55,0.2)] z-10 group bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-95" />
                <img
                    src={founderImage}
                    alt="Late Sri B. Kasulu, Founder"
                    className="w-full h-full object-cover sepia-[30%] transition-all duration-1000 group-hover:scale-110 group-hover:sepia-0"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-white font-display font-bold text-sm sm:text-lg lg:text-xl leading-tight drop-shadow-md">Late Sri B. Kasulu</p>
                  <p className="text-gold mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest drop-shadow-md">Founder</p>
                </div>
              </div>

              {/* Brother/Proprietor Image (Bottom Right) */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)] border-[6px] border-card transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(212,175,55,0.25)] z-20 group bg-card">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-95" />
                <img
                    src={proprietorImage}
                    alt="Sri B. Nageshwara Rao, Proprietor"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-white font-display font-bold text-sm sm:text-lg lg:text-xl leading-tight drop-shadow-md">Sri B. Nageshwara Rao</p>
                  <p className="text-gold mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest drop-shadow-md">Proprietor</p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

        <MangoLeafDivider className="my-16" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 60}>
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-forest-deep">
        <img
          src={heroFeast}
          alt=""
          loading="lazy"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="te text-lg leading-relaxed text-gold-soft sm:text-2xl">
            &ldquo;మీ వేడుక... మా బాధ్యత&rdquo;
          </p>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Your celebration, our responsibility.
          </p>
          <Link to="/quote" className={`${btnPrimary} mt-8 bg-gold text-accent-foreground`}>
            Request A Quote
          </Link>
        </div>
      </section>
    </>
  );
}
