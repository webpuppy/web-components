export const TagTypeOptions = ['default'] as const;

export const CodeTypeOptions = ['default'] as const;

export type TagType = typeof TagTypeOptions[number];

export type CodeType = typeof CodeTypeOptions[number];
