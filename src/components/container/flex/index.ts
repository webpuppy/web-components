import FLEX_CSS from './style.css';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
	CSS_RESETS,
	css
} from '../../../globals/exports';


@customElement(Enums.default.COMPONENT_PREFIX + 'flex')
export class WPFlex extends LitElement {

	static override styles = [CSS_RESETS, FLEX_CSS];

	@property({ type: Boolean, attribute: true })
	justify_evenly?: boolean = false;

	@property({ type: Boolean, attribute: true })
	justify_center?: boolean = false;

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

	render_justify_center() {
		return html`
		<style>
			:host {
				justify-content: center;
			}
		</style>
		<slot></slot>
		`;
	}

	render() {
		if(this.justify_evenly)
			return this.render_justify_even();
		if(this.justify_center)
			return this.render_justify_center();

		return html`
		<slot></slot>
		`;
	}
};
