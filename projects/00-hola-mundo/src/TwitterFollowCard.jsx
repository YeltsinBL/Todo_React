export function TwitterFollowCard ( { children, formattedUserName, formatUserName, userName, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`
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
                <button className='tw-followCard-button'>{isFollowing?'Unfollowing':'Seguir'}</button>
            </aside>
        </article>
    )
}
