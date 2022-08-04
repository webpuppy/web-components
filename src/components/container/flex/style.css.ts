import { css } from '../../../globals/exports';

export default css`
:host {
	display: flex;
	margin: .25em auto;
	width: 100%;
}

@media(max-width: 720px) {
	:host {
		flex-direction: column;
	}
}
`;
