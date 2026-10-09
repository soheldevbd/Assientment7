'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { ArrowLeft, LogOut, UserRound, Settings } from 'lucide-react';
export default function Profile() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!isPending && !session) router.replace('/signin');
  }, [isPending, session, router]);
  if (isPending || !session)
    return <div className="loading-page">অ্যাকাউন্টের তথ্য লোড হচ্ছে…</div>;
  const user = session.user;
  return (
    <section className="wrap inner-page profile-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} /> হোম পেজ
      </Link>
      <div className="profile-card">
        <div className="profile-avatar">
          <UserRound size={32} />
        </div>
        <span className="eyebrow-text">আপনার অ্যাকাউন্ট</span>
        <h1>আমার প্রোফাইল</h1>
        <p>বাজার দর-এ আপনার অ্যাকাউন্টের তথ্য দেখুন ও আপডেট করুন।</p>
        <div className="profile-details">
          <div>
            <span>নাম</span>
            <b>{user.name || 'নাম যোগ করা হয়নি'}</b>
          </div>
          <div>
            <span>ইমেইল</span>
            <b>{user.email}</b>
          </div>
        </div>
        <div className="profile-actions">
          <Link href="/profile/update" className="btn">
            <Settings size={17} /> তথ্য আপডেট করুন
          </Link>
          <button
            className="btn btn-outline"
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              await authClient.signOut();
              toast.success('সাইন আউট হয়েছে');
              router.push('/');
            }}
          >
            <LogOut size={17} /> সাইন আউট
          </button>
        </div>
      </div>
    </section>
  );
}
