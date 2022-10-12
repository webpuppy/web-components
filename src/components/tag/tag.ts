import { enums, CSS_RESETS, WPSizeable } from '../../globals/exports';
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TagType } from './defs';

const TAG_CLASS = 'wp-tag';

@customElement(enums.COMPONENT_PREFIX + 'tag')
export class WPTag extends WPSizeable {
	@property()
		type: TagType = 'default';

	static override styles = [
		CSS_RESETS,
		css`
			:host {
				background-color: var(--wp-deep-blue);
				box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
					rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
				color: var(--wp-alt-white);
				border-radius: calc(var(--wp-border-radius) * 1.25);
				display: inline-block;
				padding: 0.35em;
				width: fit-content;
			}
			a {
				color: inherit;
			}
		`,
	];
	@property() href?: string;

	override render() {
		if (this.href) {
			return html`
				<a href=${this.href} class="${TAG_CLASS} ${TAG_CLASS}-${this.size}">
					<slot></slot>
				</a>
			`;
		}
		return html`
			<span class="${TAG_CLASS} ${TAG_CLASS}-${this.size}">
				<slot></slot>
			</span>
		`;
	}
}
