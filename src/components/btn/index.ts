import btnCss, { PRIMARY_BTN_CSS, CSS_RESETS } from './btn.css';
import { BtnType, BtnString } from './defs';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
} from '../../globals/exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'btn')
export class WPBtn extends LitElement {

	@property({ attribute: true, type: Boolean })
	focusring = false;

    @property({ attribute: true, type: Boolean })
    use_icon = false;

	@property({ attribute: true, type: Number })
	sensitivity = 0;

    @property({ attribute: true })
    type: BtnType = 'base';

    @property({ attribute: true })
    text = '';

    static override styles = [CSS_RESETS, btnCss, PRIMARY_BTN_CSS];

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
		const sns = ` hov-${this.sensitivity}`; // the sensitivity for :active / :hover shadow / color shift
		const ring = this.focusring ? ' focusring' : '';
		const classes = {};
		classes[`wp btn primary${ring}${sns}`] = this.type === 'primary';
		classes[`wp btn${ring}${sns}`] = this.type === 'base';
		classes[`wp btn danger${ring}${sns}`] = this.type === 'danger';
		classes[`wp btn confirm${ring}${sns}`] = this.type === 'confirm';
		classes[`wp btn secondary${ring}${sns}`] = this.type === 'secondary';
        return html`
            <button
			class=${classMap(classes)}
			part=${BtnString}>
				<span id="content">
					${this.text}
					${when(
						!this.use_icon,
						() => null,
						() => this.get_icon()
					)}
				</span>
            </button>
        `;
    }
}
