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
      <body >
        <div className='container'>
            <Navigation/>
            {children}
        </div>
        {/* <WordGenerator/> */}
       
      </body>
    </html>
  )
}
