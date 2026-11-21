import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' });

export const metadata: Metadata = {
  title: 'Ravish M K — Electrical Engineering Student',
  description:
    'Electrical engineering student specializing in PCB design, embedded systems, and power electronics. Explore my 3D portfolio of circuits, projects, and hardware builds.',
  openGraph: {
    title: 'Aria Chen — Electrical Engineering Student',
    description: 'PCB design • Embedded Systems • Power Electronics',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
