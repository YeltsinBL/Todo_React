/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'yeltsinbl',
    name: 'YeltsinBL1',
    isFollowing: true
  },
  {
    userName: 'yeltsinbl',
    name: 'YeltsinBL2',
    isFollowing: false
  }
]

export function App () {
  const [name, setName] = useState('yeltsinbl')
  return (
    <section className='App'>
      {/* <TwitterFollowCard formattedUserName={formattedUN} formatUserName={formatAt} userName="yeltsinbl" initialIsFollowing>
                <h1>YeltsinBL1</h1>
            </TwitterFollowCard> */}
      {
                users.map(user => {
                  const { userName, name, isFollowing } = user
                  const formatAt = (userName) => `@${userName}`
                  // const formattedUN = <span>@yeltsinbl25</span>

                  return (
                    <TwitterFollowCard key={userName} formatUserName={formatAt} userName={userName} initialIsFollowing={isFollowing}>
                      {name}
                    </TwitterFollowCard>
                  )
                })
            }
      <button onClick={() => {
        setName('chemo')
      }}
      >{name}
      </button>
    </section>
  )
}
