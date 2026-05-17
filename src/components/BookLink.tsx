'use client';

import { useCallback, type MouseEvent, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BOOK_CTA } from '@/lib/constants';

const CALENDLY_PAGES = ['/', '/contact'];

function scrollToCalendly(): boolean {
  const el = document.getElementById('calendly');
  if (!el) return false;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

function retryScrollToCalendly(attempts = 20, delayMs = 100) {
  if (scrollToCalendly()) return;
  if (attempts <= 0) return;
  setTimeout(() => retryScrollToCalendly(attempts - 1, delayMs), delayMs);
}

type BookLinkProps = {
  className?: string;
  children?: ReactNode;
};

export default function BookLink({ className, children = BOOK_CTA }: BookLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (CALENDLY_PAGES.includes(pathname)) {
        if (!scrollToCalendly()) retryScrollToCalendly();
        return;
      }

      router.push('/#calendly');
      retryScrollToCalendly(30, 150);
    },
    [pathname, router],
  );

  return (
    <a href="/#calendly" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
