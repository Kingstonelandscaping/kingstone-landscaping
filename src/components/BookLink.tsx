'use client';

import { useCallback, type MouseEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BOOK_CTA, CALENDLY_URL } from '@/lib/constants';

const CALENDLY_SCROLL_PAGES = ['/', '/contact'];

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

  const useDirectCalendly =
    pathname.startsWith('/blog') || !CALENDLY_SCROLL_PAGES.includes(pathname);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (useDirectCalendly) return;

      e.preventDefault();

      if (CALENDLY_SCROLL_PAGES.includes(pathname)) {
        if (!scrollToCalendly()) retryScrollToCalendly();
        return;
      }

      router.push('/#calendly');
      retryScrollToCalendly(30, 150);
    },
    [pathname, router, useDirectCalendly],
  );

  if (useDirectCalendly) {
    return (
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href="/#calendly" className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
