# Bluesky Japan

- Bluesky guide

- Translation of docs

- Public Participation

## write

add content

```sh
./content/
├── blog
│   └── start.md
├── community
│   └── quick-start.md
├── docs.yml
├── guides
│   └── overview.md
├── lexicons
│   └── com-atproto-sync.md
└── specs
    └── xrpc.md
```

```sh
$ cp ./content/blog/first.md ./content/blog/test.md
$ vim ./content/blog/test.md
$ vim ./content/docs.yml
blog:
  - name: testについて
    href: /blog/test
```

## example

```sh
# よく編集するファイル
./components
├── cta.js
├── footer.js
├── header.js
└── hero.js

./pages
├── blog.js
├── community.js
├── docs.js
└── index.js
```

## memos

```sh
$ vim ./pages/index.js 
```

```js
function FeaturesSection() {
	const baseURL = "https://m.syui.ai/api/v1/memo?creatorId=1&tag=bluesky";
	const [post, setPost] = React.useState(null);
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setPost(response.data);
		});
	}, []);
	if (!post) return null;
  return (
    <div className="relative bg-white py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {post.map((feature) => (
              <div key={feature.id} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="block -mt-6" href={feature.id}>
                    <span>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
                      </span>
                    </span>
                    <Link href={"https://m.syui.ai/m/" + feature.id}>
                        <a className="text-blue-600 hover:underline">
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                            {feature.content.split('\n', 1)}
                        </h3>
                        </a>
                    </Link>
                    <p className="mt-5 text-base text-gray-500">
                        {moment.unix(feature.updatedTs).format("YYYY.MM.DD")}
                    </p>
                    <Link href={"https://m.syui.ai/u/" + feature.creatorUsername}>
                        <a className="text-blue-600 hover:underline">
                            @{feature.creatorUsername}
                        </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

## preview

```sh
$ npm i
$ npm run dev
$ curl -sL localhost:3000
```

## build and deploy

```sh
$ npm run build
$ npm run export
$ ls -a ./out
```

# atproto-website

This repository contains the documentation for the AT Protocol, available to read at [atproto.com](https://atproto.com/).

---

### Making edits to atproto.com

- clone this repo
- run `npm install`
- run the development server with `npm run dev` or `yarn dev`
- open [http://localhost:3000](http://localhost:3000) with your browser.

---

[pages/index.js](https://github.com/bluesky-social/atproto-website/blob/main/pages/index.js) generates [http://localhost:3000](http://localhost:3000) -- start there if you'd like to make changes.

The page auto-updates as you edit the file.

### Are you a developer interested in building on atproto?

Bluesky is an open social network built on the AT Protocol, a flexible technology that will never lock developers out of the ecosystems that they help build. With atproto, third-party can be as seamless as first-party through custom feeds, federated services, clients, and more.

If you're a developer interested in building on atproto, we'd love to email you a Bluesky invite code. Simply share your GitHub (or similar) profile with us via [this form](https://forms.gle/BF21oxVNZiDjDhXF9).
