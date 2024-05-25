import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ressharu.github.io',
	base: '/zlibootcamp2024ios/',
	integrations: [
		starlight({
			title: 'ZliBootCamp2024',
			favicon: './public/Logo.svg',
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5, },
			sidebar: [
				{
					label: 'Lecture',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '第0回: キックオフ', link: '/lecture/part0' },
						{ label: '第1回: 基本文法', link: '/lecture/part1' },
						{ label: '第2回: 画面表示, 画面遷移', link: '/lecture/part2' },
						{ label: '第3回: 画面遷移', link: '/lecture/part3' },
						{ label: '第4回: APIについて(fetch)', link: '/lecture/part4' },
						{ label: '第5回: データ入力 && ローカルへのデータ保存', link: '/lecture/part5' },
					],
				},
			],
		}),
	],
});
