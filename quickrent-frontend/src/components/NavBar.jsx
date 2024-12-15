// // import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/NavBar.css'; 
// const NavBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/features">Features</Link></li>
//         <li><Link to="/gadgets">Gadgets</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;




import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" className="home-link">Home</Link></li>
        <li><Link to="/features" className="features-link">Features</Link></li>
        <li><Link to="/gadgets" className="gadgets-link">Gadgets</Link></li>
        <li><Link to="/contact" className="contact-link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
