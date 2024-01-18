import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <h2>Navbar from main</h2>

                {children}
            </body>
        </html>
    )
}
