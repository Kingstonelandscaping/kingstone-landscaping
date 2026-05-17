import Image from 'next/image';
import Link from 'next/link';
import {
  LucideIcon,
  Leaf,
  Scissors,
  Trees,
  Trash2,
  Mountain,
  Palette,
  Hammer,
  Droplets,
  Sprout,
  Building2,
} from 'lucide-react';
import BookLink from '@/components/BookLink';

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  icon: string;
  image?: string;
  priority?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Scissors,
  Trees,
  Trash2,
  Mountain,
  Palette,
  Hammer,
  Droplets,
  Sprout,
  Building2,
};

export default function ServiceCard({
  name,
  description,
  price,
  icon,
  image,
  priority = false,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Leaf;

  return (
    <article className="card card-hover flex flex-col h-full">
      {image ? (
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={image}
            alt={`${name} — Kingstone Landscaping Georgia`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2918]/70 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="aspect-[16/10] w-full bg-[#f5f1e8] flex items-center justify-center">
          <IconComponent size={40} className="text-[#e85d04]" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {!image && (
          <IconComponent size={28} className="text-[#e85d04] mb-3" aria-hidden />
        )}
        <h3 className="text-xl font-serif font-bold text-[#1b4d2e] mb-2">{name}</h3>
        <p className="text-[#6b7280] text-sm mb-4 flex-1">{description}</p>
        <div className="mb-4">
          <p className="text-2xl font-bold text-[#1b4d2e]">{price}</p>
          <p className="text-xs text-[#6b7280]">Starting at</p>
        </div>
        <BookLink className="btn-book text-sm w-full text-center" />
      </div>
    </article>
  );
}
