import { css } from '../../globals/exports';

export default css`
:host {
	display: block;
	font-family: system-ui, -apple-system, 'Segoe UI', Roboto,
		'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
		'Noto Color Emoji';
	line-height: 1.8em;
	margin-block-start: 1.25em;
	margin-block-end: 1.25em;
}

* {
	color: #3d3a3a;
}

p, header {
	margin-block-start: 0;
	margin-block-end: 0;
}

.wp-txt-xs {
	font-size: 12px;
}

.wp-txt-sm {
	font-size: 14px;
}

.wp-txt-md {

}

.wp-txt-lg {
	font-size: 1.5em;
}

.wp-txt-xl {
	font-size: 2em;
}


`;
