import type { Metadata } from 'next';
// @ts-ignore - CSS side-effect imports are normally provided by Next.js typings.
import './globals.css';
import Header from '@/components/Header';
import ToastProvider from '@/components/ToastProvider';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'বাজার দর — প্রতিদিনের বাজারদর এক নজরে',
  description: 'বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর এক নজরে দেখুন।',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <div className="wrap footer-inner">
            <div>
              <Link href="/" className="footer-brand">
                🛒 বাজার দর
              </Link>
              <p>প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
            </div>
            <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            <small>© ২০২৬ বাজার দর</small>
          </div>
        </footer>
        <ToastProvider />
      </body>
    </html>
  );
}
