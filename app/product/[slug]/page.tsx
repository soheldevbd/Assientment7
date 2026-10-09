import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ArrowLeft, MapPin, TrendingUp, TrendingDown } from 'lucide-react';
import { getProducts, money } from '@/lib/products';
import ProtectedProduct from '@/components/ProtectedProduct';
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = (await getProducts()).find(p => p.slug === slug || p.id === slug);
  if (!p) notFound();
  return (
    <ProtectedProduct>
      <section className="wrap inner-page">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> হোম পেজে ফিরুন
        </Link>
        <div className="detail-hero">
          <div className="detail-emoji">{p.emoji}</div>
          <div className="detail-title">
            <span className="eyebrow-text">{p.categoryName}</span>
            <h1>{p.name}</h1>
            <p>{p.description}</p>
            <div className="detail-tags">
              <span>{p.categoryName}</span>
              <span>{p.unit}</span>
              <span
                className={
                  p.change > 0
                    ? 'tag-rise'
                    : p.change < 0
                      ? 'tag-fall'
                      : 'tag-flat'
                }
              >
                {p.change > 0 ? (
                  <TrendingUp size={14} />
                ) : p.change < 0 ? (
                  <TrendingDown size={14} />
                ) : null}
                {p.change > 0 ? '▲' : p.change < 0 ? '▼' : '—'}{' '}
                {money(Math.abs(p.change))}%
              </span>
            </div>
          </div>
          <div className="detail-current">
            <small>আজকের গড় দাম</small>
            <b>
              {money(p.price)} <small>টাকা</small>
            </b>
            <span>{p.unit}</span>
          </div>
        </div>
        <div className="price-stats">
          <div>
            <span>সর্বনিম্ন দাম</span>
            <b>{money(p.min)} ৳</b>
          </div>
          <div>
            <span>সর্বোচ্চ দাম</span>
            <b>{money(p.max)} ৳</b>
          </div>
          <div>
            <span>গড় বাজারদর</span>
            <b>{money(p.price)} ৳</b>
          </div>
        </div>
        <div className="market-table-wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow-text">বাজারভিত্তিক তুলনা</span>
              <h2>
                <MapPin size={21} /> বাজারভিত্তিক আজকের দাম
              </h2>
            </div>
            <span className="total-count">
              {money(p.markets.length || 2)}টি বাজার
            </span>
          </div>
          <div className="market-table">
            <div className="market-row market-header">
              <span>বাজারের নাম</span>
              <span>অবস্থান</span>
              <span>আজকের দাম</span>
            </div>
            {(p.markets.length
              ? p.markets
              : [
                  {
                    name: 'কারওয়ান বাজার',
                    price: p.price - 2,
                    location: 'ঢাকা',
                  },
                  {
                    name: 'মোহাম্মদপুর কৃষি মার্কেট',
                    price: p.price,
                    location: 'ঢাকা',
                  },
                  {
                    name: 'মিরপুর ১ বাজার',
                    price: p.price + 3,
                    location: 'ঢাকা',
                  },
                ]
            ).map((m, i) => (
              <div className="market-row" key={m.name}>
                <span>
                  <b>{m.name}</b>
                  {i === 0 && (
                    <small className="best-price">সাশ্রয়ী দাম</small>
                  )}
                </span>
                <span>{m.location}</span>
                <b>{money(m.price)} ৳</b>
              </div>
            ))}
          </div>
          <p className="disclaimer">
            * বাজারদরগুলো নমুনা/আনুমানিক তথ্য। কেনার আগে স্থানীয় বাজারে যাচাই
            করুন।
          </p>
        </div>
      </section>
    </ProtectedProduct>
  );
}
