import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const sampleProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU accents.",
    price: 130.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx4duhfbmq/AIR+MAX+90.png",
    category: "Shoes",
    stock: 50,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: 115.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a8a998dd76ab/W+AIR+FORCE+1+%2707.png",
    category: "Shoes",
    stock: 75,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: 115.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcb3e4-e853-4df0-b1b4-4297842a9790/NIKE+DUNK+LOW+RETRO.png",
    category: "Shoes",
    stock: 60,
  },
  {
    name: "Nike Sportswear Tech Fleece Hoodie",
    description:
      "Engineered for lightweight warmth, the Tech Fleece Hoodie features a streamlined design perfect for layering.",
    price: 130.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a0a3c4-f1a8-4e2e-ba2e-8a5f5f5f5f5f/sportswear-tech-fleece-hoodie.png",
    category: "Apparel",
    stock: 40,
  },
  {
    name: "Nike Air Jordan 1 Retro High OG",
    description:
      "The Air Jordan 1 Retro High remakes the classic sneaker with new colors and fresh leather, staying true to the original.",
    price: 180.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b201f5a4-3187-4e47-8e4b-cbd4a3e8d78a/AIR+JORDAN+1+RETRO+HIGH+OG.png",
    category: "Shoes",
    stock: 30,
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive cushioning in the Pegasus provides an energized ride for everyday road running.",
    price: 140.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8edc965-1e6e-4e4e-8f5f-5f5f5f5f5f5f/pegasus-41-road-running-shoes.png",
    category: "Shoes",
    stock: 55,
  },
];

async function seed() {
  console.log("🌱 Seeding products...");
  await db.insert(products).values(sampleProducts);
  console.log("✅ Seeded", sampleProducts.length, "products successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
