import { default as NextHead } from 'next/head'
import { useRouter } from 'next/router'

const Head = ({ children }) => {
	const router = useRouter()
	return (
		<NextHead>
			<title key="title">Auralite</title>
			<link rel="preconnect" href="https://ik.imagekit.io/auralite" />
			<link rel="preconnect" href="https://koi.auralite.io" />
			<meta name="description" key="description" content="A social network for the future" />
			<meta name="og:type" content="website" />
			<meta name="og:url" content={`https://auralite.io${router.asPath ?? router.pathname}`} />
			<meta key="ogTitle" name="og:title" content="Auralite" />
			<meta name="og:description" key="ogDescription" content="A social network for the future" />
			<meta name="og:image" key="ogImage" content="https://auralite.io/img/card.jpg" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@goauralite" />
			<meta key="twitterTitle" name="twitter:title" content="Auralite" />
			<meta name="twitter:description" key="twitterDescription" content="A social network for the future." />
			<meta name="twitter:image" key="twitterImage" content="https://auralite.io/img/card.jpg" />
			<meta name="twitter:creator" content="@m1guelpf" />
			<link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
			<link rel="manifest" href="/img/icons/site.webmanifest" />
			<link rel="mask-icon" href="/img/icons/safari-pinned-tab.svg" color="#6875f5" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<meta name="msapplication-TileColor" content="#603cba" />
			<meta name="msapplication-config" content="/img/icons/browserconfig.xml" />
			<meta name="theme-color" content="#6875f5" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, minimal-ui, viewport-fit=cover" />
			{children}
		</NextHead>
	)
}

export default Head
