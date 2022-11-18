import Navigation from './shared/Navbar';
import './../styles/globals.css';
import WordGenerator from './shared/WordGenerator';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body className='container'>
        <Navigation/>
        <WordGenerator/>
        {children}
      </body>
    </html>
  )
}
