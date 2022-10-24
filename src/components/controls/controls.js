import classes from "./controls.module.css";
import Select from "react-select";
import { hp } from "../../calculator/data";
import zapImg from "../../assets/zap.png";
import eqImg from "../../assets/quake.png";

const generateOptions = () => {
    let options = [];
    for (let i = 1; i <= 17; i++)
        options.push({ value: i, label: hp[i]["name"] });
    return options;
};

const selectStyle = {
    control: (css, { isDisabled }) => ({
        ...css,
        cursor: isDisabled ? "default" : "pointer",
    }),
    option: (css, { isDisabled }) => ({
        ...css,
        cursor: isDisabled ? "default" : "pointer",
    }),
};

const Controls = (props) => {
    const spellImg = (type, level, iscc) => (
        <div className={classes.wrapper}>
            <img
                className={classes.spellImg}
                src={type === "zap" ? zapImg : eqImg}
                alt="ZapQuake Spell"
            />
            <div
                className={
                    (type === "zap" && level === 10) || (type !== "zap" && level === 5)
                        ? classes.lvlBoxMax
                        : classes.lvlBox
                }
            >
                {level}
            </div>
            <div className={classes.ccOrOwn}>{iscc ? "CC" : "OWN"}</div>
        </div>
    );

    return (
        <div className={classes.card}>
            <span className={classes.spellSection}>
                {spellImg("zap", props.zap, false)}
                <input
                    className={classes.slider + " " + classes.sliderZap}
                    type="range"
                    min="1"
                    max="10"
                    value={props.zap}
                    onChange={(e) => props.zapChanged(e)}
                />
            </span>
            <span className={classes.spellSection}>
                {spellImg("eq", props.eq, false)}
                <input
                    className={classes.slider + " " + classes.sliderEq}
                    type="range"
                    min="1"
                    max="5"
                    value={props.eq}
                    onChange={(e) => props.eqChanged(e)}
                />
            </span>
            <span className={classes.spellSection}>
                {spellImg("zap", props.cczap, true)}
                <input
                    className={classes.slider + " " + classes.sliderZap}
                    type="range"
                    min="1"
                    max="10"
                    value={props.cczap}
                    onChange={(e) => props.ccZapChanged(e)}
                />
            </span>
            <span className={classes.spellSection}>
                {spellImg("eq", props.cceq, true)}
                <input
                    className={classes.slider + " " + classes.sliderEq}
                    type="range"
                    min="1"
                    max="5"
                    value={props.cceq}
                    onChange={(e) => props.ccEqChanged(e)}
                />
            </span>
            <div className={classes.controlsWrap}>
                <span>
                    <Select
                        styles={selectStyle}
                        className={classes.select}
                        menuPlacement="bottom"
                        isSearchable={false}
                        menuShouldScrollIntoView={true}
                        placeholder="Select defense/hero"
                        options={generateOptions()}
                        onChange={(id) => props.defIdChanged(id)}
                    />
                </span>
                <div className={classes.sliders}>
                    <span className={classes.currentCC}>{props.ccSpace}</span>
                    <input
                        className={classes.slider}
                        type="range"
                        min="0"
                        max="3"
                        value={props.ccSpace}
                        onChange={(e) => props.ccSpaceChanged(e)}
                    />
                    CC Spell Space
                </div>
                <div className={classes.sliders}>
                    <span className={classes.currentCC}>{props.defLvl}</span>
                    <input
                        className={classes.slider}
                        type="range"
                        min="1"
                        max={hp[props.defId]["hp"][0]}
                        value={props.defLvl}
                        onChange={(e) => props.defLvlChanged(e)}
                    />
                    {props.defId < 4 && props.defId !== 0 ? "Hero" : "Defense"} Level
                </div>
                {props.defId < 4 && props.defId !== 0 ? (
                    <div className={classes.sliders}>
                        <span className={classes.currentCC}>{props.warden}</span>
                        <input
                            className={classes.slider}
                            type="range"
                            min="1"
                            max="55"
                            value={props.warden}
                            onChange={(e) => props.wardenChanged(e)}
                        />
                        Enemy Warden
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export { Controls };
