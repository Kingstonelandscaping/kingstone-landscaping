'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="font-semibold text-[#1B4D2E] text-base sm:text-lg min-w-0 pr-3">{question}</h3>
        <ChevronDown
          size={20}
          className={`text-[#D4AF37] transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <p className="text-gray-600 mt-3 animate-slideInUp text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
