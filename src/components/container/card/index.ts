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
import { CardType } from './defs';

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
	type: CardType = 'image-slot';

	@property()
	hdr?: string;

	@queryAll('.wp-card-slot')
	_children: HTMLElement[];

	constructor() {
		super();
	}

	card_content() {
		if(!this.hdr) {
			return html``;
		}
		return html`
		<div class="wp-card-title">${this.hdr}</div>
		`;
	}

	card_image_content() {
		if(this.img_url) {
			return html`
			<figure>
				<img height="144" width="144" src=${this.img_url} alt=${this.img_alt}>
				<figcaption>
					${this.card_content()}
				</figcaption>
			</figure>
			`;
		}
		return this.card_content();
	}

	render_card_default(classes: string) {
		return html`
			<div class=${classes}>
				${this.card_image_content()}
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
