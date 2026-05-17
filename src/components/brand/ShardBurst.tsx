'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/cn';

interface ShardBurstProps {
  className?: string;
  intensity?: 'full' | 'light';
}

const shards = [
  { x: -12, y: 20, rotate: -15, delay: 0, size: 48 },
  { x: -8, y: 45, rotate: 8, delay: 0.1, size: 36 },
  { x: -18, y: 65, rotate: -22, delay: 0.2, size: 42 },
  { x: 5, y: 30, rotate: 12, delay: 0.15, size: 32 },
];

export default function ShardBurst({ className, intensity = 'full' }: ShardBurstProps) {
  const reduceMotion = useReducedMotion();
  const opacity = intensity === 'light' ? 0.5 : 0.85;

  if (reduceMotion) {
    return (
      <div
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 w-32 h-48 opacity-40 pointer-events-none',
          className
        )}
        aria-hidden
      >
        <Image
          src="/icons/shard-sprite.svg"
          alt=""
          width={128}
          height={192}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'absolute left-0 top-0 bottom-0 w-1/3 max-w-xs overflow-visible pointer-events-none',
        className
      )}
      aria-hidden
    >
      {shards.map((shard, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${shard.x}%`, top: `${shard.y}%` }}
          initial={{ opacity: 0, x: -40, rotate: shard.rotate - 20 }}
          animate={{
            opacity,
            x: 0,
            rotate: shard.rotate,
          }}
          transition={{
            duration: 0.8,
            delay: shard.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/icons/shard-sprite.svg"
              alt=""
              width={shard.size}
              height={shard.size}
              className="object-contain drop-shadow-lg"
              style={{ filter: 'brightness(0.9)' }}
            />
          </motion.div>
        </motion.div>
      ))}
      {/* Gold spark trails */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-1 h-8 rounded-full bg-gradient-to-b from-gold to-transparent"
          style={{ left: `${15 + i * 8}%`, top: `${35 + i * 15}%` }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
