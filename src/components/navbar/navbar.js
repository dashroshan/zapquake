import classes from './navbar.module.css';
import navText from '../../assets/navText.png';
import github from '../../assets/github.png';
import discord from '../../assets/discord.png';

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <a href="https://clashverse.pages.dev" target="_blank"><img className={classes.navImg} src={navText} /></a>
            <span>
                <a href="https://github.com/roshan1337d/zapquake" target="_blank"><img className={classes.github} src={github} /></a>
                <a href="https://clashverse.pages.dev/s" target="_blank"><img className={classes.discord} src={discord} /></a>
            </span>
        </div>
    );
}

export { Navbar };