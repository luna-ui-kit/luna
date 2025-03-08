import ThemeComponent from '@/luna/theme/ThemeComponent'
import { Poppins } from 'next/font/google'
import './globals.css'

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
        <ThemeComponent>{children}</ThemeComponent>
      </body>
    </html>
  )
}
