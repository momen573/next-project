// pages/index.js
import Link from 'next/link';


export default function Home() {
  return (
      <div style={{ padding: 20 }}>
        <h1>صفحه اصلی</h1>
        <p>به وب‌سایت ما خوش آمدید.</p>
        <Link href="/about">برو به صفحه درباره ما</Link>
      </div>
  );
}
