// Reactの記法で書くなら必ず必要
import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert("押されました");
  };
  // 複数行のjsxをreturnする場合は()で囲む
  // jsxは一つのタグでreturnしなければならないので
  // 以前はdivで囲っていたが、今は<></>で囲むようにしている

  // styleの外側の{}はjsを書きますという宣言用、内側の{}はオブジェクトを表す
  // また 上のcontentStyleのように オブジェクト形式のプロパティを用意しておいてstyleの中で読み込ませることが可能
  // propsとして color,messageの２つを渡している
  // <ColorfulMessage>aaa</ColorfulMessage>のようにした場合は props.childrenに aaaが入る
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink" message="お元気ですよ" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// デフォルトでエクスポートする関数を設定しておく
export default App;
