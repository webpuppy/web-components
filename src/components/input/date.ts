import input_css from './style.css';
import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement(enums.COMPONENT_PREFIX + 'date-input')
export class WPDateInput extends LitElement {
	static styles = [CSS_RESETS, input_css];

	@property()
		label = '';

	@property({ attribute: true, type: Boolean })
		ring = false;

	render_label() {
		return html`<label for=${ifDefined(this.id)}>${this.label}</label>`;
	}

	render_component(classes?: string) {
		if (!classes) {
			return html`${this.render_label()}<input
					contenteditable="true"
					aria-label=${this.label}
					id=${this.id}
					name=${this.id}
					type="date"
					class="wp-input" />`;
		}
		return html`${this.render_label()}<input
				contenteditable="true"
				aria-label=${this.label}
				id=${this.id}
				name=${this.id}
				type="date"
				class=${classes} />`;
	}

	render() {
		return this.ring
			? this.render_component('wp-input wp-input--ring')
			: this.render_component();
	}
}
