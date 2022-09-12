import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './style.css'
export default function Nav() {
  return (
      <nav className="nav">
     
       
              <div className="navLinks">
                  <li className="navLinkContainer">
                  <CustomLink  to="/" className="navLinkItems">Today</CustomLink>
                  <CustomLink  to="/date" className="navLinkItems">Date</CustomLink>
                  <CustomLink  to="/random" className="navLinkItems">Random</CustomLink>
                  </li>
              </div>
              <div className="navTitle">Astronomy Picture of the Day</div>

          
     
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