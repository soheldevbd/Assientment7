import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getProducts, categories, money } from '@/lib/products';
export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string }>;
}) {
  const { slug } = await params;
  const { sort = 'default' } = await searchParams;
  const category = categories.find(c => c.slug === slug);
  if (!category) notFound();
  let products = (await getProducts()).filter(p => p.category === slug);
  if (sort === 'low') products.sort((a, b) => a.price - b.price);
  if (sort === 'high') products.sort((a, b) => b.price - a.price);
  return (
    <section className="wrap inner-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} /> হোম পেজ
      </Link>
      <div className="page-heading">
        <div className="big-category-emoji">{category.emoji}</div>
        <div>
          <span className="eyebrow-text">বিভাগ অনুযায়ী বাজারদর</span>
          <h1>{category.name}</h1>
          <p>এই বিভাগের পণ্যের আজকের আনুমানিক দাম ও পরিবর্তন দেখুন।</p>
        </div>
      </div>
      <div className="list-toolbar">
        <span>{money(products.length)}টি পণ্য পাওয়া গেছে</span>
        <form>
          <label htmlFor="sort">
            <SlidersHorizontal size={15} /> সাজান
          </label>
          <select id="sort" name="sort" defaultValue={sort}>
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
          <button className="sort-submit" type="submit">
            প্রয়োগ
          </button>
        </form>
      </div>
      {products.length ? (
        <div className="product-grid">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>🧺</span>
          <h2>এই বিভাগে পণ্য পাওয়া যায়নি</h2>
          <p>অন্য বিভাগ বেছে নিন অথবা হোম পেজে ফিরে যান।</p>
          <Link href="/" className="btn">
            হোম পেজে ফিরে যান <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </section>
  );
}
