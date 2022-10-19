export const BannerPositionOptions = [
	'bottom'
] as const;

export type BannerPosition = typeof BannerPositionOptions[number];