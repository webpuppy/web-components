export const SectionTypes = ['block', 'flex', 'grid'] as const;

export type SectionType = typeof SectionTypes[number];
