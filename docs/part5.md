# 第五章 画面実装 2

## はじめに

ではでは次にクライアントコンポーネント側のハリーポッター各キャラクタの詳細画面を作っていきましょう。

クライアントコンポーネント側はサーチパラメーターを使ってやっていこうかなと思ってます。

## サーチパラメータとは？

みなさんは google をよく使いますよね？

例えば「話題のアニメ」と検索します。

検索リストの URL を閲覧してみましょうか。

`https://www.google.com/search?q=%E8%A9%B1%E9%A1%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1&oq=%E8%A9%B1%E9%A1%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABKgCALACAA&sourceid=chrome&ie=UTF-8`

この URL の`?q=%E8%A9%B1%E9%A1%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1&oq=%E8%A9%B1%E9%A1%8C%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABKgCALACAA&sourceid=chrome&ie=UTF-8`の部分、ここがサーチパラメータです。

なんか暗号みたいですね。サマーウォーズの RSA 暗号かなんかな？😓

## 今回はどうサーチパラメータを利用する

今回は
`http://localhost:3000/clientSide/characterDetail?id=ハリーポッター`的な感じでパラメータを`id=ハリーポッター`とします。

API の仕様上通信をする際にサーチパラメータをキャラ名にすることで固有の人物を取得できるのでそのようにしています。

どうでも良いのですが`id`ではなく`name`ですよね。。

すみません。忙しくて修正し忘れてました w
今回は`id`でやらせてください 🙇🏻‍♂️

## Next.js のサーチパラメータ

動的ルーティングでやる方法もあるのですが、今回はいろんなパターンで実装したいなとも思って別の手法でやろうかと思います。

一旦公式をみてみましょう

[公式](https://nextjs.org/docs/app/api-reference/functions/use-search-params)

今回のソースに書き換えたら

```tsx
const searchParams = useSearchParams();

const search = searchParams.get("id");
```

となります。

これを使うときは必ず`"use client"`を一番上につけましょう。

こちらを用いてデータを取得して画面に表示するという形になります。

## では実装

実装する主なファイルは

- `view/RCC/RCCCharacterDetail/RCCCharacterDetail.tsx`
- `components/layout/characterDetailTemplate/characterDetailTemplate.tsx`

です。

## まとめ

- サーチパラメータは URL の`?id=なんちゃら`の部分
- 動的ルーティングでやる方法もあるが`useSearchParams`を使ったやり方で
- 上記を使う場合には`"use client"`を忘れずに
