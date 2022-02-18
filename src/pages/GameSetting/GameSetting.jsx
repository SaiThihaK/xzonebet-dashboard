import React from "react";
import Card from "../../components/UI/Card";
import Games from "./Games/Games";
import classes from "./GameSetting.module.css";
import gameimg1 from "./Games/images/1.webp";
import gameimg2 from "./Games/images/2.webp";
import gameimg3 from "./Games/images/3.webp";
import gameimg4 from "./Games/images/4.webp";
import gameimg5 from "./Games/images/5.webp";
import gameimg6 from "./Games/images/6.webp";
import gameimg7 from "./Games/images/7.webp";
import gameimg8 from "./Games/images/8.webp";
import gameimg9 from "./Games/images/9.webp";
import gameimg10 from "./Games/images/10.webp";
const GameSetting = () => {
  const temp = [
    gameimg1,
    gameimg2,
    gameimg3,
    gameimg4,
    gameimg5,
    gameimg6,
    gameimg7,
    gameimg8,
    gameimg9,
    gameimg10,
  ];
  return (
    <div className={classes["game-setting-container"]}>
      <Card>
        <div className={classes["card-header"]}>
          <h1 className={classes["card-title"]}>Game Setting</h1>
        </div>
        <div className={classes["card-body"]}>
          <div className={classes["all-game-lists-flex"]}>
            {
              temp.map((img,index) => {
                return (
                  <Games key={index} src={img} />
                )
              })
            }
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GameSetting;
