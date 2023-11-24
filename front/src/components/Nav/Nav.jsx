import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
// import Logo from '../../../assets/rickandmorty.jpg';
// import styles from './Nav.module.scss';


function Nav ( {onSearch, onLogout }) {
  return (
    <div>
      <Link to='/home'><button>Home</button></Link>
      <Link to='/about'><button>About</button></Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={onLogout}>Log out</button>
    </div>
  )
} 


export default Nav;

// function Nav({ onSearch, logout }) {
//   console.log("test")
//   return (
//     <div className={styles.navContainer}>
//       <div className={styles.logo}>
//         <img src={Logo} alt='R&M Logo' />
//       </div>

//       <div className={styles.secondSection}>
//         <div className={styles.wrapperItems}>
//           <Link to='/home' className={styles.linknav}>
//             <span className={styles.itemnav}>Home</span>
//           </Link>
//           <Link to='/about' className={styles.linknav}>
//             <span className={styles.itemnav}>About</span>
//           </Link>
//         </div>

//         <SearchBar onSearch={onSearch} />
//         <Link to='/favorites'><button>Favorites</button></Link>
//         <button className={styles.boton} onClick={logout}>Logout</button>
//       </div>
//     </div>
//   );
// }

