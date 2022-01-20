// Reactの記法で書くなら必ず必要
import React from "react";

const App = () => {
  const onClickButton = () => {
    alert("押されました");
  };

  const contentStyle = {
    color: "blue",
    fontSize: "17px"
  };
  // 複数行のjsxをreturnする場合は()で囲む
  // jsxは一つのタグでreturnしなければならないので
  // 以前はdivで囲っていたが、今は<></>で囲むようにしている

  // styleの外側の{}はjsを書きますという宣言用、内側の{}はオブジェクトを表す
  // また 上のcontentStyleのように オブジェクト形式のプロパティを用意しておいてstyleの中で読み込ませることが可能
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// デフォルトでエクスポートする関数を設定しておく
export default App;
