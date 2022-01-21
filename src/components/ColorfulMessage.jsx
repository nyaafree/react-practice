import React from "react";

export const ColorfulMessage = (props) => {
  console.log("カラーメッセージ");
  // 分割代入
  const { color, message, children } = props;
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
