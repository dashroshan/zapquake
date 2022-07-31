import classes from "./navbar.module.css";

import navText from "../../assets/navText.png";
import github from "../../assets/github.png";
import discord from "../../assets/discord.png";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <a href="https://clashverse.roshan.cyou" target="_blank" rel="noreferrer">
        <img
          className={classes.navImg}
          src={navText}
          alt="ZapQuake Combos Calculator | Logo"
        />
      </a>
      <span>
        <a
          href="https://github.com/roshan1337d/zapquake"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.navBtn}
            src={github}
            alt="GitHub Source Code"
          />
        </a>
        <a
          href="https://clashverse.roshan.cyou/s"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={classes.navBtn}
            src={discord}
            alt="Discord Support Sever"
          />
        </a>
      </span>
    </div>
  );
};

export { Navbar };
