import React from "react";
import classes from "./NumbersTable.module.css";
import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import * as FaIcons from "react-icons/fa";
const green = {
  500: "#24b524",
};

const red = {
  400: "tomato",
  500: "tomato",
  600: "tomato",
};

const Root = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 30px;
  height: 15px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === "dark" ? red[600] : red[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 10px;
    height: 10px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${red[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 17px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${green[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
);

const NumbersTable = () => {
  //  toggle switch
  function switchHandler(event) {
    let parentList = event.target.closest("li");
    let lockUi = parentList.children[0];
    if (event.target.checked) {
      lockUi.style.display = "none";
    } else {
      lockUi.style.display = "flex";
    }
  }

  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };
  return (
    <ul className={classes["numbers-container"]}>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>00</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>01</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>02</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>03</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>04</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>05</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>06</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>07</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>08</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>09</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled onChange={switchHandler} component={Root} {...label} defaultChecked />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>00</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>01</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>02</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>03</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>04</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>05</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>06</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>07</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>08</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>09</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled onChange={switchHandler} component={Root} {...label} defaultChecked />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>00</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>01</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>02</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>03</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>04</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>05</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>06</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>07</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>08</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>09</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled onChange={switchHandler} component={Root} {...label} defaultChecked />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>00</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>01</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>02</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>03</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>04</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>05</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>06</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>07</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>08</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>09</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled onChange={switchHandler} component={Root} {...label} defaultChecked />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>00</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>01</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>02</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>03</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>04</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>05</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>06</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>07</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>08</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled
            onChange={switchHandler}
            component={Root}
            {...label}
            defaultChecked
          />
        </div>
      </li>
      <li>
        <div className={classes.disableLock}>
          <FaIcons.FaLock />
        </div>
        <div className={classes["numbers-list"]}>09</div>
        <div className={classes["toggle-switch"]}>
          <SwitchUnstyled onChange={switchHandler} component={Root} {...label} defaultChecked />
        </div>
      </li>
    </ul>
  );
};

export default NumbersTable;
