import input_css from './style.css';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
	ifDefined,
	CSS_RESETS
} from '../../../../globals';

@customElement(Enums.default.COMPONENT_PREFIX + 'text-input')
export class WPTextInput extends LitElement {

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
			return html`${this.render_label()}<input id=${this.id} name=${this.id} type="text" placeholder=${this.label} class="wp-input">`;
		}
		return html`${this.render_label()}<input id=${this.id} name=${this.id} type="text" class=${classes}>`;
	}

	render() {
		return this.ring ? this.render_component('wp-input wp-input--ring') : this.render_component();
	}
}
