import Image from "next/image";

interface CardProps {
  /** Product image path from /public */
  image: string;
  /** Product name */
  title: string;
  /** Short product description */
  description?: string;
  /** Price in dollars */
  price: number;
  /** Category label, e.g. "Men's Shoes" */
  category?: string;
  /** Optional badge text, e.g. "Best Seller" */
  badge?: string;
  /** Badge color variant */
  badgeColor?: "red" | "green" | "orange";
  /** Number of color options available */
  colorCount?: number;
}

export default function Card({
  image,
  title,
  description,
  price,
  category,
  badge,
  badgeColor = "red",
  colorCount,
}: CardProps) {
  const badgeColorMap: Record<string, string> = {
    red: "text-red",
    green: "text-green",
    orange: "text-orange",
  };

  return (
    <div className="group flex w-full flex-col">
      {/* Image container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-light-200">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badge && (
          <span
            className={`absolute left-3 top-3 text-caption font-[var(--text-caption--font-weight)] leading-[var(--text-caption--line-height)] ${badgeColorMap[badgeColor]}`}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="mt-3 flex flex-col gap-1">
        <h3 className="text-body font-[var(--text-body-medium--font-weight)] leading-[var(--text-body-medium--line-height)] text-dark-900 line-clamp-1">
          {title}
        </h3>

        {category && (
          <p className="text-body leading-[var(--text-body--line-height)] text-dark-700">
            {category}
          </p>
        )}

        {description && (
          <p className="text-body leading-[var(--text-body--line-height)] text-dark-700 line-clamp-2">
            {description}
          </p>
        )}

        {colorCount !== undefined && colorCount > 0 && (
          <p className="text-body leading-[var(--text-body--line-height)] text-dark-700">
            {colorCount} {colorCount === 1 ? "Colour" : "Colours"}
          </p>
        )}

        <p className="mt-1 text-body font-[var(--text-body-medium--font-weight)] leading-[var(--text-body-medium--line-height)] text-dark-900">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
