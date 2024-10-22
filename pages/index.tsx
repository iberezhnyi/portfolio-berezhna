import { FC } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/components/Home'

const Portfolio: FC = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>

      <Footer />
    </>
  )
}

export default Portfolio
