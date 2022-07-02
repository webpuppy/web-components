import btnCss from './btn.css';
import {
	customElement,
	LitElement,
	Enums,
	html,
	property,
	classMap,
	when,
} from '../../globals/exports';
import { CBButtonType } from './defs';

@customElement(Enums.default.COMPONENT_PREFIX + 'btn')
export class WPBtn extends LitElement {
	@property({ attribute: true, type: Boolean })
	use_icon = false;

	@property({ attribute: true })
	type: CBButtonType = 'base';

	@property({ attribute: true })
	text = '';

	static override styles = [btnCss];

	get_icon() {
		switch (this.type) {
			case 'confirm':
				return '✓';
			case 'danger':
				return 'x';
			default:
				return '';
		}
	}
	override render() {
		const classes = {
			primary: this.type === 'primary',
			base: this.type === 'base',
			danger: this.type === 'danger',
			confirm: this.type === 'confirm',
		};
		return html`
			<button class=${classMap(classes)} part="button">
				${this.text}
				${when(
					!this.use_icon,
					() => null,
					() => this.get_icon()
				)}
			</button>
		`;
	}
}


