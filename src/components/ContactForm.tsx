'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        setError(result.error || 'Failed to send. Please call (770) 330-9282.');
      }
    } catch {
      setError('Network error. Please call (770) 330-9282.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {isSubmitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
          Thank you! We&apos;ll contact you within 24 hours.
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      <input
        type="text"
        {...register('website')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="block font-semibold text-[#1B4D2E] mb-2">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4D2E]"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold text-[#1B4D2E] mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'Email is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4D2E]"
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block font-semibold text-[#1B4D2E] mb-2">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone', { required: 'Phone is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4D2E]"
          placeholder="(770) 330-9282"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block font-semibold text-[#1B4D2E] mb-2">
          Service Interested In
        </label>
        <select
          id="service"
          {...register('service')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4D2E]"
        >
          <option value="">Select a service</option>
          <option value="lawn-mowing">Lawn Mowing &amp; Maintenance</option>
          <option value="edging">Edging</option>
          <option value="bush-trimming">Bush Trimming &amp; Removal</option>
          <option value="yard-cleanup">Yard Cleanup</option>
          <option value="mulching">Mulching</option>
          <option value="landscape-design">Landscape Design</option>
          <option value="hardscaping">Hardscaping</option>
          <option value="irrigation">Irrigation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold text-[#1B4D2E] mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B4D2E]"
          placeholder="Tell us about your project..."
        />
      </div>

      <button type="submit" disabled={isLoading} className="btn-primary w-full font-semibold">
        {isLoading ? 'Sending...' : 'Request Free Estimate'}
      </button>

      <p className="text-xs text-gray-600 text-center">
        We respect your privacy. Your information will never be shared.
      </p>
    </form>
  );
}
