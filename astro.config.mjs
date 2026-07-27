// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Learn Spoken English',
        sidebar: [
            {
                label: 'Daily English',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Intro', slug: 'daily-english' },
                    { label: 'Simple Past in Polite Offers', slug: 'daily-english/simple-past-in-polite-offers' },
                ],
            },
            {
                label: 'Contractions',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'contractions/wh-contractions' },
                ],
            },
            {
                label: 'Reference',
                items: [{ autogenerate: { directory: 'reference' } }],
            },
        ],
        customCss: ['./src/styles/global.css'],
        components: {
            // Replace the default title component
            PageTitle: './src/components/overrides/CustomTitle.astro',
        }
		}),
		vue()
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
