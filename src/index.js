// jsxを仕様するために下記の記述が必要だったが、React Ver17以降は書かなくても良い
import React from "react";
import ReactDom from "react-dom";
// 同階層のApp.jsxからAppをインポート
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
