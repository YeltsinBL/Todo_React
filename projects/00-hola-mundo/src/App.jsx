import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatAt = (userName) =>`@${userName}`
    const formattedUserName = <span>@yeltsinbl25</span>
    return (
        <section className='App'>
            <TwitterFollowCard formattedUserName={formattedUserName} formatUserName={formatAt} userName="yeltsinbl" name="YeltsinBL" isFollowing/>
            <TwitterFollowCard formatUserName={formatAt} userName="yeltsinbl" name="YeltsinBL" isFollowing={false} />
        </section>
    )
}