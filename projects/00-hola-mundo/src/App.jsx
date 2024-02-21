import './App.css'

export function App () {
    return (
        <article className='tw-followCard'>
            <header className='ts-followCard-header'>
                <img className='tw-followCard-avatar'
                src="https://unavatar.io/yeltsinbl" alt="El avatar de Yeltsin" />
                <div className='tw-followCard-info'>
                    <strong> YeltsinBL</strong>
                    <span
                    className='tw-followCard-inforUserName'>@yeltsinbl</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}