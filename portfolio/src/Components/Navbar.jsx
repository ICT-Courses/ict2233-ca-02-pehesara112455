import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between p-4 sm:p-6 lg:p-8 bg-emerald-600 transition-colors duration-500">
      <div className="text-xl font-bold text-white">
        <NavLink to="/" className="text-3xl ">
          Pehesara
        </NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex space-x-11">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-white text-xl ${
                  isActive ? 'underline underline-offset-4 decoration-white decoration-2' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;