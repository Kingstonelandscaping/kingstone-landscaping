'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import BookLink from '@/components/BookLink';
import StoneBackground from '@/components/brand/StoneBackground';
import ShardBurst from '@/components/brand/ShardBurst';
import GoldDivider from '@/components/brand/GoldDivider';
import { COMPANY, PHONE_SMS_HREF, PHONE_TEL_HREF } from '@/lib/constants';

export default function HomeHero() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="section-dark relative py-16 md:py-24 overflow-hidden min-h-[85vh] flex items-center">
      <StoneBackground showGrid />
      <ShardBurst />
      <div className="container-custom relative z-10 w-full">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <motion.div
              initial={reduceMotion ? {} : { scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-2xl scale-150 pointer-events-none" />
              <BrandLogo size="hero" priority className="relative z-10 ring-4 ring-gold/40" />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gold font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3"
          >
            Lawn Care &amp; Landscaping · North Georgia
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-foreground text-balance"
          >
            A Sharper Yard. More Curb Appeal. Less Stress.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted mb-2 max-w-2xl mx-auto"
          >
            {COMPANY.name}, formerly {COMPANY.formerName} — premium lawn care and landscaping in
            Gainesville, Cumming, Alpharetta, and surrounding North Georgia.
          </motion.p>

          <motion.div variants={itemVariants}>
            <GoldDivider className="mb-6" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <span className="trust-chip">Free estimates</span>
            <span className="trust-chip">No contracts</span>
            <span className="trust-chip">Same trusted crew</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookLink className="btn-book text-lg font-semibold px-8 w-full sm:w-auto" />
            <Link
              href="/services"
              className="btn-services text-lg font-semibold px-8 w-full sm:w-auto text-center"
            >
              View Services
            </Link>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-sm text-muted flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
          >
            <span>
              Prefer to call?{' '}
              <a href={PHONE_TEL_HREF} className="text-gold hover:underline">
                {COMPANY.phoneDisplayShort}
              </a>
            </span>
            <span className="hidden sm:inline text-muted/60" aria-hidden>
              ·
            </span>
            <a
              href={PHONE_SMS_HREF}
              className="inline-flex items-center gap-1.5 text-gold hover:underline min-h-[44px] sm:min-h-0"
            >
              <MessageSquare size={16} aria-hidden />
              Text us
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
