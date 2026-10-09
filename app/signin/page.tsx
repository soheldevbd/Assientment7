'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { ArrowLeft, LockKeyhole, Mail } from 'lucide-react';
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const r = await authClient.signIn.email({ email, password });
      if (r.error) {
        toast.error(r.error.message || 'সাইন ইন করা যায়নি');
        return;
      }
      toast.success('সফলভাবে সাইন ইন হয়েছে');
      router.push('/profile');
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
          <span className="auth-art-emoji">🧺</span>
          <h2>
            স্মার্ট বাজারের
            <br />
            শুরু এখানেই।
          </h2>
          <p>দাম জানুন, তুলনা করুন, সাশ্রয় করুন।</p>
        </div>
        <small>আপনার প্রতিদিনের বাজার সঙ্গী</small>
      </div>
      <div className="auth-form-side">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> হোম পেজ
        </Link>
        <div className="auth-form">
          <span className="form-icon">
            <LockKeyhole />
          </span>
          <span className="eyebrow-text">আবার স্বাগতম</span>
          <h1>সাইন ইন করুন</h1>
          <p>আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন।</p>
          <form onSubmit={submit}>
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
                placeholder="আপনার পাসওয়ার্ড"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <button className="btn auth-submit" disabled={busy}>
              {busy ? 'অপেক্ষা করুন…' : 'সাইন ইন করুন'} <span>→</span>
            </button>
          </form>
          <div className="auth-divider">
            <span />
            অথবা
            <span />
          </div>
          <div className="social-buttons">
            <button
              onClick={async () => {
                const r = await authClient.signIn.social({
                  provider: 'google',
                  callbackURL: '/profile',
                });
                if (r.error) toast.error('Google login সেটআপ করা হয়নি');
              }}
            >
              G Google দিয়ে চালিয়ে যান
            </button>
            <button
              onClick={async () => {
                const r = await authClient.signIn.social({
                  provider: 'github',
                  callbackURL: '/profile',
                });
                if (r.error) toast.error('GitHub login সেটআপ করা হয়নি');
              }}
            >
              ⌘ GitHub দিয়ে চালিয়ে যান
            </button>
          </div>
          <p className="auth-switch">
            অ্যাকাউন্ট নেই? <Link href="/signup">নতুন অ্যাকাউন্ট খুলুন</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
