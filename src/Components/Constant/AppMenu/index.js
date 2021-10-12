import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AppMenu({ menu_name_or_icon, item_names, modal }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItem = (item) => {
    item[0]();
    handleClose();
  };

  return (
    <div>
      <div
        onClick={handleClick}
        aria-haspopup="true"
        // className={menuBtnStyle1 ? classes.Btn2 : classes.Btn1}
      >
        {menu_name_or_icon && menu_name_or_icon}
      </div>

      <div
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        // open={Boolean(anchorEl)}
        // onClose={handleClose}
      >
        {item_names.map((item, i) => (
          <div key={i} onClick={() => handleMenuItem(Object.values(item))}>
            <p primary={Object.keys(item)} />
            {modal && modal}
          </div>
        ))}
      </div>
    </div>
  );
}

AppMenu.propTypes = {
  menu_name_or_icon: PropTypes.any,
  item_names: PropTypes.any,
};
