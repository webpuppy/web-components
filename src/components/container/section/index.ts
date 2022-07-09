import { DEFAULT_SECTION_STYLES } from './section.css';
import { SectionType } from './defs';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
} from '../../../globals';

@customElement(Enums.default.COMPONENT_PREFIX + 'section')
export class WPSection extends LitElement {
	@property()
	type: SectionType = 'block';

	static override styles = [DEFAULT_SECTION_STYLES];

	render() {
		return html`
		<section class=${this.type}>
			<slot></slot>
		</section>
		`;
	}
}
