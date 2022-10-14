import { enums, CSS_RESETS, WPSizeable } from '../../globals/exports';
import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TagType } from './defs';
import styles from './tag.css';

const TAG_CLASS = 'wp-tag';

@customElement(enums.COMPONENT_PREFIX + 'tag')
export class WPTag extends WPSizeable {
	@property()
		type: TagType = 'default';

	static override styles = [CSS_RESETS, styles];
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
