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
	@property({ attribute: 'auto-reset' })
		autoReset = true;

	@property()
		text = '';

	@state()
		isCopied = false;

	copy() {
		window.navigator.clipboard.writeText(this.text);
		this.isCopied = true;
		if(this.autoReset) {
			setTimeout(() => {
				this.isCopied = false;
			}, 5000);
		}
	}

	override render() {
		return html`
			<code @click=${this.copy} @keypress=${this.copy}
				>${this.text}&nbsp;${this.isCopied
	? html`<span id="icon">&#9989;</span>`
	: html`<span id="icon">&#128203;</span>`}</code
			>
		`;
	}
}
