declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"machines": {
"bambu-x1c.md": {
	id: "bambu-x1c.md";
  slug: "bambu-x1c";
  body: string;
  collection: "machines";
  data: InferEntrySchema<"machines">
} & { render(): Render[".md"] };
"cnc-rezkalnik.md": {
	id: "cnc-rezkalnik.md";
  slug: "cnc-rezkalnik";
  body: string;
  collection: "machines";
  data: InferEntrySchema<"machines">
} & { render(): Render[".md"] };
"laserski-rezalnik.md": {
	id: "laserski-rezalnik.md";
  slug: "laserski-rezalnik";
  body: string;
  collection: "machines";
  data: InferEntrySchema<"machines">
} & { render(): Render[".md"] };
"prusa-mk4s.md": {
	id: "prusa-mk4s.md";
  slug: "prusa-mk4s";
  body: string;
  collection: "machines";
  data: InferEntrySchema<"machines">
} & { render(): Render[".md"] };
};
"members": {
"blaz-krizisnik.md": {
	id: "blaz-krizisnik.md";
  slug: "blaz-krizisnik";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"lev-polenec.md": {
	id: "lev-polenec.md";
  slug: "lev-polenec";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"luka-colaric.md": {
	id: "luka-colaric.md";
  slug: "luka-colaric";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"luka-van-treven.md": {
	id: "luka-van-treven.md";
  slug: "luka-van-treven";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"marcel-stefe.md": {
	id: "marcel-stefe.md";
  slug: "marcel-stefe";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"matic-rzek.md": {
	id: "matic-rzek.md";
  slug: "matic-rzek";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"nace-kepa.md": {
	id: "nace-kepa.md";
  slug: "nace-kepa";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"rok-mohoric.md": {
	id: "rok-mohoric.md";
  slug: "rok-mohoric";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
"tomaz-mocnik.md": {
	id: "tomaz-mocnik.md";
  slug: "tomaz-mocnik";
  body: string;
  collection: "members";
  data: InferEntrySchema<"members">
} & { render(): Render[".md"] };
};
"projects": {
"3d-sola.md": {
	id: "3d-sola.md";
  slug: "3d-sola";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"aerovis.md": {
	id: "aerovis.md";
  slug: "aerovis";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
"pametnihranilnik.md": {
	id: "pametnihranilnik.md";
  slug: "pametnihranilnik";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"tools": {
"3d-pero.md": {
	id: "3d-pero.md";
  slug: "3d-pero";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"laboratorijski-napajalnik.md": {
	id: "laboratorijski-napajalnik.md";
  slug: "laboratorijski-napajalnik";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"multimeter.md": {
	id: "multimeter.md";
  slug: "multimeter";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"osciloskop.md": {
	id: "osciloskop.md";
  slug: "osciloskop";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"spajkalna-postaja.md": {
	id: "spajkalna-postaja.md";
  slug: "spajkalna-postaja";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
"vrocetopilna-pistola.md": {
	id: "vrocetopilna-pistola.md";
  slug: "vrocetopilna-pistola";
  body: string;
  collection: "tools";
  data: InferEntrySchema<"tools">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
