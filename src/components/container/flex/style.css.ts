import { css } from '../../../globals/exports';

export default css`
:host {
	display: flex;
	margin: .25em auto;
}

@media(max-width: 720px) {
	:host {
		flex-direction: column;
	}
}
`;
