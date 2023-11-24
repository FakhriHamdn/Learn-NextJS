import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// layout sebagai tata letak utama untuk semua file atau aplikasi
//  jadi pas server mengirimkan data nanti si root layout ini bakal ngubah ke html biasa yang siap ditampilakn di client side
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
