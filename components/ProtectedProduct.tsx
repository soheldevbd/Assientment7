'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
export default function ProtectedProduct({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  useEffect(() => {
    if (!isPending && !session) router.replace('/signin');
  }, [isPending, session, router]);
  if (isPending || !session)
    return (
      <div className="loading-page">
        পণ্যের বিস্তারিত দেখতে সাইন ইন যাচাই হচ্ছে…
      </div>
    );
  return <>{children}</>;
}
