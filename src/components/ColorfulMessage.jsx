import React from "react";

const colorfulMessage = (props) => {
  console.log(props);
  // 分割代入
  const { color, message, children } = props;
  console.log(message);
  const contentStyle = {
    color,
    fontSize: "17px"
  };
  return (
    <>
      <p style={contentStyle}>{message ? message : children}</p>
    </>
  );
};

export default colorfulMessage;
