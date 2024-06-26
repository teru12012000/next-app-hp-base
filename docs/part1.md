# 第一章 ディレクトリ構成

## はじめに

ここではディレクトリ構成を攻略していきましょう 😎

ディレクトリはプロジェクト立ち上げにおいてとても大事な工程になります。

ハリーポッタ図鑑を作った上でディレクトリ構成の一例を覚えましょう。

> [!WARNING]
> あくまでも一例です。プロジェクトの規模や画面仕様によって構成は変わってきます。

## そもそもなぜディレクトリ構成は大事なのか？

私が考える利点は以下の通りです。

- バグが出た時にどこを修正すればいいかを発見しやすい
- 途中からプロジェクトに参加しても全体像を把握しやすい
- 責務等が明確になるのでコードがスパゲッティーになりにくい

基本的にアプリ開発というのは複数人で行います。案件によっては途中参加という場合もありけりですし規模の大きさも選べるわけではありません。アプリの概要をいち早く把握するためにはディレクトリ階層が一つの鍵となります。

さらに、エンジニアでは恒例ですがバグはつきものです。ディレクトリ構成に気を遣っていればチケット(バグ報告)が飛んできた時に大体どの辺を直せば良いかがわかってしまいます。

ディレクトリ構成を意識する人は案外少ないのですが、一番大事なんじゃないかと私は思います 🧐

## ハリーポッタ図鑑のディレクトリ構成

```
├── src
│   ├── app //ルーティング専用(作成時に出来上がっている)
│   ├── assets //静的な画像
│   ├── components
│   │   ├── layout //共通の画面
│   │   └── ui //共通のuiパーツ
│   ├── model
│   │   ├── fetcher //APIからデータを取得する部分
│   │   └── hooks //viewと繋ぐ部分
│   ├── stories //storybookのstoryが格納(今回は使わない)
│   └── view //画面のコンポーネント
└── tsconfig.json //Typescriptの設定ファイル(作成時に出来上がっている)
```

今回のアプリはそこまで大きくないのでこのような構造になっているが別の構造の場合もあります。

初めて入った案件では上記に似たディレクトリ階層でしたし、今の案件は全く違った構造をしています。

## この章のまとめ

- ディレクトリ構成を考えるべき理由はバグ修正や第一次スパゲッティ化を防げるため
- ディレクトリ構成を考える工程はぶっちゃけ一番大事
- 案件の規模や仕様によってディレクトリ構成は変わってくる
