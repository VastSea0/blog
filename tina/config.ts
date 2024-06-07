import { CATEGORIES } from '../src/data/categories.ts'
import { defineConfig } from 'tinacms'

 
export default defineConfig({
	branch: 'main',
	clientId: 'ace3c80d-31b7-445a-a43b-d2d2c4bf67f1', // Get this from tina.io
	token: 'a980609ceb5c4ef8054b187434b1c11754c75a03', // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets/images',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Yazıların',
				path: 'src/content/blog',
				format: 'mdx',
				fields: [
					{
						type: 'image',
						label: 'Resim',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the post'
					},

					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Kategori',
						description: 'Select an category for this post',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						label: 'Yazı açıklaması',
						required: true,
						name: 'description',
						description: 'A short description of the post'
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Tarih',
						required: true
					},
					{
						name: 'draft',
						label: 'taslak',
						type: 'boolean',
						description: 'If this is checked the post will not be published'
					},
					{
						type: 'string',
						name: 'tags',
						required: true,
						label: 'Etiketler',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'SButton',
						isBody: true,
						templates: [
							// Custom Components
							{
								label: 'SButton',
								name: 'SButton',
								fields: [
									{
										type: 'rich-text',
										label: 'SButton',
										name: 'children',
										isBody: true
									}
								]
							}
						]
					}
				]
			}
		]
	}
})