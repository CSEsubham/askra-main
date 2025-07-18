import React from 'react'
import Header from '../Header'
import BodyPage from './BodyPage'
import WhyAskra from './WhyAskra'
import Pricing from './Pricing'
import MeetTeam from './MeetTeam'
import Footer from '../Footer'

export default function HomeLayout() {
  return (
     <main className="overflow-y-hidden w-screen">
      <Header />
      <BodyPage />
      <WhyAskra />
      <Pricing />
      <MeetTeam />
     <Footer />
    </main>
  )
}
