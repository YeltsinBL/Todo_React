export function TwitterFollowCard ( {formattedUserName, formatUserName, userName , name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`
    return (
        <article className='tw-followCard'>
            <header className='ts-followCard-header'>
                <img className='tw-followCard-avatar'
                src={imageSrc} alt="El avatar de Yeltsin" />
                <div className='tw-followCard-info'>
                    <strong> {name}</strong>
                    <span
                    className='tw-followCard-infoUserName'>{formatUserName(userName)} {formattedUserName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>{isFollowing?'Unfollowing':'Follow'}</button>
            </aside>
        </article>
    )
}
