import classes from './navbar.module.css';

const NavBar = () => {
    return (
        <nav>
            <div className={classes.content}>
                <div className={classes.heading}>ZapQuake Combos</div>
                <div className={classes.tag}>A calulator from the <a href="https://clashverse.pages.dev">ClashVerse Bot</a></div>
            </div>
        </nav>
    );
}

export { NavBar };