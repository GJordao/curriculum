import { Inter } from 'next/font/google'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{ display: 'flex', flexDirection: 'column', flex: 1, margin: 0 }} className={inter.className}>
      <body style={{ display: 'flex', flexDirection: 'column', flex: 1, margin: 0 }}>{children}</body>
    </html>
  );
}
