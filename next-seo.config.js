const title = 'Three.js Academy– A free, modern course to learn Three.js'
const description = 'Learn how to build web applications with Three.js.'

const SEO = {
  title,
  description,
  canonical: 'https://threejs.academy',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://threejs.academy',
    title,
    description,
    images: [
      {
        url: 'https://threejs.academy/assets/images/og.png',
        alt: title,
        width: 1200,
        height: 700,
      },
    ],
  },
  twitter: {
    handle: '@spaceinvadev',
    site: '@spaceinvadev',
    cardType: 'summary_large_image',
  },
}

export default SEO
