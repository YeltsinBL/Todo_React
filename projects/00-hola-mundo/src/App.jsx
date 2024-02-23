import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const [name, setName] = useState('yeltsinbl')
    const formatAt = (userName) =>`@${userName}`
    const formattedUN = <span>@yeltsinbl25</span>
    return (
        <section className='App'>
            <TwitterFollowCard formattedUserName={formattedUN} formatUserName={formatAt} userName="yeltsinbl" initialIsFollowing>
                <h1>YeltsinBL1</h1>  
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatAt} userName="yeltsinbl" initialIsFollowing={false}>
                YeltsinBL2
            </TwitterFollowCard>
            <button onClick={() => {
                setName('chemo')
            }}>{name}</button>
        </section>
    )
}