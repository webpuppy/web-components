import {
    Enums,
	css,
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
import {
	TagType,
	CodeType
} from './defs';
@customElement(Enums.default.COMPONENT_PREFIX + 'code-line')
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
		<code @click=${() => this.set_copied()}>${this.text} ${this.is_copied ? html`&#9989;` : html`&#128203;`}</code>
		`;
	}
}

@customElement(Enums.default.COMPONENT_PREFIX + 'tag')
export class WPTag extends WPSizeable {

	@property()
	type: TagType = 'default';

	static override styles = [CSS_RESETS, css`
	:host {
        background-color: var(--wp-primary);
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        color: var(--wp-btn-txt-00);
        border-radius: calc(var(--wp-border-radius) * 1.25);
        display: inline-block;
        padding: 0.35em;
        width: fit-content;
    }
	`];
    @property() href?: string;

    override render() {
        if (this.href) {
            return html`
                <a href=${this.href} class="wp-tag wp-tag-${this.size}">
                    <slot></slot>
                </a>
            `;
        }
        return html`
            <span class="wp-tag wp-tag-${this.size}">
                <slot></slot>
            </span>
        `;
    }
}
