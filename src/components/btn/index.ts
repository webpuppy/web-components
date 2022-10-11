import btnCss from './style.css';
import { BtnType, BtnString } from './defs';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { enums, CSS_RESETS, WPSizeable } from '../../globals/exports';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
const a_bool = { attribute: true, type: Boolean };

/**
 * Button Wrapper 
 */
@customElement(enums.COMPONENT_PREFIX + 'btn')
export class WPBtn extends WPSizeable {
	@property()
	target?: string = null;

	@property({ attribute: true, type: String })
	href?: string = null;

	@property(a_bool)
	focusring = false;

	@property(a_bool)
	use_icon = false;

	@property({ attribute: true, type: Number })
	sensitivity = 0;

	@property({ attribute: true })
	type: BtnType = 'tertiary';

	@property({ attribute: true })
	text = '';

	@property(a_bool)
	disabled = false;

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

	render_btn(classes: any, url: string) {
		if (!url) {
			return html`
				<button
					role="button"
					?disabled=${this.disabled}
					class=${classMap(classes)}
					part=${BtnString}
				>
					<span id="content">
						${this.text}
						${when(
							!this.use_icon,
							() => null,
							() => this.get_icon()
						)}
						<slot></slot>
					</span>
				</button>
			`;
		}
		return html`
			<button
				role="button"
				?disabled=${this.disabled}
				class=${classMap(classes)}
				part=${BtnString}
			>
				<a id="content" target=${ifDefined(this.target)} href=${url}>
					${this.text}
					${when(
						!this.use_icon,
						() => null,
						() => this.get_icon()
					)}
					<slot></slot>
				</a>
			</button>
		`;
	}

	override render() {
		const sns = ` hov-${this.sensitivity}`; // the sensitivity for :active / :hover shadow / color shift
		const ring = this.focusring ? ' focusring' : '';
		const btn_base = this.use_icon
			? `wp-btn wp-btn--${this.size} wp-btn--icon`
			: `wp-btn wp-btn--${this.size} wp-btn--text`;
		const classes = {};
		classes[`${btn_base} primary${ring}${sns}`] = this.type === 'primary';
		classes[`${btn_base} danger${ring}${sns}`] = this.type === 'danger';
		classes[`${btn_base} confirm${ring}${sns}`] = this.type === 'confirm';
		classes[`${btn_base} secondary${ring}${sns}`] = this.type === 'secondary';
		classes[`${btn_base} tertiary${ring}${sns}`] = this.type === 'tertiary';
		return this.render_btn(classes, this.href);
	}
}
