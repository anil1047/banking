import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalance from '@/components/TotalBalance';

const Home = () => {
  const loggedIn ={firstName: 'Anil'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and mange your account and transactions"
          />
          <TotalBalance
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={15065}
          />
        </header>
      </div>
    </section>
  )
}

export default Home
