// // import React from "react";
// import HeroBanner from "./components/HeroBanner";
// import Features from "./components/Features";
// import GadgetListing from "./components/GadgetListing";
// import ContactForm from "./components/ContactForm";

// const App = () => {
//   return (
//     <div>
//       <HeroBanner />
//       <Features />
//       <GadgetListing />
//       <ContactForm />
//     </div>
//   );
// };

// export default App;




import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Import components
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import GadgetListing from './components/GadgetListing';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HeroBanner />} />
          <Route path="/features" element={<Features />} />
          <Route path="/gadgets" element={<GadgetListing />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
