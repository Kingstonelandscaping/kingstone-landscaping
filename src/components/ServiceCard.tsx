import Image from 'next/image';
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
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="aspect-[16/10] w-full bg-charcoal flex items-center justify-center">
          <IconComponent size={40} className="text-gold" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {!image && <IconComponent size={28} className="text-gold mb-3" aria-hidden />}
        <h3 className="text-xl font-serif font-bold text-gold mb-2">{name}</h3>
        <p className="text-muted text-sm mb-4 flex-1">{description}</p>
        <div className="mb-4">
          <p className="text-2xl font-bold text-gold-light">{price}</p>
          <p className="text-xs text-muted">Starting at</p>
        </div>
        <BookLink className="btn-book text-sm w-full text-center" />
      </div>
    </article>
  );
}
