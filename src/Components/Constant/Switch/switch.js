import React, { useState } from "react";
import Switch from "react-switch";

const ButtonSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(true);
    if (checked === true) {
      setChecked(false);
    }
  };

  return (
    <Switch
      onChange={handleChange}
      checked={checked}
      checkedIcon={false}
      uncheckedIcon={false}
      onHandleColor="#fff"
      onColor="#0c0c7a"
      offColor="#f0ecec"
      width={42}
      height={25}
    />
  );
};

export default ButtonSwitch;
