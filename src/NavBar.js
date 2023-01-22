export default function Navbar () {
    return <nav className="nav">
        <a href="/" className="site-title">Plantis</a>
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
            <a href="/pages/login">Login</a>
            </li>
        </ul>
    </nav>
}