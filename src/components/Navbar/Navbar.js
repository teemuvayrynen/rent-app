import './navbar.css'

function Navbar() {
    return (
    <div className="navbar">
        <h2 className="application-name">FindAp</h2>
        <div className="menu-items">
            <ul>
                <li className="menu-item">Vuokralaiselle</li>
                <li className="menu-item">Vuokranantajalle</li>
                <li className="menu-item">Tietoja meistä</li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar;