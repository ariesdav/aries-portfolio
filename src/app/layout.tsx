import '../styles/globals.css';
import Navbar from '../components/Navbar'; 

export const metadata = {
  title: 'Aries Portfolio',
  description: 'Web portfolio built with Next.js 14 + Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
