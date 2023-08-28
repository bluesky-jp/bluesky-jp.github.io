import Link from 'next/link'
import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Roadmap from '../components/roadmap'
import CTA from '../components/cta'
import axios from 'axios'
import moment from "moment"
import React from 'react'
import merge from 'deepmerge'

import {
  AtSymbolIcon,
  CodeBracketSquareIcon,
  ArrowsUpDownIcon,
} from '@heroicons/react/24/outline'

//const features = [
//  {
//    name: '連合',
//    description:
//      "ATプロトコルを使用しているサービスであれば、誰とでも接続できます",
//    icon: AtSymbolIcon,
//  },
//  {
//    name: 'アルゴリズム',
//    description:
//      'オープンなアルゴリズム市場を通じて、世界の見方をコントロールできます',
//    icon: CodeBracketSquareIcon,
//  },
//  {
//    name: '移行',
//    description:
//      'コンテンツ、フォロー、アイデンティティを失うことなくホストを変更できます',
//    icon: ArrowsUpDownIcon,
//  },
//]

export default function Home() {
  return (
    <div>
      <Meta />
      <Header />
      <Hero />
      <FeaturesSection />
      {undefined /*<RoadmapSection />*/}
      {undefined /*<LinksSection />*/}
      <CTA />
      <Footer />
    </div>
  )
}

function FeaturesSection() {
	const [post, setPost] = React.useState(null);
	React.useEffect(() => {
		axios.get("https://m.syui.ai/api/v1/memo?creatorId=" + 1 + "&tag=bluesky").then((response) => {
			setPost(response.data);
		});
	}, []);
	const [posts, setPosts] = React.useState(null);
	React.useEffect(() => {
		axios.get("https://m.syui.ai/api/v1/memo?creatorId=" + 5 + "&tag=bluesky").then((response) => {
			setPosts(response.data);
		});
	}, []);
	if (!post) return null;
	if (!posts) return null;
	const result = merge(post, posts).sort((a, b) => ((a.updatedTs > b.updatedTs) ? -1 : 1));;
  return (
    <div className="relative bg-white py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center">
            {result.map((feature) => (
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

function RoadmapSection() {
  return (
    <div className="max-w-lg mx-auto px-5 mb-24">
      <h3 className="text-center text-3xl mb-8 font-bold">Roadmap</h3>
      <Roadmap />
      <div className="text-center mt-8">
        <Link href="/guides/overview">
          <a className="text-blue-600 hover:underline">
            Learn more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

function LinksSection() {
  const links = [
    {
      href: '/guides',
      name: 'Guides',
      description: 'Learn how the AT protocol works at a high level.',
    },
    {
      href: '/specs',
      name: 'Specs',
      description: 'Read detailed specifications for the protocol.',
    },
    {
      href: '/lexicons',
      name: 'Lexicons',
      description: 'Schema reference for AT and its apps.',
    },
  ]
  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {links.map((link) => (
            <div key={link.name} className="relative">
              <dt>
                <p className="text-lg font-medium leading-6 text-blue-600">
                  <Link href={link.href}>
                    <a className="hover:underline">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      {link.name}
                    </a>
                  </Link>
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {link.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
