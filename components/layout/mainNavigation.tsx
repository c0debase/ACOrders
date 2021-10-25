import Link from '../ui/Link';

import classes from './MainNavigation.module.css';

// Header navigation component for page access

const MainNavigation = () => {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Automated Consulting</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/orders'>Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;