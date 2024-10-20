import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { MenuHamburguer } from '@/components/Partials/MenuHamburguer'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import 'swiper/css/bundle'
import '../styles/index.scss'
import DialogPrivacityPolicy from '@/components/Dialogs/DialogPrivacityPolicy'
const poppins = Poppins({
  fallback: ['sans-serif'],
  weight: ['500', '600', '700'],
  subsets: ['latin'],
})
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Imperador Açaí',
  description: 'Os melhores produtos de açaí do Brasil',
  keywords: ['açaí', 'açaí no atacado', 'açaí no varejo'],
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-V7KJF6JS26`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-V7KJF6JS26');
            `,
          }}
        /> */}

        <link
          rel="stylesheet"
          href={`https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css`}
        />
        <script
          async
          src={`https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js`}
          crossOrigin="anonymous"
        />
        <meta name="google" content="notranslate" />
      </head>
      <body className={poppins.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Header />
        {children}
        <Footer />
        <MenuHamburguer />
        <Toaster
          toastOptions={{
            className: 'bg-zinc-500 text-white',
            style: {
              zIndex: 999999,
            },
          }}
        />
        <DialogPrivacityPolicy />
      </body>
    </html>
  )
}
