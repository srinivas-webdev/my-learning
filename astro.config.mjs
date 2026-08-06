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
                    { label: 'Meanings of Get', slug: 'daily-english/meanings-of-get' },
                    { label: 'Have + Noun Phrase', slug: 'daily-english/have-plus-noun' },
                    { label: 'Make + Noun Phrase', slug: 'daily-english/make-plus-noun' },
                    { label: 'Take + Noun Phrase', slug: 'daily-english/take-plus-noun' },
                    { label: 'Adjective + Preposition', slug: 'daily-english/adjective-plus-preposition' },
                    { label: 'Verb + Gerund', slug: 'daily-english/verb-plus-gerund' },
                    { label: 'Adjectives modify verbs', slug: 'daily-english/adjectives-modify-verbs'},
                    { label: 'Direct speech', slug: 'daily-english/direct-speech'},
                    {
                        label: 'others',
                        collapsed: true,
                        items: [
                            {
                                label: 'Clauses',
                                collapsed: true,
                                items: [
                                    { label: 'Verb + Noun Clause for Uncertainity', slug: 'daily-english/others/clauses/verb-plus-noun' },
                                    { label: 'Adjective Clauses + Realive Pronoun', slug: 'daily-english/others/clauses/adjective-clauses-pronoun-choice' },
                                    { label: 'Adjective Clauses with Adverb Meaning', slug: 'daily-english/others/clauses/adjective-clauses-adverb-meanings' },
                                    { label: 'Adjective Clauses - Sentence relatives', slug: 'daily-english/others/clauses/sentence-relatives' },
                                ]
                            },
                        ]
                    }
                ],
            },
            {
                label: 'Contractions',
                collapsed: true,
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Telugu', slug: 'contractions/telugu' },
                ],
            },
            {
                label: 'Reductions',
                collapsed: true,
                items: [
                    { label: 'Telugu', slug: 'reductions/telugu' },
                ],
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
