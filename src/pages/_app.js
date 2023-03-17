import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0c0c0c',
    }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}
