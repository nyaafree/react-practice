// eslintのruleをoffにしたい場合はこのように設定できる
/* eslint react-hooks/exhaustive-deps : off */

// Reactの記法で書くなら必ず必要
// 分割代入で react.useState react.useEffectを取り出す
import React, { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  // numはstateの変数名、setNumはstateを更新していく関数名
  // useStateのは初期値を設定することができる（下の例では0）
  // stateは各コンポーネントが持つ状態、stateが更新されると再レンダリングされる
  // stateが変わると差分のみ再レンダリングする
  // 受け取ったpropsが再レンダリングされた場合、親コンポーネントに変更があった場合も再レンダリングされる
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFaceShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  // useEffect関数の第二引数には配列を取ることができる
  // 第二引数に空配列を渡すと初回レンダリングの時のみ第一引数に渡した関数が実行される
  // 第二引数の配列にnumを渡すとnumに変化があった場合のみ第一引数の関数が実行される
  // useEffectを使うことで各stateが変化した場合に干渉するのを防ぐことができる
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
    // 下記のようにすれば特定の行だけeslintのruleをoffにできる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
      {faceShowFlg && <p>(^^)</p>}
      <button onClick={onClickCountUp}>ボタン</button>
      <br />
      <button onClick={onClickSwitchFaceShowFlg}>on/off</button>
    </>
  );
};

// デフォルトでエクスポートする関数を設定しておく
export default App;
