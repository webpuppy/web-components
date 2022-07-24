import input_css from './style.css';
import {
    Enums,
	CSS_RESETS
} from '../../../globals/exports';
import {
	customElement,
    LitElement,
    html,
	ifDefined,
    property,
} from 'lit-exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'date-input')
export class WPDateInput extends LitElement {

	static styles = [CSS_RESETS, input_css];

	@property()
	label: string = '';

	@property({ attribute: true, type: Boolean })
	ring = false;

	render_label() {
		return html`<label for=${ifDefined(this.id)}>${this.label}</label>`;
	}

	render_component(classes?: string) {
		if(!classes) {
			return html`${this.render_label()}<input id=${this.id} name=${this.id} type="date" class="wp-input">`;
		}
		return html`${this.render_label()}<input id=${this.id} name=${this.id} type="date" class=${classes}>`;
	}

	render() {
		return this.ring ? this.render_component('wp-input wp-input--ring') : this.render_component();
	}
}
