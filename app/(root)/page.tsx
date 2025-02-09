import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalance from '@/components/TotalBalance';
import RightSidebar from '@/components/RightSidebar';
import { emit } from 'process';

const Home = () => {
  const loggedIn ={firstName: 'Anil', lastName:'Bijarniya', email:'anilbijarniya1047@gmail.com' };
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
        Recent Transactions
      </div>
       <RightSidebar 
       user={loggedIn}
       transactions={[]}
       banks={[{currentBalance:1235.5},{currentBalance:5000.45}]}
       />
    </section>
  )
}

export default Home
