'use client';
import { useMemo, useState } from 'react';
import { ArrowDownUp } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/lib/products';

type SortMode = 'default' | 'price-asc' | 'price-desc' | 'change-asc' | 'change-desc' | 'name';
export default function SortableProducts({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortMode>('default');
  const sorted = useMemo(() => {
    const copy = [...products];
    switch (sort) {
      case 'price-asc': return copy.sort((a, b) => a.price - b.price);
      case 'price-desc': return copy.sort((a, b) => b.price - a.price);
      case 'change-asc': return copy.sort((a, b) => a.change - b.change);
      case 'change-desc': return copy.sort((a, b) => b.change - a.change);
      case 'name': return copy.sort((a, b) => a.name.localeCompare(b.name, 'bn'));
      default: return copy;
    }
  }, [products, sort]);
  return <>
    <div className="sort-toolbar">
      <label htmlFor="product-sort"><ArrowDownUp size={16} /> দাম অনুযায়ী সাজান</label>
      <select id="product-sort" value={sort} onChange={e => setSort(e.target.value as SortMode)}>
        <option value="default">ডিফল্ট ক্রম</option>
        <option value="price-asc">দাম: কম থেকে বেশি</option>
        <option value="price-desc">দাম: বেশি থেকে কম</option>
        <option value="change-asc">দাম কমার হার: বেশি আগে</option>
        <option value="change-desc">দাম বাড়ার হার: বেশি আগে</option>
        <option value="name">পণ্যের নাম অনুযায়ী</option>
      </select>
      <span className="sort-count">{sorted.length.toLocaleString('bn-BD')}টি পণ্য</span>
    </div>
    <div className="product-grid">{sorted.map(p => <ProductCard key={p.id} product={p} />)}</div>
  </>;
}
