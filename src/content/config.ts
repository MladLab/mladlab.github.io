import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    naslov: z.string(),
    avtor: z.union([z.string(), z.array(z.string())]).transform(v => Array.isArray(v) ? v : [v]),
    datum: z.coerce.date(),
    tags: z.array(z.string()),
    stroji: z.array(z.string()).default([]),
    slika: z.string().optional(),
    galerija: z.array(z.string()).default([]),
    opis: z.string(),
  }),
});

const machines = defineCollection({
  type: 'content',
  schema: z.object({
    ime: z.string(),
    tip: z.string(),
    status: z.enum(['aktivno', 'v_popravilu', 'nedosegljivo']),
    specifikacije: z.record(z.string()).optional(),
    slika: z.string().optional(),
    opis: z.string(),
  }),
});

const members = defineCollection({
  type: 'content',
  schema: z.object({
    ime: z.string(),
    vloga: z.enum(['član', 'koordinator', 'vodja dijakov', 'alumni']),
    status: z.enum(['current', 'alumni']),
    leto_od: z.number(),
    leto_do: z.number().nullable().default(null),
    slika: z.string().optional(),
    opis: z.string(),
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    ime: z.string(),
    tip: z.string(),
    status: z.enum(['aktivno', 'v_popravilu', 'nedosegljivo']),
    slika: z.string().optional(),
    opis: z.string(),
  }),
});

export const collections = { projects, machines, members, tools };
