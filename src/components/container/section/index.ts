import { DEFAULT_SECTION_STYLES } from './index.css';
import { SectionType } from './defs';
import { CSS_RESETS, enums } from '../../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Section Wrapper
 */
@customElement(enums.COMPONENT_PREFIX + 'section')
export class WPSection extends LitElement {
	@property()
		type: SectionType = 'block';

	static override styles = [CSS_RESETS, DEFAULT_SECTION_STYLES];

	render() {
		return html`
			<section class=${this.type}>
				<slot></slot>
			</section>
		`;
	}
}
