import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatAt = (userName) =>`@${userName}`
    const formattedUN = <span>@yeltsinbl25</span>
    return (
        <section className='App'>
            <TwitterFollowCard formattedUserName={formattedUN} formatUserName={formatAt} userName="yeltsinbl" isFollowing>
                <h1>YeltsinBL</h1>  
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatAt} userName="yeltsinbl" isFollowing={false}>
                YeltsinBL
            </TwitterFollowCard>
        </section>
    )
}