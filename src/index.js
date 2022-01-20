// jsxを仕様するために下記の記述が必要だったが、React Ver17以降は書かなくても良い
import React from "react";
import ReactDom from "react-dom";

const App = () => {
  // 複数行のjsxをreturnする場合は()で囲む
  // jsxは一つのタグでreturnしなければならないので
  // 以前はdivで囲っていたが、今は<></>で囲むようにしている
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
