// Reactの記法で書くなら必ず必要
import React from "react";

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

// デフォルトでエクスポートする関数を設定しておく
export default App;
