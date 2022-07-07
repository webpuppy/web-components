import { css, CSSResult } from '../../globals/exports';
import { LayoutType } from './defs';

export const DEFAULT_LAYOUT_STYLES = css`

`;

export const SIDEBAR_0_STYLES = css`

`;

export const SIDEBAR_1_STYLES = css`

`;

export const LAYOUT_STYLES = (
	type: LayoutType
): CSSResult[] => {
	switch(type) {
		case 'sidebar-0':
			return [DEFAULT_LAYOUT_STYLES, SIDEBAR_0_STYLES];
		case 'sidebar-1':
			return [DEFAULT_LAYOUT_STYLES, SIDEBAR_1_STYLES];
		default:
			return [DEFAULT_LAYOUT_STYLES];
	}
}
