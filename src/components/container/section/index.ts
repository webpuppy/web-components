import { DEFAULT_SECTION_STYLES } from './index.css';
import { SectionType } from './defs';
import { CSS_RESETS, Enums } from '../../../globals/exports';
import {
	html,
    property,
	customElement,
    LitElement,
} from 'lit-exports';
@customElement(Enums.default.COMPONENT_PREFIX + 'section')
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
