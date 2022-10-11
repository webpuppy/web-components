import FTR_STYLES from './style.css';
import { enums, CSS_RESETS } from '../../globals/exports';
import { customElement } from 'lit/decorators.js';
import { LitElement, html } from 'lit';

@customElement(enums.COMPONENT_PREFIX + 'ftr')
export class WPFtr extends LitElement {
	static override styles = [CSS_RESETS, FTR_STYLES];

	render() {
		return html`
			<footer role="navigation" class="wp-ftr">
				<slot></slot>
				<div style="margin-top: 2em; text-align: center">&copy;2022</div>
			</footer>
		`;
	}
}
