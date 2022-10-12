import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { when } from 'lit/directives/when.js';
import { customElement, state, property } from 'lit/decorators.js';
import { ToastType } from './defs';
import style from './toast.css';

@customElement(enums.COMPONENT_PREFIX + 'toast')
export class WPToast extends LitElement {
	static styles = [CSS_RESETS, style];

	@property()
		text = '';

	@property()
		type: ToastType = 'info';

	@state()
		is_displayed = true;

	get_icon() {
		if (this.type === 'success') {
			return html`✓`;
		}
		if (this.type === 'error') {
			return html`x`;
		}
		return html`&#9432;`;
	}

	render() {
		return when(
			this.is_displayed,
			() => html` <div class="wp-toast">${this.get_icon()} ${this.text}</div> `,
			() => html``
		);
	}
}
