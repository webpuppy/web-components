import FLEX_CSS from './style.css';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { enums, CSS_RESETS } from '../../../globals/exports';

@customElement(enums.COMPONENT_PREFIX + 'flex')
export class WPFlex extends LitElement {
	static override styles = [CSS_RESETS, FLEX_CSS];

	@property({ type: Boolean, attribute: true })
		justify_evenly?: boolean = false;

	@property({ type: Boolean, attribute: true })
		justify_center?: boolean = false;

	@property({ type: Boolean, attribute: true })
		align_center?: boolean = false;

	@property({ type: Boolean, attribute: true })
		justify_between? = false;

	render_justify() {
		if (this.justify_center) {
			return html`
				<style>
					:host {
						justify-content: center;
					}
				</style>
			`;
		}
		if (this.justify_between) {
			return html`
				<style>
					:host {
						justify-content: space-between;
					}
				</style>
			`;
		}
		return html`
			<style>
				:host {
					justify-content: space-evenly;
				}
			</style>
		`;
	}

	render_align() {
		if (this.align_center) {
			return html`
				<style>
					:host {
						align-items: center;
					}
				</style>
			`;
		}
		return html``;
	}

	render() {
		return html`
			${this.render_justify()} ${this.render_align()}
			<slot></slot>
		`;
	}
}
