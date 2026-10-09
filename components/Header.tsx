'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, UserRound, Menu, LogOut, CircleUserRound } from 'lucide-react';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { categories, fallbackProducts, money } from '@/lib/products';

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  async function handleSignOut() {
    try {
      await authClient.signOut({ fetchOptions: { onSuccess: () => { toast.success('সাইন আউট হয়েছে'); router.push('/'); router.refresh(); } } });
    } catch {
      toast.error('সাইন আউট করা যায়নি। আবার চেষ্টা করুন।');
    }
  }

  return <>
    <header className="site-header">
      <div className="topbar wrap">
        <Link href="/" className="brand"><span className="brand-icon">🛒</span><span><b>বাজার দর</b><small>শুক্রবার, ৯ অক্টোবর ২০২৬</small></span></Link>
        <nav className="main-nav"><Link href="/#সব-পণ্য">সব পণ্য</Link>{categories.slice(0,5).map(c=><Link className={path===`/category/${c.slug}`?'active':''} key={c.slug} href={`/category/${c.slug}`}>{c.name}</Link>)}</nav>
        <div className="header-actions">
          {!isPending && session ? <>
            <Link href="/profile" className="login-link"><CircleUserRound size={16}/>{session.user.name || 'আমার প্রোফাইল'}</Link>
            <button type="button" className="btn btn-small" onClick={handleSignOut}><LogOut size={15}/> সাইন আউট</button>
          </> : !isPending ? <>
            <Link href="/signin" className="login-link"><UserRound size={16}/> সাইন ইন</Link>
            <Link href="/signup" className="btn btn-small">সাইন আপ</Link>
          </> : <span className="login-link" aria-label="অ্যাকাউন্ট লোড হচ্ছে">লোড হচ্ছে…</span>}
        </div>
        <button className="mobile-menu" aria-label="মেনু"><Menu/></button>
      </div>
      <div className="category-strip"><div className="wrap strip-inner"><Search size={15}/><span>আজকের বাজারদর</span>{categories.map(c=><Link key={c.slug} href={`/category/${c.slug}`}>{c.emoji} {c.name}</Link>)}</div></div>
    </header>
    <div className="ticker"><div className="ticker-track">{[...fallbackProducts,...fallbackProducts].map((p,i)=><span key={`${p.id}-${i}`} className="ticker-item">{p.emoji} {p.name} <b>{money(p.price)}৳</b> <i className={p.change>0?'up':p.change<0?'down':'flat'}>{p.change>0?'▲':p.change<0?'▼':'—'} {money(Math.abs(p.change))}%</i></span>)}</div></div>
  </>;
}
