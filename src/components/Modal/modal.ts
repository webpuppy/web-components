import { enums, CSS_RESETS, WPSizeable } from '../../globals/exports';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './modal.css';

@customElement(enums.COMPONENT_PREFIX + 'modal')
export class WPModal extends WPSizeable {
	static override styles = [CSS_RESETS, style];

	@property()
		name = '';

	_remove() {
		const ev = new CustomEvent('wp-modal-close');
		document.dispatchEvent(ev);
		this.remove();
	}

	connectedCallback(): void {
		document.addEventListener('DOMContentLoaded', () => {
			const ev = new CustomEvent('wp-modal-open');
			document.dispatchEvent(ev);
		});
	}

	render() {
		return html`
			<div id="modal-bg">
				<div role="alert" aria-label=${this.name} class="wp-modal wp-modal--${this.size}">
					<button @click=${this._remove}>x</button>
					<h4>${this.name}</h4>
					<slot></slot>
				</div>
			</div>
		`;
	}
}
