import Meta from '../../components/meta'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Breadcrumbs from '../../components/breadcrumbs'
import Alert from '../../components/alert'
import CTA from '../../components/cta'
import TLDR from '../../components/tldr'
import { getNavigation, getFile } from '../../lib/content'
import { BlogSidebar } from '../../components/sidebar'


export async function getStaticPaths() {
  const navigation = await getNavigation()
  return {
    paths: navigation.blog
      .map((item) => {
        return {
          params: { id: item.href.slice('/blog/'.length) },
        }
      })
      .filter((item) => item.params.id.length > 0),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const navigation = await getNavigation()
  const file = await getFile('blog', context.params.id)
  return { props: { navigation, file } }
}

export default function Guide({ navigation, file }) {
  const pages = [
    { name: 'Blog', href: '/blog', current: false },
    { name: file.title, href: file.path, current: true },
  ]
  return (
    <div>
      <Meta title={file.title} description={file.summary} date={file.date} image={file.image}/>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-4 sticky lg:relative top-0 bg-white z-10">
        <Breadcrumbs pages={pages} />
      </div>
      <div className="flex max-w-4xl mx-auto">
        <BlogSidebar navigation={navigation} current={file.path} />
        <main className="flex-1 px-4 pb-16">
          {file.tldr ? <TLDR items={file.tldr} /> : ''}
          <div
            className="prose prose-pre:overflow-x-auto prose-pre:max-w-[90vw]"
            dangerouslySetInnerHTML={{ __html: file.bodyHTML }}
          ></div>
          {file.todo ? (
            <div className="py-6">
              <Alert
                title="Page not available"
                message="This document has not yet been written. Please check back soon for updates."
              />
            </div>
          ) : undefined}
        </main>
      </div>
      <CTA />
      <Footer />
    </div>
  )
}
