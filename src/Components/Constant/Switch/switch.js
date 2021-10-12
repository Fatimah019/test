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
      onHandleColor="#f5f6f9"
      onColor="#0747a6"
      offColor="#f5f6f9"
      width={42}
      height={25}
    />
  );
};

export default ButtonSwitch;
