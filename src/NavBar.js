export default function Navbar () {
    return <nav className="nav">
        <div className="container1">
        <a href="/" className="site-title">Plantis</a>
        <a href="/"><img src="https://cdn.discordapp.com/attachments/1066426699669057737/1066526497747243058/IMG_0391.png" height={100}/>
        </a></div>
        
        <ul>
            <li>
                <a href="/pages/info">Info</a>
            </li>
            <li>
                <a href="/pages/logpage">Logs</a>
            </li>
            <li>
            <a href="/pages/timetable">Timetable</a>
            </li>
            <li>
            <a href="/pages/login">Log In</a>
            </li>
        </ul>
    </nav>
}