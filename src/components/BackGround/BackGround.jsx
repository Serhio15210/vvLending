import React from "react";
import "./Background.css";

export default function BackGround() {
  return (
    <div className="background">
      <div className="gradientTopLeft"></div>
      <div className="gradientTopRight"></div>
      <div className="gradientBotLeft"></div>
      <div className="gradientBotRight"></div>

      <div className="blueDown triangle">
        <img src="images/bg-images/blue-triangle-down.png" alt="" />
      </div>
      <div className="blueTop triangle">
        <img src="images/bg-images/blue-transparent-top.png" alt="" />
      </div>
      <div className="pinkSmallOne triangle">
        <img src="images/bg-images/pink-triangle-down-small.png" alt="" />
      </div>
      <div className="pinkSmallTwo triangle">
        <img src="images/bg-images/pink-small-down-full.png" alt="" />
      </div>
      <div className="pinkBigTransparent triangle">
        <img
          src="images/bg-images/pink-transparent-big-triangle-down.png"
          alt=""
        />
      </div>
      <div className="pinkBig triangle">
        <img src="images/bg-images/pink-big-triangle-down.png" alt="" />
      </div>

      <div className="mBlueTop mobile">
        <img src="images/bg-images/blue-top-mobile.png" alt="" />
      </div>
      <div className="mBlueDown mobile">
        <img src="images/bg-images/blue-down-mobile.png" alt="" />
      </div>
      <div className="mPinkSmall mobile">
        <img src="images/bg-images/small-pink-mobile.png" alt="" />
      </div>
      <div className="mPinkBig mobile">
        <img src="images/bg-images/pink-big-mobile.png" alt="" />
      </div>
      <div className="mPinkBigFilled mobile">
        <img src="images/bg-images/big-pink-filled-mobile.png" alt="" />
      </div>
    </div>
  );
}
