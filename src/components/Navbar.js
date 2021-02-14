import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="site-name">Debrid status</div>
      <nav>
        <Link to="/real-debrid">Real Debrind</Link>
        <Link to="/all-debrid">All Debrind</Link>
      </nav>
    </div>
  );
}
 
export default Navbar;