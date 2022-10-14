import btnCss from './style.css';
import { BtnString, ButtonColor, ButtonVariant } from './defs';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { enums, CSS_RESETS, WPSizeable } from '../../globals/exports';
// import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
const a_bool = { attribute: true, type: Boolean };

const BTN_CLASS = 'wp-button';

/**
 * @since 0.0.0
 * 
 * @version 0.0.1
 * 
 * webpuppy button
 */
@customElement(enums.COMPONENT_PREFIX + 'button')
export class WPButton extends WPSizeable {
	@property()
		target?: string = null;

	@property({ attribute: true, type: String })
		href?: string = null;

	@property(a_bool)
		focusring = false;

	@property({ attribute: true, type: Number })
		sensitivity = 0;

	@property({ attribute: true })
		variant: ButtonVariant = 'hover';

	@property({ attribute: true })
		color: ButtonColor = 'primary';

	@property({ attribute: true })
		text = '';

	@property(a_bool)
		disabled = false;

	static override styles = [CSS_RESETS, btnCss];

	render_btn(classes: string, url: string) {
		if (!url) {
			return html`
				<button
					?disabled=${this.disabled}
					class=${classes}
					part=${BtnString}>
					<span id="content">
						${this.text}
						<slot></slot>
					</span>
				</button>
			`;
		}
		return html`
			<button
				?disabled=${this.disabled}
				class=${classes}
				part=${BtnString}
			>
				<a id="content" target=${ifDefined(this.target)} href=${url}>
					${this.text}
					<slot></slot>
				</a>
			</button>
		`;
	}

	override render() {
		const base = `${BTN_CLASS} ${BTN_CLASS}--${this.variant} ${BTN_CLASS}--${this.color} ${BTN_CLASS}--${this.size}`;
		return this.render_btn(base, this.href);
	}
}
