import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import { CodeType } from './defs';
import styles from './code.css';

/**
 * @since 0.0.0
 *
 * @version 0.0.2
 */
@customElement(enums.COMPONENT_PREFIX + 'code')
export class WPCode extends LitElement {
	static override styles = [CSS_RESETS, styles];

	@property()
		type: CodeType = 'default';

	@property()
		text = '';

	@state()
		isCopied = false;

	copy() {
		window.navigator.clipboard.writeText(this.text);
		this.isCopied = true;
	}

	override render() {
		return html`
			<code @click=${this.copy} @keypress=${this.copy}>${this.text} ${this.isCopied ? html`&#9989;` : html`&#128203;`}</code>
		`;
	}
}
