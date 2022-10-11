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
	is_copied = false;

	set_copied() {
		window.navigator.clipboard.writeText(this.text);
		this.is_copied = true;
	}

	override render() {
		return html`
			<code @click=${() => this.set_copied()}
				>${this.text} ${this.is_copied ? html`&#9989;` : html`&#128203;`}</code
			>
		`;
	}
}
