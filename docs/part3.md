# 第三章 `model/hooks`の作成

## はじめに

先ほどは API を作る部分を作りましたが、今回は`view`から参照される`hooks`を作りたいと思います。

ただし、今回はクライアントサイド専用の`hooks`のみにしようと思います。

## 今回作るカスタム`hooks`について

ハリーポッタ図鑑のクライアントコンポーネント側の通信部分は`swr`という vercel が作っている OSS ライブラリをつかってクライアントの方は通信処理をしていきます。

直接`view`側から`swr`を用いても良いのですが、本来の案件を考えた時にあえてカスタム`hooks`でやることにしました。

## 本来の案件であること、、、

近年のアプリ開発ではフロントエンドとバックエンドと開発が分離されるケースが主流になっています。

フロントエンドは Javascript や Typescript での開発が主だと思います。

しかし、バックエンドは Java や Go など様々な言語を使われることが多く、API 仕様によってはフロントエンド側で扱いにくい形式で送られることが多々あります。

例えば、

- Java で API を書くと`undefined`というものは存在しないらしく基本`null`でレスポンスを返すことになる
- `boolean(true,false)`で返せず`0`か`1`で返ってくる

などがあります。

また、`view/model`や`view`側で処理のしにくい形で返ってくることも案件によってはあります。。。😭

本来は画面仕様を見て言語の縛り以外の部分では、気を遣ったレスポンス形式にして欲しいですが、協力会社との連携だとこのようになることが多いです 😡(工数の確保とかちゃんとマネジメントしろよって思うけど、、、)

という愚痴は置いておいて本来の案件では`view`や`view/model`側が扱いやすい形式にカスタム`hooks`で行うことが多いです。

> [!NOTE]
> `view`は見た目の部分`view/model`とは`view`に付随するロジックの部分(ボタンのクリック処理など)

## では実装！！！

話にも疲れてきたので手を動かしましょう！！！

## 余談：`hooks`の歴史を軽く調べてみた

react で`hooks`と言えば`useState`や`useContext`,
`useEffect`などが思い浮かぶと思います。

例えば`useState`だと関数コンポーネント内の状態を保持したり更新したりします。

react は 16.8 以降で現在の書き方が生まれましたがそれまではクラスコンポーネントで書かれていました(筆者はこの時代はまだエンジニアではなくただの学生でした 😓)

```tsx
class MyComponent extends React.Component {
  /* Adding state and binding custom methods */
  constructor() {
    super()
    this.state = { ... }

    this.customMethodOne = this.customMethodOne.bind(this)
    this.customMethodTwo = this.customMethodTwo.bind(this)
  }

  /* Lifecycle Methods */
  componentDidMount() { ...}
  componentWillUnmount() { ... }

  /* Custom methods */
  customMethodOne() { ... }
  customMethodTwo() { ... }

  render() { return { ... }}
}
```

クラスコンポーネントを見ると今の書き方からしたらかなり違和感がありますね 🤪

これを使わず`hooks`を使って状態管理等ができるようになったそうな。

[参考](https://zenn.dev/morinokami/books/learning-patterns-1/viewer/hooks-pattern)

## まとめ

- カスタム`hooks`は`view`や`view/model`が扱いやすいように変形する下回り処理に使われる
- `model`の場合は API のレスポンスを扱いやすいように変換したり`swr`を使った処理を書く
