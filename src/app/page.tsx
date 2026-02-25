import { db } from "@/db";
import { products } from "@/db/schema";
import { ProductList } from "@/components/product-list";

export default async function HomePage() {
  const allProducts = await db.select().from(products);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Nike Store
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the latest Nike products
        </p>
      </div>

      {allProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found. Run the seed script to add sample products.
        </p>
      ) : (
        <ProductList products={allProducts} />
      )}
    </main>
  );
}
