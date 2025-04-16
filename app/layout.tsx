import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeComponent } from '@/luna/theme/ThemeComponent'
import { Quicksand } from 'next/font/google'
import '@/luna/styles/globals.css'
import Script from 'next/script'

const quicksand = Quicksand({
  weight: ['700', '600', '500', '400'],
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={quicksand.className}>
      <head>
        <meta property='og:title' content='Luna UI Kit' />

        <meta property='og:type' content='website' />

        <meta property='og:url' content='https://luna-ui-kit..com/' />

        <meta
          property='og:image:url'
          content='https://luna-ui-kit.com/cover.webp'
        />

        <meta
          property='og:description'
          content="This open-source UI Kit is built on MUI (Material Design 2), and it's here to make your life easier! Whether you're designing or coding, this kit gives you a solid, flexible foundation to create modern web apps without starting from scratch. It's all about keeping things consistent, scalable, and super customizable. Oh, and we're always adding more cool components, so keep an eye out for updates. There's more awesome stuff on the way."
        />

        <Script strategy='lazyOnload' id='clarity-script'>
          {`
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_PROJECT_ID}");
        `}
        </Script>
      </head>

      <body>
        <AppRouterCacheProvider>
          <ThemeComponent>{children}</ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
