import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';
import { file } from "astro/loaders";

const mediaSchema = z.object({
  url: z.string(),
  publicId: z.string().optional(),
  type: z.string()
})

const mediaArraySchema = z.preprocess(
  (val) => {
    // If it's already an array, return it; otherwise try to parse JSON
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      try {
				return JSON.parse(val);
      } catch (e) {
        throw new Error("Invalid JSON string");
      }
    }
    return val;
  },
  z.array(mediaSchema)
);

const examplesArraySchema = z.preprocess(
  (val) => {
    // If it's already an array, return it; otherwise try to parse JSON
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      try {
				return JSON.parse(val);
      } catch (e) {
        throw new Error("Invalid JSON string");
      }
    }
    return val;
  },
  z.array(z.string())
);

const meaningSchema = z.object({
  name: z.string(),
  examples: examplesArraySchema.optional(),
  media: mediaArraySchema.optional()
})


const meaningsArraySchema = z.preprocess(
  (val) => {
    // If it's already an array, return it; otherwise try to parse JSON
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      try {
				return JSON.parse(val);
      } catch (e) {
        throw new Error("Invalid JSON string");
      }
    }
    return val;
  },
  z.array(meaningSchema)
);

const extraDetailsArraySchema = z.preprocess(
  (val) => {
    // If it's already an array, return it; otherwise try to parse JSON
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
      if (val.length === 0) return []
      try {
				return JSON.parse(val);
      } catch (e) {
        throw new Error("Invalid JSON string");
      }
    }
    return val;
  },
  z.array(z.tuple([z.string(), z.array(z.string())]))
);

const phraseDetailsSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string(),
  type: z.coerce.number().optional(),
  origin: z.string().optional(),
	examples: examplesArraySchema.optional(),
  meanings: meaningsArraySchema,
  extraDetails: extraDetailsArraySchema.optional()
})



const phrase = defineCollection({
  loader: file("src/data/phrases.json"),
	schema: phraseDetailsSchema
});


export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
	phrase
};
