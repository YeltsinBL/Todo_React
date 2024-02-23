import { useState } from "react"


export function TwitterFollowCard ( { children, formatUserName, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing? 'Siguiendo':'Seguir'
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
                    <span className="tw-followCard-text ">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
