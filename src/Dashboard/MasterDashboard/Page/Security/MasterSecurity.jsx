import React, { useState } from "react";
import "./MasterSecurity.css";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import ChangePhone from "./ChangePhone";
const MasterSecurity = () => {
  const [tag, setTag] = useState(1);
  return (
    <div className="account-security">
      <div class="re_password">
        <div class="rev_border">
          <div class="rev_nav ">
            <div
              class={`rev_nav_item  ${tag === 1 && "rev_active"}`}
              onClick={() => {
                setTag(1);
              }}
            >
              <div>Change Password</div>
            </div>
            <div
              class={`rev_nav_item  ${tag === 2 && "rev_active"}`}
              onClick={() => {
                setTag(2);
              }}
            >
              <div>Change Email</div>
            </div>
            <div
              class={`rev_nav_item  ${tag === 3 && "rev_active"}`}
              onClick={() => {
                setTag(3);
              }}
            >
              <div class="rec_icon"></div>
              <div>Change Phone Number</div>
            </div>
          </div>
          {tag === 1 && <ChangePassword />}
          {tag === 2 && <ChangeEmail />}

          {tag === 3 && <ChangePhone />}
        </div>
      </div>
    </div>
  );
};
export default MasterSecurity;
