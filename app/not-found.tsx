import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function NotFound() {
  return (
    <div className="empty-state full-empty">
      <span>🔎</span>
      <h1>পেজটি খুঁজে পাওয়া যায়নি</h1>
      <p>লিংকটি ভুল হতে পারে অথবা পেজটি সরানো হয়েছে।</p>
      <Link href="/" className="btn">
        হোম পেজে ফিরে যান <ArrowRight size={16} />
      </Link>
    </div>
  );
}
