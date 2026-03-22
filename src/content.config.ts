import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

const audienceKeySchema = z.enum([
  'stakeholder',
  'business-analyst',
  'solution-architect',
  'developer',
  'tester',
]);

/** Per-role learning outcomes (omit roles that do not apply). */
const audienceOutcomesSchema = z
  .object({
    stakeholder: z.array(z.string()).optional(),
    'business-analyst': z.array(z.string()).optional(),
    'solution-architect': z.array(z.string()).optional(),
    developer: z.array(z.string()).optional(),
    tester: z.array(z.string()).optional(),
  })
  .optional();

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        audiences: z.array(audienceKeySchema).optional(),
        audienceNote: z.string().optional(),
        audienceOutcomes: audienceOutcomesSchema,
        /** Optional badge label shown beside the page H1 (e.g. legacy product name). */
        titleBadge: z.string().optional(),
      }),
    }),
  }),
};
