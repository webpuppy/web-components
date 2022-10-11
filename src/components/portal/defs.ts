export const WPPortalXSmallWidth = '180';
export const WPPortalXSmallHeight = 'auto';

export const WPPortalSmallWidth = '360';
export const WPPortalSmallHeight = 'auto';

export const WPPortalMDWidth = '720';
export const WPPortalMDHeight = '540';

export const WPPortalLGWidth = '1080';
export const WPPortalLGHeight = '720';

export const WPPortalXLargeWidth = '1920';
export const WPPortalXLargeHeight = '1080';

export const WPPortalFetchPriorityOption = ['low', 'high', 'auto'] as const;

export type WPPortalFetchPriority = typeof WPPortalFetchPriorityOption[number];

export const WPPortalLoadingOption = ['eager', 'lazy'] as const;

export type WPPortalLoadingOption = typeof WPPortalLoadingOption[number];

export const WPPortalRefererPolicyOption = [
	'no-referer',
	'no-referer-when-downgrade',
	'origin',
	'origin-when-cross-origin',
	'same-origin',
	'strict-origin',
	'strict-origin-when-cross-origin',
	'unsafe-url',
] as const;

export type WPPortalRefererPolicy = typeof WPPortalRefererPolicyOption[number];
