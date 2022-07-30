import { css } from 'lit-exports';

export default css`
:host {
	line-height: var(--wp-content-line);
	transition: var(--t1);
	width: 100%;
}

.wp-editable-list,
.wp-editable-grid {
	border-radius: var(--wp-border-radius);
	line-height: var(--wp-content-line);
	padding: 2rem .85rem;
}

.wp-editable-grid {
	display: grid;
}

@media(min-width: 720px) {
	.wp-editable-grid {
		grid-template-columns: repeat(4, 1fr);
	}
}
`;
