// // // // // import React from "react";
// // // // import "../styles/hero.css";

// // // // const HeroBanner = () => {
// // // //   return (
// // // //     <header className="hero">
// // // //       {/* <nav className="navbar">
// // // //         <h1>QuickRent</h1>
// // // //         <div className="nav-links">
// // // //           <a href="#features">Features</a>
// // // //           <a href="#gadgets">Gadgets</a>
// // // //           <a href="#contact">Contact</a>
// // // //         </div>
// // // //       </nav> */}
// // // //       <div className="hero-content">
// // // //         <h2>Rent Your Favorite Gadgets Effortlessly!</h2>
// // // //         <p>Affordable, Quick, and Hassle-Free Rentals</p>
// // // //         <button className="cta">Explore Rentals</button>
// // // //       </div>
// // // //       </header>
// // // //   );
// // // // };

// // // // export default HeroBanner;




// // // import '../styles/hero.css'; // Import CSS file for styling

// // // const HeroBanner = () => {
// // //   return (
// // //     <section className="hero-banner">
// // //       <div className="hero-content">
// // //         <h1>Welcome to Our Website</h1>
// // //         <p>Your one-stop solution for the latest gadgets and technology.</p>
// // //         <button className="cta-button">Explore Now</button>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HeroBanner;





// // const HeroBanner = () => {
// //   const styles = {
// //     heroBanner: {
// //       backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20230714/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890.jpg")',
// //     //   backgroundImage: 'url("https://via.placeholder.com/1920x1080")', // Replace with your image URL
// //       backgroundPosition: 'center',
// //       backgroundSize: 'cover',
// //       backgroundRepeat: 'no-repeat',
// //       color: 'white',
// //       textAlign: 'center',
// //       height: '100vh', // Full viewport height
// //       width: '900vw', // Full viewport width
// //       margin: '0',
// //       padding: '0',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       overflow: 'hidden', // Prevent scrollbars
// //       boxSizing: 'border-box',
       
      
      
    
// //     },

    
// //     heading: {
// //       fontSize: '48px',
// //       marginBottom: '20px',
// //       textTransform: 'uppercase',
// //     },
// //     description: {
// //       fontSize: '18px',
// //       marginBottom: '30px',
// //       maxWidth: '600px',
// //     },
// //     button: {
// //       backgroundColor: '#f39c12',
// //       color: 'white',
// //       border: 'none',
// //       padding: '12px 24px',
// //       fontSize: '16px',
// //       borderRadius: '4px',
// //       cursor: 'pointer',
// //       transition: 'background-color 0.3s ease',
// //     },
// //     buttonHover: {
// //       backgroundColor: '#d87f0a',
// //     },
// //   };

// //   return (
// //     <section style={styles.heroBanner}>
// //       <h1 style={styles.heading}>Welcome to Our Website</h1>
// //       <p style={styles.description}>
// //         Your one-stop solution for the latest gadgets and technology.
// //       </p>
// //       <button
// //         style={styles.button}
// //         onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
// //         onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
// //       >
// //         Explore Now
// //       </button>
// //     </section>
// //   );
// // };

// // export default HeroBanner;



// const HeroBanner = () => {
//     const styles = {
//       heroBanner: {
//         backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20230714/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890.jpg")',
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         color: 'white',
//         textAlign: 'center',
//         height: '100vh', // Full viewport height
//         width: '100vw', // Full viewport width
//         margin: '0',
//         padding: '0',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         overflow: 'hidden', // Prevent scrollbars
//         boxSizing: 'border-box',
//       },
//       heading: {
//         fontSize: '48px',
//         marginBottom: '20px',
//         textTransform: 'uppercase',
//       },
//       description: {
//         fontSize: '18px',
//         marginBottom: '30px',
//         maxWidth: '600px',
//       },
//       button: {
//         backgroundColor: '#f39c12',
//         color: 'white',
//         border: 'none',
//         padding: '12px 24px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s ease',
//       },
//       buttonHover: {
//         backgroundColor: '#d87f0a',
//       },
//     };
  
//     return (
//       <section style={styles.heroBanner}>
//         <h1 style={styles.heading}>Welcome to Our Website</h1>
//         <p style={styles.description}>
//           Your one-stop solution for the latest gadgets and technology.
//         </p>
//         <button
//           style={styles.button}
//           onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
//           onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
//         >
//           Explore Now
//         </button>
//       </section>
//     );
//   };
  
//   export default HeroBanner;




// import React from 'react';

const HeroBanner = () => {
  const styles = {
    heroBanner: {
      backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/background/20230714/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890.jpg")',
    backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
      textAlign: 'center',
      height: '100vh', // Full viewport height
      width: '100vw', // Full viewport width
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden', // Prevent scrollbars
    },
    heading: {
     color:'#C71585',
      fontSize: '28px',
      marginBottom: '20px',
      textTransform: 'uppercase',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Improve text readability
    },
    head:{
       color:'#9ACD32',
      fontSize: '45px',
      marginBottom: '20px',
      textTransform: 'uppercase',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Improve text readability
    },

    description: {
      color:'cyan',
      fontSize: '18px',
      marginBottom: '30px',
      maxWidth: '600px',
      lineHeight: '1.5',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Improve text readability
    },
    button: {
      backgroundColor: '#f39c12',
      color: 'white',
      border: 'none',
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#d87f0a',
    },
  };

  return (
    <section style={styles.heroBanner}>
      <h1 style={styles.head}>Welcome To QuickRent</h1>
      <h2 style={styles.heading}>Rent Your Favorite Gadgets Effortlessly!</h2>
      <p style={styles.description}>
      Affordable, Quick, and Hassle-Free Rentals
      </p>
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Explore Now
      </button>
    </section>
  );
};

export default HeroBanner;
