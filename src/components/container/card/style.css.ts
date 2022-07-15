import { css } from '../../../globals/exports';

export default css`
:host, .wp-card {
	display: inline-block;
	width: 320px;
}

.wp-card {
	background-color: var(--wp-ocean);
	color: var(--wp-btn-txt-00);
}

figure img {
	margin: 0 auto;
	max-width: 100%;
}

.wp-card--rounded {
	border-radius: 1rem;
}

.wp-card-title {
	text-align: center;
}
`;
