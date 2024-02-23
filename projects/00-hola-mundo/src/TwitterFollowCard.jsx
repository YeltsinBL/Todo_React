import { useState } from "react"


export function TwitterFollowCard ( { children, formattedUserName, formatUserName, userName}) {

    const [isFollowing, setIsFollowing] = useState(false)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing? 'Seguir':'Siguiendo'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                src={imageSrc} alt="El avatar de Yeltsin" />
                <div className='tw-followCard-info'>
                    {children}
                    <span
                    className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                {/* <button className='tw-followCard-button'>{isFollowing?'Unfollowing':'Seguir'}</button> */}
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
