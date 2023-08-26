---
title: クイックスタート
summary: atproto APIを使い始める
---

# クイックスタート

Bluesky PBLLCのプロトコルは`typescript`で実装されています。APIは[こちら](https://www.npmjs.com/package/@atproto/api?activeTab=readme)から利用できます。

このパッケージを使い始めるには、`atproto/api`をインストールしてください :

```
npm install @atproto/api
```

アプリケーションでこのパッケージをインポートするには、次のようにします :

```TypeScript
import { BskyAgent } from '@atproto/api'
```

ユーザー名とパスワードを環境変数に設定します。Blueskyエージェントを作成し、以下の抜粋でログインします :

```Typescript
const agent = new BskyAgent({ service: 'https://bsky.social' })

await agent.login({
  identifier: process.env.BLUESKY_USERNAME!,
  password: process.env.BLUESKY_PASSWORD!,
});
```

このエージェントを使って投稿を作成します :

```Typescript
await agent.post({
    text: "Hello world"
});
```

パッケージ・ドキュメント](https://www.npmjs.com/package/@atproto/api)で、API呼び出しのサンプルを見ることができます。

## その他のプロトコル実装

より多くの言語のライブラリについては、[コミュニティのプロジェクトページ](/community/projects#protocol-implementations)をご覧ください。

# ブログ 

開発者向けのブログが公開されています。

- [atproto.com/blog](https://atproto.com/blog)

- [Federation Architecture Overview](https://blueskyweb.xyz/blog/5-5-2023-federation-architecture)
- [Algorithmic Choice](https://blueskyweb.xyz/blog/3-30-2023-algorithmic-choice)
- [Composable Moderation](https://blueskyweb.xyz/blog/4-13-2023-moderation)
