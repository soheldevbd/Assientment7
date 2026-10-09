import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  MapPin,
  Clock3,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import SortableProducts from '@/components/SortableProducts';
import { getProducts, categories, money } from '@/lib/products';
export default async function Home() {
  const products = await getProducts();
  const rising = [...products]
    .filter(p => p.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, 6);
  const falling = [...products]
    .filter(p => p.change < 0)
    .sort((a, b) => a.change - b.change)
    .slice(0, 6);
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> প্রতিদিনের বাজার, এবার হাতের
              মুঠোয়
            </div>
            <h1>
              বাজারের সঠিক দাম,
              <br />
              <em>সিদ্ধান্ত হোক সহজ।</em>
            </h1>
            <p>
              নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর জানুন এক জায়গায়। তুলনা
              করুন, পরিকল্পনা করুন, সাশ্রয়ী বাজার করুন।
            </p>
            <div className="hero-actions">
              <a className="btn" href="#সব-পণ্য">
                আজকের দাম দেখুন <ArrowRight size={17} />
              </a>
              <Link className="btn btn-outline" href="/category/sobji">
                বিভাগ ঘুরে দেখুন
              </Link>
            </div>
            <div className="hero-trust">
              <span>
                <ShieldCheck size={16} /> সহজ ও স্বচ্ছ তথ্য
              </span>
              <span>
                <MapPin size={16} /> বাজারভিত্তিক দাম
              </span>
              <span>
                <Clock3 size={16} /> নিয়মিত আপডেট
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <Image
                src="/bazar-hero.png"
                alt="তাজা সবজি ও নিত্যপ্রয়োজনীয় বাজার"
                fill
                priority
                className="hero-image"
                sizes="(max-width: 800px) 100vw, 48vw"
              />
            </div>
            <div className="floating-note note-top">
              <span className="note-icon">🥬</span>
              <span>
                <small>আজকের বাজার</small>
                <b>তাজা পণ্য, সঠিক দাম</b>
              </span>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-check">↘</span>
              <span>
                <small>দামের ওঠানামা</small>
                <b>এক নজরেই বুঝুন</b>
              </span>
            </div>
            <div className="hero-sparkle">✳</div>
          </div>
        </div>
      </section>
      <section className="wrap category-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow-text">ক্যাটাগরি অনুযায়ী</span>
            <h2>কী কিনবেন আজ?</h2>
          </div>
          <p>আপনার প্রয়োজনীয় পণ্যটি খুঁজে নিন দ্রুত।</p>
        </div>
        <div className="category-grid">
          {categories.map(c => (
            <Link
              href={`/category/${c.slug}`}
              key={c.slug}
              className="category-card"
            >
              <span>{c.emoji}</span>
              <b>{c.name}</b>
              <ArrowRight size={15} />
            </Link>
          ))}
        </div>
      </section>
      <section className="market-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <span className="eyebrow-text">দৈনিক বাজার আপডেট</span>
              <h2>
                <TrendingUp className="heading-icon green" /> আজ দাম বেড়েছে
              </h2>
            </div>
            <span className="section-chip up-chip">▲ দাম বৃদ্ধি</span>
          </div>
          <div className="product-grid">
            {rising.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="wrap market-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow-text">সাশ্রয়ের সুযোগ</span>
            <h2>
              <TrendingDown className="heading-icon red" /> আজ দাম কমেছে
            </h2>
          </div>
          <span className="section-chip down-chip">▼ দাম হ্রাস</span>
        </div>
        <div className="product-grid">
          {falling.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <section className="wrap all-products" id="সব-পণ্য">
        <div className="section-heading">
          <div>
            <span className="eyebrow-text">সম্পূর্ণ বাজার তালিকা</span>
            <h2>সব পণ্য, এক জায়গায়</h2>
            <p>নিত্যপ্রয়োজনীয় পণ্যের আনুমানিক খুচরা দাম দেখুন।</p>
          </div>
          <span className="total-count">{money(products.length)}টি পণ্য</span>
        </div>
        <SortableProducts products={products} />
        <div className="bottom-cta">
          <div>
            <b>আরও নির্দিষ্ট দামে খুঁজছেন?</b>
            <p>বিভাগ অনুযায়ী পণ্যের দাম তুলনা করুন।</p>
          </div>
          <Link className="btn btn-outline" href="/category/sobji">
            সব বিভাগ দেখুন <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
