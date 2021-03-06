import FLEX_CSS from './style.css';
import {
	customElement,
    LitElement,
	html,
    property,
} from 'lit-exports';
import {
    Enums,
	CSS_RESETS
} from '../../../globals/exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'flex')
export class WPFlex extends LitElement {

	static override styles = [CSS_RESETS, FLEX_CSS];

	@property({ type: Boolean, attribute: true })
	justify_evenly?: boolean = false;

	@property({ type: Boolean, attribute: true })
	justify_center?: boolean = false;

	@property({ type: Boolean, attribute: true })
	align_center?: boolean = false;

	render_justify_even() {
		return html`
		<style>
			:host {
				justify-content: space-evenly;
			}
		</style>
		<slot></slot>
		`;
	}

	render_justify() {
		if(this.justify_center) {
			return html`
			<style>
				:host {
					justify-content: center;
				}
			</style>
			`;
		}
		if(this.justify_evenly) {
			return html`
			<style>
				:host {
					justify-content: space-evenly;
				}
			</style>
			`;
		}
		return html``;
	}

	render_align() {
		if(this.align_center) {
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
		${this.render_justify()}
		${this.render_align()}
		<slot></slot>
		`;
	}
};
