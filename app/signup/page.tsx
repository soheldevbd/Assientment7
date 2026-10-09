'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { ArrowLeft, LockKeyhole, Mail, UserRound } from 'lucide-react';
export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const r = await authClient.signUp.email({ name, email, password });
      if (r.error) {
        toast.error(r.error.message || 'অ্যাকাউন্ট তৈরি করা যায়নি');
        return;
      }
      toast.success('অ্যাকাউন্ট তৈরি হয়েছে');
      router.push('/signin');
    } catch {
      toast.error('সার্ভারে সংযোগ করা যায়নি। সেটিংস যাচাই করুন।');
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="auth-layout">
      <div className="auth-art">
        <Link href="/" className="auth-brand">
          🛒 বাজার দর
        </Link>
        <div>
          <span className="auth-art-emoji">🥬</span>
          <h2>
            প্রতিদিনের বাজার
            <br />
            হোক আরও সহজ।
          </h2>
          <p>একটি অ্যাকাউন্টেই আপনার বাজারদরের সহকারী।</p>
        </div>
        <small>আপনার প্রতিদিনের বাজার সঙ্গী</small>
      </div>
      <div className="auth-form-side">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> হোম পেজ
        </Link>
        <div className="auth-form">
          <span className="form-icon">
            <UserRound />
          </span>
          <span className="eyebrow-text">আজই শুরু করুন</span>
          <h1>অ্যাকাউন্ট তৈরি করুন</h1>
          <p>কয়েকটি তথ্য দিলেই আপনার অ্যাকাউন্ট তৈরি হবে।</p>
          <form onSubmit={submit}>
            <label>আপনার নাম</label>
            <div className="input-wrap">
              <UserRound size={17} />
              <input
                placeholder="সম্পূর্ণ নাম"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                minLength={2}
              />
            </div>
            <label>ইমেইল ঠিকানা</label>
            <div className="input-wrap">
              <Mail size={17} />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <label>পাসওয়ার্ড</label>
            <div className="input-wrap">
              <LockKeyhole size={17} />
              <input
                type="password"
                placeholder="কমপক্ষে ৮ অক্ষর"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <button className="btn auth-submit" disabled={busy}>
              {busy ? 'অপেক্ষা করুন…' : 'অ্যাকাউন্ট তৈরি করুন'} <span>→</span>
            </button>
          </form>
          <p className="auth-switch">
            আগেই অ্যাকাউন্ট আছে? <Link href="/signin">সাইন ইন করুন</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
