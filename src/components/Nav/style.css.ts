import { css } from 'lit';

export default css`
	:host {
		display: block;
		font-family: 'system-ui';
		line-height: var(--wp-content-line);
	}

	.wp-nav {
		align-items: center;
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.nav-item {
		color: inherit;
		text-decoration: none;
	}

	wp-nav wp-link {
		color: inherit;
		position: relative;
	}

	/* .drawer {
		animation: slide-drawer 200ms ease;
		background-color: var(--wp-body-bg);
		color: var(--wp-body-color);
		height: 100%;
		position: fixed;
		inset: 0;
		transform: translateX(0);
		width: 100%;
		z-index: 999;
	} */

	.close {
		background-color: transparent;
		border-color: transparent;
		border-radius: var(--wp-border-radius);
		cursor: pointer;
		color: var(--wp-red);
		display: block;
		line-height: var(--wp-content-line);
		float: right;
		font-size: 28px;
		padding: 0.25em;
	}

	/* @keyframes slide-drawer {
		0% {
			transform: translateX(-5rem);
		}
	} */

	.wp-nav {
		align-items: center;
		border-radius: var(--wp-border-radius);
		display: grid;
		grid-template-columns: 30% 70%;
		justify-content: space-between;
		margin: 0 auto;
		min-height: var(--wp-top-nav-height);
		max-width: var(--l-width);
		width: 100%;
		z-index: 9;
	}

	.wp-nav-logo a {
		color: inherit;
		display: flex;
	}

	.wp-nav-logo a,
	.wp-nav-logo span {
		align-items: center;
	}

	.wp-nav-logo span {
		display: none;
		font-size: 22px;
		font-weight: 500;
		line-height: 1.25em;
	}

	.wp-nav-logo a {
		color: inherit;
		text-decoration: none;
	}

	.wp-nav-list {
		display: none;
	}

	.wp-nav-burger {
		display: grid;
		justify-content: end;
		padding-right: 2rem;
	}

	.wp-nav-burger::after {
		content: '☰';
		font-size: 28px;
	}

	::slotted(a) {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 720px) {
		.wp-nav-list {
			align-items: center;
			display: flex;
			justify-content: flex-end;
		}

		.wp-nav-burger {
			display: none;
		}

		@supports not (display: flex) {
			.wp-nav-logo span {
				display: grid;
			}

			.wp-nav-list {
				display: grid;
			}
		}
	}
`;
