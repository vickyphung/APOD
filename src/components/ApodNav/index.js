import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './style.css'
export default function Nav() {
  return (
      <nav className="nav">
        <div className="navContent">
          <div className="navTitle">
          <h1>Astronomy Picture Of the Day</h1>
              <div className="navLinks">
                  <li className="navLinkContainer">
                  <CustomLink  to="/" className="navLinkItems">Today</CustomLink>
                  <CustomLink  to="/date" className="navLinkItems">Pick a Date</CustomLink>
                  <CustomLink  to="/random" className="navLinkItems">Random</CustomLink>
                  </li>
              </div>
          </div>
        </div>
      </nav>
  );
}

//useResolvedPath, provides an absolute path
//useMatch, finds path within directory

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className={isActive ? "active" : ""}>
      <Link className="listItem" to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}