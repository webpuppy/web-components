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
import { CSS_RESETS } from '../../globals/env.css';
@customElement(Enums.default.COMPONENT_PREFIX + 'btn')
export class WPBtn extends LitElement {

	@property({ attribute: true, type: Boolean })
	focusring = false;

    @property({ attribute: true, type: Boolean })
    use_icon = false;

    @property({ attribute: true })
    type: CBButtonType = 'base';

    @property({ attribute: true })
    text = '';

    static override styles = [CSS_RESETS, btnCss];

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
		const ring = this.focusring ? ' focusring' : '';
		const classes = {};
		classes[`wp primary${ring}`] = this.type === 'primary';
		classes[`wp base${ring}`] = this.type === 'base';
		classes[`wp danger${ring}`] = this.type === 'danger';
		classes[`wp confirm${ring}`] = this.type === 'confirm';
		classes[`wp secondary${ring}`] = this.type === 'secondary';
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
