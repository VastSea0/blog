interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Egehan KAHRAMAN', // Site author
	title: 'Kendisine Düşünceler', // Site title.
	description: 'Yazılım ve Felsefe', // Description to display in the meta tags
	lang: 'tr',
	ogLocale: 'tr',
	shareMessage: 'Yazıyı paylaşW', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
