import React from 'react';
import './styles/Header.css';

// function Header() {
//   return (
//     <header className={styles.header}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Huawei_Music.png" alt="Logo" className={styles.logo} />
//         <input type="text" placeholder="Buscar..." className={styles.search} />
//         <img src="https://png.pngtree.com/element_our/png_detail/20181013/music-icon-design-vector-png_133746.jpg" alt="User Profile" className={styles.profileImage} />
//     </header>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Huawei_Music.png" alt="Logo" className="logo" />
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <img src="https://png.pngtree.com/element_our/png_detail/20181013/music-icon-design-vector-png_133746.jpg" alt="User Profile" className="profile-pic" />
    </header>
  );
};

export default Header;
