import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import style from './expando.css';

@customElement(enums.COMPONENT_PREFIX + 'expando')
export class WPExpando extends LitElement {
	static override styles = [CSS_RESETS, style];

	@property()
		name: string;

	@state()
		_open = false;

	toggle() {
		this._open = !this._open;
	}

	onKeyboardEvent(e: KeyboardEvent) {
		console.log(e);
	}

	render() {
		return when(
			this._open,
			() => html`
				<div @keypress=${this.onKeyboardEvent} @click=${this.toggle} class="row">
					<div>${this.name}</div>
					<div style="font-size: 2rem; cursor:pointer">&#752;</div>
				</div>
				<div class="hidden-text">
					<slot></slot>
				</div>
			`,
			() => html`
				<div @keypress=${this.onKeyboardEvent} @click=${this.toggle} class="row">
					<div>${this.name}</div>
					<div style="font-size: 2rem; cursor:pointer">&#709;</div>
				</div>
			`
		);
	}
}
