import { css } from '../../globals/exports';

export default css`
:host {
	background-color: var(--wp-body-bg);
	box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
	display: block;
	height: 100vh;
	position: relative;
	transition: box-shadow 500ms, background-color 400ms ease-in-out;
}

.wp-sbr-hdr, .wp-sbr-hdr a {
	align-items: center;
	color: var(--wp-body-color);
	display: flex;
	justify-content: space-evenly;
	text-decoration: none;
}

.wp-sbr-hdr h4 {
	font-weight: 400;
}

@media(min-width: 720px) {
	:host, aside {
		width: var(--wp-sidebar-width);
	}
}
`;
