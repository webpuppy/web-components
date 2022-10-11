import { css } from 'lit';

export default css`
	:host {
		display: flex;
		margin: 0.25em auto;
		width: 100%;
	}

	@media (max-width: 720px) {
		:host {
			flex-direction: column;
		}
	}
`;
