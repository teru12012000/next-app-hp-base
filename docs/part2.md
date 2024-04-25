# 第二章 `model`を実装する

## はじめに

いよいよ実装に入ります。
最初は`model`の実装になります。
どこから実装しようか迷いましたが、やはり下回りからやって行った方が良いかなと思ったのでそうしました。

## `model`でやるべきこと

フロントエンドでの`model`では API のデータを取得します。

もう既に型定義がされたファイルがあると思います(`model/fetcher/types.ts`)。こちらに API で取得したときの型を定義しています。

今回は`fetch`を使いますが、案件によっては`axios`を使うところもあるかと思います。

`fetch`はデフォルトで定義されているもので、`axios`はパッケージとしてインストールするものになります。

`axios`の方はブラウザ関係なく記述は同じでかつ短く書けるらしいですが自分があまり使ったことないので`fetch`を採用します。

予測ですが`fetch`の方が記述は長くなりますが、キャッシュのカスタマイズ性は高いのかなと思います。

## では実装！！

vscode を用意！！！！

## この章のまとめ

- フロントエンドでの`model`は API を取得する部分
- 取得するものとして`fetch`と`axios`がある
- `fetch`
  - 標準で利用できる
  - 記述が長い
  - カスタマイズはしやすい？
- `axios`
  - npm で install する必要がある
  - 記述が短くできる
  - カスタマイズがしにくいことがある？