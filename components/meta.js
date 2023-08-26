import Head from 'next/head'

export default function Meta({ title, description, image }) {
  title = title ? `${title} | bluesky-jp` : 'bluesky-jp'
  description =
    description || 'bluesky japan community'
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={`https://bluesky-jp.github.io/${
          image || 'bskyjp.png'
        }`}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={`https://bluesky-jp.github.io/${
          image || 'bskyjp.png'
        }`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/bskyjp.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
