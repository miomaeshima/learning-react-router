react-routerの使いかたを学ぶ。
参考にしたサイトはhttps://dezanari.com/react-react-router/

1. まず、react-create-appで土台を作成。

2. react-router-domをインストール（react-create-appだといらない？！）
```
yarn add react-router-dom
```
3. 
App.jsを見て！

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
と、インポートしておいて、

Linkで飛ぶ先はコンポーネントとして作成し、このファイルにインポートする。

そして、切り替えを以下のように設定。

```
<BrowserRouter>　　　　　　　　　/* 全体をBrowserRouterで囲む。*/

    <div className="wrapper">　

      <div className="nav">　　　　　　　　　　　　　
        <h1>Do you like A or B???</h1>
        <Link to="/pageA">PageA</Link><br/>　　/*Linkでアンカーと同じものを作れる。*/
        <Link to="/pageB">PageB</Link>
      </div>
    
      <div className="main">
        <Switch>　　　　　　　　　　　　　　　　　　　　/* Switchで囲んだ中には、、、*/
          <Route path="/pageA" component={PageA}/>　 /* RouteでLinkで飛ぶ先を設定。*/
          <Route path="/pageB" component={PageB}/>  
        </Switch>    
      </div>
    
    </div>

    </BrowserRouter>
```
