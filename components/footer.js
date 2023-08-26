import Link from 'next/link'
import { BuildingOfficeIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const navigation = {
  main: [
    //{ name: 'docs', href: '/docs' },
    //{ name: 'bskyjp', href: 'https://bskyjp.github.io' },
    //{ name: 'memo', href: 'https://m.syui.ai' },
  ],
  social: [
    //{
    //  name: 'gitHub',
    //  href: 'https://github.com/bskyjp',
    //  icon: ({ className }) => (
    //    <FontAwesomeIcon icon={faGithub} className={className} />
    //  ),
    //},
    //{
    //  name: 'bluesky',
    //  href: 'https://bsky.app/profile/syui.ai',
    //  icon: ({ className }) => (
    //    <FontAwesomeIcon icon={faSquare} className={className} />
    //  ),
    //},
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Bluesky website"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href}>
                <a className="text-base text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="text-gray-500 hover:text-gray-600">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; bluesky-jp
        </p>
      </div>
    </footer>
  )
}
