import { enums, CSS_RESETS } from '../../globals/exports';
import { LitElement, html } from 'lit';
import { state, customElement, property } from 'lit/decorators.js';
import { CodeType } from './defs';

@customElement(enums.COMPONENT_PREFIX + 'code-line')
export class WPCode extends LitElement {
	static override styles = [CSS_RESETS];

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
			<code @keypress=${this.copy} @click=${this.copy}
				>${this.text} ${this.isCopied ? html`&#9989;` : html`&#128203;`}</code
			>
		`;
	}
}
