import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeComponent } from '@/luna/theme/ThemeComponent'
import { Quicksand } from 'next/font/google'
import '@/luna/styles/globals.css'
import Clarity from '@microsoft/clarity'

Clarity.init(process.env.PROJECT_ID || '')

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
      </head>

      <body>
        <AppRouterCacheProvider>
          <ThemeComponent>{children}</ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
