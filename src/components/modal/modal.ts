import {
    Enums,
	CSS_RESETS,
	WPSizeable
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
	state,
    property,
} from 'lit-exports';
import style from './modal.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'modal')
export class WPModal extends WPSizeable {

	static override styles = [CSS_RESETS, style];

	@property()
	name = '';

	render() {
		return html`
		<div id="modal-bg">
			<div class="wp-modal">
				<button @click=${this.remove}>x</button>
				<h4>${this.name}</h4>
				<slot></slot>
			</div>
		</div>
		`;
	}
}
