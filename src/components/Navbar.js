import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar h-16 shadow px-2 sm:px-0 ">
      <div className="container h-full flex items-center justify-between">
        <div className="site-name">
          <Link to="/" className="font-semibold text-red-500 text-3xl">
            Debrid Status
          </Link>
        </div>
        <nav>
          <Link to="/real-debrid" className="px-2 uppercase text-gray-600 hover:text-red-500">Real Debrid</Link>
          <Link to="/all-debrid" className="px-2 uppercase text-gray-600 hover:text-red-500">All Debrid</Link>
        </nav>
        </div>
    </div>
  );
}
 
export default Navbar;