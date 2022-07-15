import CARD_CSS from './style.css';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
	queryAssignedElements,
	CSS_RESETS,
	queryAll
} from '../../../globals/exports';

const a_bool = { attribute: true, type: Boolean };
@customElement(Enums.default.COMPONENT_PREFIX + 'card')
export class WPCard extends LitElement {

	static override styles = [CSS_RESETS, CARD_CSS];

	@property(a_bool)
	rounded?: boolean = false;

	@property()
	img_url?: string;

	@property()
	img_alt: string = '';

	@property()
	hdr?: string;

	@queryAll('.wp-card-slot')
	_children: HTMLElement[];

	constructor() {
		super();
	}

	card_content() {
		return html`
		<div class="wp-card-title">${this.hdr}</div>
		`;
	}

	render_card_default(classes: string) {
		if(this.img_url) {
			return html`
			<div class=${classes}>
				<figure>
					<img src=${this.img_url} alt=${this.img_alt}>
					<figcaption>
						${this.card_content()}
					</figcaption>
				</figure>
				<div class="wp-card-slot">
					<slot></slot>
				</div>
			</div>
			`;
		}
		return html`
		<div class=${classes}>
			${this.card_content()}
			<div class="wp-card-slot">
				<slot></slot>
			</div>
		</div>
		`;
	}
	render() {
		return this.rounded ? this.render_card_default("wp-card wp-card--rounded") : this.render_card_default("wp-card");
	}
};
