import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <a className="navbar-brand" href="#">Context & Router</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    {/* <Link to="/home" className="nav-link active">Home</Link> */}
                    <NavLink to="/home" className={ ({isActive}) => {
                        return isActive ? 'nav-link active' : 'nav-link'
                    }}>Home</NavLink>
                </li>
                <li className="nav-item">
                    {/* <Link to="/about" className="nav-link">About</Link> */}
                    <NavLink to="/about" className={ ({isActive}) => {
                        return isActive ? 'nav-link active' : 'nav-link'
                    }}>About</NavLink>
                </li>
                <li className="nav-item">
                    {/* <Link to="/login" className="nav-link">Login</Link> */}
                    <NavLink to="/login" className={ ({isActive}) => {
                        return isActive ? 'nav-link active' : 'nav-link'
                    }}>Login</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}
