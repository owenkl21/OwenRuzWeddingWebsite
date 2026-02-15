import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Owen & Ruz Wedding',
  description: 'A modular wedding website starter built with Next.js, React, and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
