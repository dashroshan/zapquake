import classes from './navbar.module.css';

const NavBar = () => {
    return (
        <nav>
            <span className={classes.stroke}>ZapQuake Combos</span>
        </nav>
    );
}

export { NavBar };