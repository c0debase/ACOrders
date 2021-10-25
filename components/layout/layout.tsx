import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

// Wrapper for page content with nav and global styles

const Layout = (props: any) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;