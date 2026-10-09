'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { ArrowLeft, Save } from 'lucide-react';
export default function UpdateProfile() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (session?.user?.name) setName(session.user.name);
    if (!isPending && !session) router.replace('/signin');
  }, [session, isPending, router]);
  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const r = await authClient.updateUser({ name });
      if (r.error) {
        toast.error(r.error.message || 'তথ্য আপডেট হয়নি');
        return;
      }
      toast.success('প্রোফাইল আপডেট হয়েছে');
      router.push('/profile');
    } catch {
      toast.error('আপডেট করা যায়নি');
    } finally {
      setBusy(false);
    }
  }
  if (isPending || !session)
    return <div className="loading-page">লোড হচ্ছে…</div>;
  return (
    <section className="wrap inner-page">
      <Link href="/profile" className="back-link">
        <ArrowLeft size={16} /> প্রোফাইলে ফিরুন
      </Link>
      <div className="profile-card update-card">
        <span className="eyebrow-text">অ্যাকাউন্ট সেটিংস</span>
        <h1>তথ্য আপডেট করুন</h1>
        <p>আপনার প্রোফাইলের নাম পরিবর্তন করুন।</p>
        <form onSubmit={save}>
          <label htmlFor="name">আপনার নাম</label>
          <input
            id="name"
            className="text-input"
            value={name}
            onChange={e => setName(e.target.value)}
            minLength={2}
            required
          />
          <button className="btn auth-submit" disabled={busy}>
            <Save size={17} />
            {busy ? 'সংরক্ষণ হচ্ছে…' : 'তথ্য আপডেট করুন'}
          </button>
        </form>
      </div>
    </section>
  );
}
