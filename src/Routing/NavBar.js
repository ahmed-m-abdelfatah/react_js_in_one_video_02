import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

/**
 * NavLink vs Link
 *
 * NavLink checks if current url is in the to={} and add active class to it
 */

// this way better with css framework
const styles = {
  ul: {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#333',
    position: 'fixed',
    bottom: '0',
    right: '0',
    left: '0',
  },

  li: {
    float: 'left',
  },

  a: {
    display: 'block',
    color: '#fff',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
  },
};

export default function NavBar() {
  return (
    <>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <NavLink to='/' replace style={styles.a}>
            Home
          </NavLink>
        </li>
        <li style={styles.li}>
          {/* If the end prop is used, it will ensure this component isn't matched as "active" when its descendant paths are matched. For example, to render a link that is only active at the website root and not any other URLs, you can use: */}
          <NavLink to='/profile' replace end style={styles.a}>
            Profile
          </NavLink>
        </li>
        <li style={styles.li}>
          <NavLink to='/profile/1' replace end style={styles.a}>
            Profile/1
          </NavLink>
        </li>
        <li style={styles.li}>
          <NavLink to='/profile?id=1' replace end style={styles.a}>
            Profile?id=1
          </NavLink>
        </li>
        <li style={styles.li}>
          <Link to='/' replace style={styles.a}>
            Not NavLink to home
          </Link>
        </li>
      </ul>
      <div className='clear-fix'></div>
    </>
  );
}
