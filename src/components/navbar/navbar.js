import classes from './navbar.module.css';
import navText from '../../assets/navText.svg'

const NavBar = () => {
    return (
        <nav>
            <div className={classes.content}>
                <a href="https://clashverse.pages.dev" target="_blank"><img src={navText} class={classes.navText} /></a>
            </div>
        </nav>
    );
}

export { NavBar };