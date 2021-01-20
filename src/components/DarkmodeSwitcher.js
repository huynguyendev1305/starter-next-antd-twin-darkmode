import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import useDarkMode from "use-dark-mode";
import styled from "styled-components";

const SwitchStyled = styled(Switch)`
  margin: 0;
  padding: 14px 0.25rem;
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  border: 1px var(--link-color) solid;
  .ant-switch-handle {
    top: 50%;
    transform: translateY(-50%);
  }
  .ant-switch-handle::before {
    background: ${(props) =>
      props.isdarkmode
        ? "linear-gradient(40deg, #8983f7, #a3dafb 70%)"
        : "linear-gradient(40deg, #ff0080, #ff8c00 70%)"};
  }
  .ant-switch-inner {
    color: var(--text-color);
    font-size: 1rem;
  }
`;

const DarkModeSwitcher = () => {
  const [isDarkMode, setDarkMode] = useState(null);
  const darkMode = useDarkMode(false);
  const handleChange = () => {
    darkMode.toggle();
    setDarkMode(!isDarkMode);
  };
  useEffect(() => {
    setDarkMode(darkMode.value);
  }, [darkMode.value]);

  return (
    <SwitchStyled
      checkedChildren="Dark"
      unCheckedChildren="Light"
      onChange={handleChange}
      checked={darkMode.value}
      isdarkmode={isDarkMode ? 1 : 0}
    />
  );
};

export default DarkModeSwitcher;
