---
title: コミュニティ
summary: サードパーティはコミュニティの開発者によって構築されています
---

# コミュニティ

これはコミュニティの一部のリストです。このページへのプロジェクトの提出方法については、[説明](/community/projects#%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E6%8F%90%E5%87%BA)をお読みください。

### アプリパスワード

アカウントのセキュリティのため、サードパーティクライアントを使用する場合は、`Settings` > `Advanced` > `App passwords` で[アプリパスワード](/specs/atp#app-password)を生成してください。

アプリパスワードはユーザーのアカウントパスワードとほとんど同じ機能を持ちますが、アカウントの削除やアカウントの移行などの破壊的なアクションは制限されています。また、追加のアプリパスワードを作成することも制限されています。

[免責事項](/community/projects#%E5%85%8D%E8%B2%AC%E4%BA%8B%E9%A0%85)をお読みください。

## ATプロトコルの実装

- [atproto](https://github.com/bluesky-social/atproto) (Typescript): this is the leading protocol implementation, developed by Bluesky PBLLC
- [indigo](https://github.com/bluesky-social/indigo) (Go): not stable
- [atproto](https://github.com/MarshalX/atproto) (Python): new, not stable
- [adenosine](https://gitlab.com/bnewbold/adenosine) (Rust): not stable
- [lexrpc](https://github.com/snarfed/lexrpc) (Python): not stable
- [atprototools](https://github.com/ianklatzco/atprototools) (Python): new, not stable
- [atproto](https://github.com/myConsciousness/atproto.dart/tree/main/packages/atproto) and [bluesky](https://github.com/myConsciousness/atproto.dart/tree/main/packages/bluesky) (Dart)
- [bskyrb](https://github.com/ShreyanJain9/bskyrb) (Ruby): new, not stable
- [blue-pyinthe-sky](https://github.com/robcerda/blue-pyinthe-sky) (Python): new, not stable
- [Chitose](https://github.com/mnogu/chitose) (Python): new, not stable
- [arroba](https://github.com/snarfed/arroba) (Python): new, not stable. PDS implementation with MST, commit repo, diff and `com.atproto.sync` XRPC methods
- [picopds](https://github.com/DavidBuchanan314/picopds) (Python): new, not stable. A bare-minimum PDS implementation with just enough to federate with the sandbox network.
- [bsky4j](https://github.com/uakihir0/bsky4j) (Java): new, not stable
- [socialweb/atproto-lexicon](https://github.com/socialweb-php/atproto-lexicon) (PHP): Parses and resolves Lexicon schemas; useful for code generation
- [skyfall](https://github.com/mackuba/skyfall) (Ruby): new, not stable; only handles streaming from the firehose
- [blue_factory](https://github.com/mackuba/blue_factory) (Ruby): implementation of a feed generator service
- [FishyFlip](https://github.com/drasticactions/FishyFlip) (csharp): new, not stable

## チュートリアルとガイド

- [atproto docs in Japanese](https://github.com/encrypteduse/atproto-website-docs-jp) by [@encrypteduse](https://github.com/encrypteduse)
- [atproto starter kit](https://github.com/aliceisjustplaying/atproto-starter-kit), TypeScript/Node template, by [@alice.bsky.sh](https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf)
- [How to build a Bluesky bot using ATProto and OpenAI API](https://ashevat.medium.com/how-to-build-a-bluesky-bot-using-atproto-and-openai-api-77a26a154b) by [@amir.blue](https://bsky.app/profile/did:plc:ua6usdc4hzvzjsokoenba4zt)
- [Bluesky bot tutorial](https://github.com/emilyliu7321/bluesky-emoji-bot/blob/main/TUTORIAL.md) by [@emily.bsky.team](https://bsky.app/profile/did:plc:vjug55kidv6sye7ykr5faxxn)

## クライアント

Blueskyの公式アプリは、[Apple Store](https://apps.apple.com/us/app/bluesky-social/id6444370199)と[Google Play](https://play.google.com/store/apps/details?id=xyz.blueskyweb.app&hl=en_US)、および[desktop](https://bsky.app/)でご利用いただけます。

### Web

- [Tokimeki](https://tokimekibluesky.vercel.app/) by [@holybea](https://bsky.app/profile/did:plc:hiptcrt4k63szzz4ty3dhwcp)
- [Klearsky](https://klearsky.pages.dev/) by [@mimonelu.net](https://bsky.app/profile/did:plc:ilxxgyz7oz7mysber4omeqrg)
- [Laika](https://laika-bluesky.web.app/) by [@makoto.bsky.social](https://bsky.app/profile/did:plc:tr5cijtwcpl2dqrtmjsmmcow)
- [Skylight](https://penpenpng.github.io/skylight) by [@penpenpng.bsky.social](https://bsky.app/profile/did:plc:ahj2yuo63gaxyhbgn5ai6jt2)
- [The Blue](https://the-blue.shino3.net) by [@shino3.bsky.social](https://bsky.app/profile/did:plc:rpwpuzu2yyiuufm3232d7pm5)
- [Ucho-ten](https://ucho-ten.net) by [@bisn.ucho-ten.net](https://bsky.app/profile/did:plc:txandrhc7afdozk6a2itgltm) and [@hota1024.com](https://bsky.app/profile/did:plc:qhnfzuuv33o7gggw6mmu2ks4)
- [Kite🪁](https://kite.black) by [@arta.bsky.social](https://bsky.app/profile/did:plc:cqednx7rqstpsgdgec4byd6g)
- [Sunrise](https://sunrise.li/auth/login) by [@telmo.is](https://bsky.app/profile/did:plc:gtbohpin5op22ispn4gdnt7n)
- [Flat](https://flat-bs.vercel.app/) ([GitHub](https://github.com/sabigara/flat)) by [@sabigara.bsky.social](https://bsky.app/profile/did:plc:dyee7keje7ekwiteykjapw5t)
- [Blue Wrapper](https://blue.amazingca.dev) by [@caleb.bsky.social](https://bsky.app/profile/did:plc:e2nwnarqo7kdbt7ngr3gejp6)
- [Connectsky - Extension based AT Proto Client](https://chrome.google.com/webstore/detail/connectsky-an-at-proto-cl/dfjlfmdhkgcpendpfflnlaedfgaoiaed/related) by [@anku.bsky.social](https://bsky.app/profile/did:plc:5t2x7mmh4ofspj7apwpgif5l)
- [SkyDeck](https://skydeck.social) by [@mattstypa.bsky.social](https://bsky.app/profile/did:plc:hnbglrwshrdspimiliyoohhu)
- [SkyFeed](https://skyfeed.app) by [@redsolver.net](https://bsky.app/profile/did:plc:odo2zkpujsgcxtz7ph24djkj)
- [redocean](https://redocean.forza7.org/) ([GitHub](https://github.com/forza7taka/redocean)) by [@forza7.bsky.social](https://bsky.app/profile/did:plc:au6x2h2niz27male2krpwmzz)
- [Langit](https://langit.pages.dev/) ([GitHub](https://github.com/intrnl/langit)) by [@intrnl.bsky.social](https://bsky.app/profile/did:plc:qezk54orevt3dtm4ijcyadnq)
- [vSky](https://vsky.social) ([GitHub](https://github.com/skiniks/vsky)) by [@ryanskinner.com](https://bsky.app/profile/did:plc:ubz4oedvsb7dsuncqi5jb7o2)
- [Skylight Bluesky Style](https://skylight.louis-c-novel.com/#/) ([GitHub](https://github.com/louiscnovel2/skylight-bluesky-style)) by [@louis.bsky.social](https://bsky.app/profile/did:plc:fporki4626psbdnxzeh7lhg5)

### iOS

- [Graysky](https://bsky.app/profile/did:plc:sq6aa2wa32tiiqrbub64vcja) by [@mozzius.dev](https://bsky.app/profile/did:plc:p2cp5gopk7mgjegy6wadk3ep) and [@alice.bsky.sh](https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf)
- [Moot](https://bsky.app/profile/did:plc:3qom5jgzb6ny6ydnlsnmlhmm), native iOS client by [@moot.social](https://bsky.app/profile/did:plc:3qom5jgzb6ny6ydnlsnmlhmm)
- [Yup](https://yup.io/), an app to cross-post to Bluesky and other social apps

### Android

- [Seiun](https://github.com/akiomik/seiun) by [@omi.bsky.social](https://bsky.app/profile/did:plc:j5cxpczcvzajlxhfuq7abivp)
- [Ozone](https://github.com/christiandeange/ozone) by [@chr.bsky.social](https://bsky.app/profile/did:plc:soed46hcvg3l24tshb352cy6)
- [Graysky](https://bsky.app/profile/did:plc:sq6aa2wa32tiiqrbub64vcja) by [@mozzius.dev](https://bsky.app/profile/did:plc:p2cp5gopk7mgjegy6wadk3ep) and [@alice.bsky.sh](https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf)

### macOS

- [Bluesky for Raycast](https://www.raycast.com/dharamkapila/bluesky): A Bluesky client for [Raycast](https://www.raycast.com) by [@dharam.bsky.social](https://bsky.app/profile/did:plc:qqoncpemipyncukz3esxjcbg)
- [swiftsky](https://github.com/rmcan/swiftsky): A Bluesky client for macOS by [@can.bsky.social](https://bsky.app/profile/did:plc:oaerst6hznvwkeqtar5dtqry)

### CLI

- [gosky](https://github.com/bluesky-social/indigo/tree/main/cmd/gosky) (Golang) developed by Bluesky PBLLC
- [adenosine-cli](https://gitlab.com/bnewbold/adenosine/-/blob/main/adenosine-cli/README.md) (Rust) developed by [@bnewbold.bsky.team](https://bsky.app/profile/did:plc:44ybard66vv44zksje25o7dz)
- [bsky](https://github.com/mattn/bsky) (Golang) developed by [@mattn.bsky.social](https://bsky.app/profile/did:plc:ituhatvv5pyz4rwsj4hfrslh)
- [atr](https://github.com/syui/atr) (Rust) developed by [@syui.ai](https://bsky.app/profile/did:plc:uqzpqmrjnptsxezjx4xuh2mn)
- [bluesky_cli](https://github.com/myConsciousness/atproto.dart/tree/main/packages/bluesky_cli) (Dart) developed by [@shinyakato.dev](https://bsky.app/profile/did:plc:iijrtk7ocored6zuziwmqq3c)
- [blue-sky-cli](https://github.com/wesbos/blue-sky-cli) (Typescript) developed by [@wesbos](https://bsky.app/profile/did:plc:etdjdgnly5tz5l5xdd4jq76d)

## ブリッジ

- [SkyBridge](https://github.com/videah/skybridge) to use Mastodon apps with Bluesky by [@videah.net](https://bsky.app/profile/did:plc:inze6wrmsm7pjl7yta3oig77)
- [Bluestream](https://bluestream.deno.dev/), RSS feed generator for Bluesky by [@kawarimidoll.bsky.social](https://bsky.app/profile/did:plc:okalufxun5rpqzdrwf5bpu3d)
- [Twitter-to-Bsky](https://github.com/ianklatzco/twitter-to-bsky), to import your Twitter archive to Bluesky by [@klatz.co](https://bsky.app/profile/did:plc:o2hywbrivbyxugiukoexum57)
- [bluesky-post](https://github.com/myConsciousness/atproto.dart/tree/main/packages/bluesky_post), a tool to post from GitHub Actions to Bluesky, by [@shinyakato.dev](https://bsky.app/profile/did:plc:iijrtk7ocored6zuziwmqq3c)
- [granary](https://granary.io/), converts `app.bsky` objects to/from ActivityStreams, RSS, Atom, HTML, and more, by [@snarfed.org](https://bsky.app/profile/did:plc:fdme4gb7mu7zrie7peay7tst)
- [Sky Follower Bridge](https://github.com/kawamataryo/sky-follower-bridge), instantly find and follow Twitter followers on Bluesky, by [@kawamataryo.bsky.social](https://bsky.app/profile/did:plc:hcp53er6pefwijpdceo5x4bp)

## カスタムフィード

To build your own custom feed, you can use Bluesky's official feed generator starter kit [here](https://github.com/bluesky-social/feed-generator).
- [Skyfeed](https://skyfeed.app), a dashboard-like experience with a custom feed builder, by [@redsolver.dev](https://bsky.app/profile/did:plc:odo2zkpujsgcxtz7ph24djkj)
- [Goodfeeds](https://goodfeeds.co/), a tool to search custom feeds, by [@jcsalterego.bsky.social](https://bsky.app/profile/did:plc:vc7f4oafdgxsihk4cry2xpze) 
- [Skyline](https://skyline.gay/), create your own algorithm feeds, by [@louis02x.com](https://bsky.app/profile/did:plc:g74nxoyriqoo7jyclzlqkbj2)
- [Bossett's Custom Feeds](https://github.com/Bossett/bsky-feeds) ([guide](https://bossett.io/setting-up-bossetts-bluesky-feed-generator/)), fork of official generator for What's Science 🧪 feed & to easily host multiple algorithms with more advanced matching, by [@bossett.bsky.social](https://bsky.app/profile/did:plc:jfhpnnst6flqway4eaeqzj2a)
- [blue_factory](https://github.com/mackuba/blue_factory), a Ruby implementation of a feed generator, by [@mackuba.eu](https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr)
- [bluesky-feeds-rb](https://github.com/mackuba/bluesky-feeds-rb), a complete example of a custom feed service in Ruby, by [@mackuba.eu](https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr)
- [Bluesky Social Feeds](https://blueskyfeeds.com), a tool to search and build custom feeds without code or regex, by [@blueskyfeeds.com](https://bsky.app/profile/did:plc:eubjsqnf5edgvcc6zuoyixhw)

## 統計

- [ATScan](https://atscan.net) by [@tree.fail](https://bsky.app/profile/did:plc:524tuhdhh3m7li5gycdn6boe)
- [Bluesky social graph generator](https://bsky.jazco.dev/) by [@jaz.bsky.social](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt)
- [Bluesky stats](https://bsky.jazco.dev/stats) by [@jaz.bsky.social](https://bsky.app/profile/did:plc:q6gjnaw2blty4crticxkmujt)
- [Bluesky user growth](https://vqv.app/stats/chart) by [@m3ta.uk](https://bsky.app/profile/did:plc:ui7jfx3hdkfb4qr4ncfbqgvv) and [vqv.app](https://bsky.app/profile/did:plc:md6i2csjmkfoie6u4ot4kjmn)
- [Skyfeed Builder Feed Stats](https://stats.skyfeed.me/)

## カスタムドメイン

カスタムドメインは、[こちら](https://account.bsky.app/)から購入・管理できます。このサービスについての詳細は[こちら](https://blueskyweb.xyz/blog/7-05-2023-namecheap)をご覧ください。

- [Skyname](https://skyna.me/), register a free unique username for your Bluesky account, by [@darn.fish](https://bsky.app/profile/did:plc:7qw3ldjppmwmtjoak3egctdb)
- [Open Handles](https://github.com/SlickDomique/open-handles), an app to let others create a handle with your domains, by [@domi.zip](https://bsky.app/profile/did:plc:7bwr7mioqql34n2mrqwqypbz)
- [swifties.social](https://swifties.social/), claim a `swifties.social` handle, by [@mozzius.dev](https://bsky.app/profile/did:plc:p2cp5gopk7mgjegy6wadk3ep)

## Firehose

- [Firesky](https://firesky.tv), real-time stream of every Bluesky post, by [@johnspurlock.com](https://bsky.app/profile/did:plc:mceyt3qjswifxtikqqwvnnge)
- [Blue skies ahead](https://blue-skies-ahead.glitch.me/), view a feed of Bluesky posts, by [@gautham.bsky.social](https://bsky.app/profile/did:plc:sqhiuhi54wjzwsglrduhwxm6)
- [atproto-firehose](https://github.com/kcchu/atproto-firehose), NodeJS/Typescript library for accessing AT Protocol Event Stream (aka firehose),  and a CLI for streaming Bluesky Social events, by [@kcchu.xyz](https://bsky.app/profile/did:plc:ocko5cww67whp5lejhh57zdd)
- [blueskyfirehose](https://github.com/CharlesDardaman/blueskyfirehose), view a firehose of all bsky.social posts, by [@charles.dardaman.com](https://bsky.app/profile/did:plc:ibuqevx5au345anhlfeneo2m)
- [Skyfall](https://github.com/mackuba/skyfall), a Ruby gem for streaming events from the firehose, by [@mackuba.eu](https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr)


## その他

- Skylink [Chrome](https://skylinkchrome.com) and [Firefox](https://skylinkff.com/) extension to detect DIDs while browsing the web, by [@adhdjesse.com](https://bsky.app/profile/did:plc:f55kfczvcsjlaota4ep2xvhx)
- [Skyspaces](https://www.skyspaces.net/) audio rooms by [@geeken.tv](https://bsky.app/profile/did:plc:lbjhpk3a473cuufkenjcer3v)
- [Glamorous Toolkit for AT Protocol](https://github.com/feenkcom/gt4atproto), a moldable development environment
- [Bluesky post heatmap generator](https://bluesky-heatmap.fly.dev/) by [@alice.bsky.sh](https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf)
- [Skyspace](https://bsky.app/profile/did:plc:dxu2v6dt7ppqdnyjf3p53ram), a Myspace clone by [@jem.fm](https://bsky.app/profile/did:plc:7ry4kiemzesxucqv26q73znv)
- [Add Bluesky feed embeds](https://bsky.app/profile/did:plc:ijpidtwscybqhs5fxyzjojmu/post/3juerzwcl4424) by [@felicitas.pojtinger.com](https://bsky.app/profile/did:plc:ijpidtwscybqhs5fxyzjojmu)
- [bsky.link](https://bsky.link/), generate embeddable link previews for Bluesky posts, by [@jamesg.blog](https://bsky.app/profile/did:plc:6wwzaz5n4ordx762esmflyhx)
- [Bluesky Overhaul](https://github.com/xenohunter/bluesky-overhaul), browser extension that improves UX on the web app by [@blisstweeting.ingroup.social](https://bsky.app/profile/did:plc:ihbptowbt4tkcjqespanfbez)
- [atp tooling](https://blue.amazingca.dev/tools), cache and unfollow repos and users, by [@caleb.bsky.social](https://bsky.app/profile/did:plc:e2nwnarqo7kdbt7ngr3gejp6)
- [bluesky-esphome](https://github.com/softplus/bluesky_esphome), basic ESPHOME / ESP32 configuration to display Bluesky data, by [@sugyan.com](https://bsky.app/profile/did:plc:4ee6oesrsbtmuln4gqsqf6fp)
- [Airspace](https://bsky-airspace.onrender.com/) Social Blade for Bluesky showing history of follows/followers/posts count for any user, by [@nirsd.bsky.social](https://bsky.app/profile/did:plc:gzs37etm32zvsznn775hy35w)
- [Skythread](http://mackuba.github.io/skythread/), a tool for reading threads in a tree layout, by [@mackuba.eu](https://bsky.app/profile/did:plc:oio4hkxaop4ao4wz2pp3f4cr)
- [SkyPicker](https://skypicker.site/), a tool to do raffles in Bluesky by [@joseli.to](https://bsky.app/profile/did:plc:uorsid6pyxlcoggl3b65mzfy)

## ボット

- [MTA Alerts](https://bsky.app/profile/did:plc:jvhf36loasspmffobuyfpopz) by [@ryanskinner.com](https://bsky.app/profile/did:plc:ubz4oedvsb7dsuncqi5jb7o2)
- [Limerick bot](https://bsky.app/profile/did:plc:kqz6gh5hiukhcfg7i3hgpzzh) by [@gar.lol](https://bsky.app/profile/did:plc:4r2qco7eb644cpyga5r6vdib)
- [Assorted bots](https://github.com/QuietImCoding/bskybots) that reply on command by [@goose.art](https://bsky.app/profile/did:plc:hsqwcidfez66lwm3gxhfv5in)
- [Earthquake bot](https://bsky.app/profile/did:plc:oga3ylymphrqdxb3nvjgm23y) ([GitHub](https://github.com/emilyliu7321/bsky-earthquake-bot)) by [@emily.bsky.team](https://bsky.app/profile/did:plc:vjug55kidv6sye7ykr5faxxn)
- [Song of songs bot](https://bsky.app/profile/did:plc:75aqefjj3p45ubompts62agn) by [@alice.bsky.sh](https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf)
- [FAQ bot](https://github.com/dcsan/bsky-faq-bot) by [@dcsan.xyz](https://bsky.app/profile/did:plc:66exg3ue3crrvms3kltkwy4j)
- [GitHub Trending bot](https://bsky.app/profile/did:plc:eidn2o5kwuaqcss7zo7ivye5) ([GitHub](https://github.com/kawamataryo/bsky-github-trending-bot)) by [@kawamataryo.bsky.social](https://bsky.app/profile/did:plc:hcp53er6pefwijpdceo5x4bp)
- [Bsky Weathercam Bot - blueskies.bsky.social !](https://bsky.app/profile/did:plc:n5ddwqolbjpv2czaronz6q3d) by [ianklatzco](https://bsky.app/profile/did:plc:o2hywbrivbyxugiukoexum57)
- [Get Alt Text](https://bsky.app/profile/did:plc:ck5xa2cgd3negu6usqedzjbf) ([GitHub](https://github.com/hs4man21/bluesky-alt-text-ocr)) by [@holden.bsky.social](https://bsky.app/profile/did:plc:tzq3i67wnarn6x2kbjcprnfx)
- [Trend Words](https://bsky.app/profile/did:plc:7ktx3oe2zbompu3cjwthlest), display words posted more than usual, by [@lamrongol.bsky.social](https://bsky.app/profile/did:plc:wwqlk2n45es2ywkwrf4dwsr2)
- [Most Attention-Grabbing Posts](https://bsky.app/profile/did:plc:boopgqnkg2inpleusxo7kj4l), repost posts which receive the most replies, quotes, reposts and likes, by [@lamrongol.bsky.social](https://bsky.app/profile/did:plc:wwqlk2n45es2ywkwrf4dwsr2)
- [Linux Kernel Releases](https://bsky.app/profile/did:plc:35c6qworuvguvwnpjwfq3b5p) by [@adilson.net.br](https://bsky.app/profile/did:plc:kw6k5btwuh4hazzygvhxygx3)
- [ai bot](https://bsky.app/profile/did:plc:4hqjfn7m6n5hno3doamuhgef) that reply on command and chat by [@syui.ai](https://bsky.app/profile/did:plc:uqzpqmrjnptsxezjx4xuh2mn)
- [Score My Wordle](https://bsky.app/profile/did:plc:wems3hfqqjsfenrrd325q6zo) ([GitHub](https://github.com/shaneafsar/wordlescorer/)), provides Wordle stats and scores across Bluesky, Mastodon, and Twitter, by [@shaneafsar.com](https://bsky.app/profile/did:plc:ksl6jmkhz7qli2ywletvvm2z)
- [Rijden de Treinen](https://bsky.app/profile/did:plc:ijgkhvxpubqao7yiwtbzpyrm), posts train disruptions in the Netherlands, by [@djiwie.bsky.social](https://bsky.app/profile/did:plc:kvbm4te3fersn2nrxukajsql)

### 免責事項

このサードパーティデベロッパークライアントのリストは、情報提供のみを目的としています。これらのクライアントは、特に明記されていない限り、Bluesky PBLLCとは無関係であり、その性能や安全性を保証するものではありません。ユーザーは、これらのサードパーティクライアントを通じてアカウントにログインすることは、アカウントの漏洩やデータ損失の可能性を含む固有のリスクを伴うことを認識する必要があります。信頼でき、評判の高いサードパーティクライアントのみを使用することが重要です。当社は、利用者が注意を払い、自己責任でこれらのサードパーティークライアントを使用することを強くお勧めします。開発者を信頼し、アカウント情報を保護する能力に自信がある場合にのみ、サードパーティクライアントを通じてアカウントにログインしてください。

当社は、これらのサードパーティクライアントを使用した結果生じる可能性のある損害、損失、またはアカウントへの不正アクセスについて責任を負いません。これらのクライアントを使用することにより、お客様はこれらのリスクと制限を認識し、承諾するものとします。

### プロジェクトの提出

このリストにあなたのプロジェクトを投稿したり削除したりするには、[github](https://github.com/bluesky-social/atproto-website)にプルリクエストしてください。ガイドラインとして、既存の書式に従ってください。あるいは、あなたのプロジェクトへのリンクとハンドルネームを添えて`projects@atproto.com`にメールしてください。

- [github.com/bluesky-social/atproto-website](https://github.com/bluesky-social/atproto-website)

