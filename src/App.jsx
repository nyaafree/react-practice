// Reactの記法で書くなら必ず必要
// 分割代入で react.useStateを取り出す
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // numはstateの変数名、setNumはstateを更新していく関数名
  // useStateのは初期値を設定することができる（下の例では0）
  // stateは各コンポーネントが持つ状態、stateが更新されると再レンダリングされる
  const [num, setNum] = useState(0);
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
      <p>{num}</p>
      <button onClick={onClickCountUp}>ボタン</button>
    </>
  );
};

// デフォルトでエクスポートする関数を設定しておく
export default App;
