export const CodeTypeOptions = ['default'] as const;

export type CodeType = typeof CodeTypeOptions[number];
