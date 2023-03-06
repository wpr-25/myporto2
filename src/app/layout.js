import Footer from './component/Footer'
import Navbar from './component/Navbar'
import './globals.css'

export const metadata = {
  title: 'Portofolio2',
  description: 'Using Next JS & TailwindCss',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
