import GRID_CSS from './style.css';
import { enums, CSS_RESETS } from '../../../globals/exports';

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement(enums.COMPONENT_PREFIX + 'grid')
export class WPGrid extends LitElement {
	static override styles = [CSS_RESETS, GRID_CSS];

	render() {
		return html`<slot></slot>`;
	}
}
