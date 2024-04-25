# 第六章 画面実装 3

## はじめに

part1 の実装お疲れ様でした。
次は part2 の実装です。

と言っても今回は画面のスタイルが全く一緒で
共通化しているのでほぼ実装することは少ないかもしれないです。

## RSC での実装

今回は直接`model`を import して使用します。

そもそも Next.js の`fetch`においてキャッシュの設定の仕方が違います。

公式より引用します

```tsx
export default async function Page() {
  // このリクエストは手動で無効にするまでキャッシュされる。
  // `getStaticProps` と似ている。
  // force-cache` はデフォルトであり、省略可能である。
  const staticData = await fetch(`https://...`, { cache: "force-cache" });

  // このリクエストはリクエスト毎にリフェッチされる。
  // `getServerSideProps` と似ている。
  const dynamicData = await fetch(`https://...`, { cache: "no-store" });

  // このリクエストは10秒間の有効期限でキャッシュされる。
  // `getStaticProps` に `revalidate` オプションを付けたものと似ている。
  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 },
  });

  return <div>...</div>;
}
```

> [!WARNING]
> よく間違われるのですが SSR や SSG とは違った概念なので注意です。

これらを`async/await`を使って取得して画面に描画します

## いざ実装

使用するファイルは

- `view/RSC/RSC.tsx`

## まとめ

- `fetch`の仕方は 3 種類
- SSR や SSG とは違う
