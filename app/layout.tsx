import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeComponent } from '@/luna/theme/ThemeComponent'
import { Poppins } from 'next/font/google'
import '@/luna/styles/globals.css'

const poppins = Poppins({
  weight: ['700', '600', '500', '400'],
  subsets: ['latin']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={poppins.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeComponent>{children}</ThemeComponent>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
