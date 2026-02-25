import Card from "@/components/Card";

const sampleProducts = [
  {
    image: "/shoes/shoe-1.jpg",
    title: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    price: 135.0,
    badge: "Best Seller",
    badgeColor: "red" as const,
    colorCount: 1,
  },
  {
    image: "/shoes/shoe-2.webp",
    title: "Nike Air Max 90",
    category: "Men's Shoes",
    price: 130.0,
    badge: "New Arrival",
    badgeColor: "green" as const,
    colorCount: 3,
  },
  {
    image: "/shoes/shoe-3.webp",
    title: "Nike Huarache",
    category: "Women's Shoes",
    price: 120.0,
    colorCount: 5,
  },
  {
    image: "/shoes/shoe-4.webp",
    title: "Nike Air Max 95",
    category: "Men's Shoes",
    price: 175.0,
    badge: "Trending",
    badgeColor: "orange" as const,
    colorCount: 2,
  },
];

export default function Home() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-12 lg:px-12">
      <h1 className="text-heading-2 font-bold leading-[var(--text-heading-2--line-height)] text-dark-900 mb-8">
        Popular Right Now
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sampleProducts.map((product) => (
          <Card key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}