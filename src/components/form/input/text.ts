import input_css from './style.css';
import {
    Enums,
	CSS_RESETS,
	WPEditable
} from '../../../globals/exports';
import {
	customElement,
    html,
	ifDefined,
    property,
} from 'lit-exports';
@customElement(Enums.default.COMPONENT_PREFIX + 'text-input')
export class WPTextInput extends WPEditable {

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
			return html`${this.render_label()}<input value=${this.initial} id=${this.id} name=${this.id} type="text" placeholder=${this.label} @change=${this.handle_nested_change} class="wp-input">`;
		}
		return html`${this.render_label()}<input value=${this.initial} @change=${this.handle_nested_change} id=${this.id} name=${this.id} placeholder=${this.label} type="text" class=${classes}>`;
	}

	handle_nested_change(e: Event) {
		const i = <HTMLInputElement>e.target;
		const new_val = i.value;
		this.latest = new_val;
		const event_data = { old_val: this.initial, new_val };
		const customEventDispatch = new CustomEvent('wp-input-change', { detail: event_data });
		this.dispatchEvent(customEventDispatch);
	}

	render() {
		return this.ring ? this.render_component('wp-input wp-input--ring') : this.render_component();
	}
}
