import {Link} from "react-router-dom"
const Header2 = () => 
{
    return (
    <header>
      <nav>
        <div className="nav-container">
        <div className="logo">MyKart</div>
        <ul>
          {/* a tag reloads complete page which is why performance is bad */}
          {/* Link to does not reload the page it just replaces the componenet that we built*/}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>Contact</li>
          <li>Carrer</li>
        </ul>
        </div>
      </nav>
    </header>
  )
}
export default Header2
