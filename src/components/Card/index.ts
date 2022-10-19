import CARD_CSS from './style.css';
import { enums, CSS_RESETS } from '../../globals/exports';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CardType } from './defs';

const a_bool = { attribute: true, type: Boolean };

/**
 * @since 0.0.0
 *
 * @version 0.0.0
 *
 * Defines a card component with a prestyled shadow
 * @param rounded - defines if the card is rounded or sharp cornered
 * @param imgUrl - defines the url of the card image
 * @param imgAlt - defines the alt text for the card image
 * @param type - defines the type of card layout
 */
@customElement(enums.COMPONENT_PREFIX + 'card')
export class WPCard extends LitElement {
	static override styles = [CSS_RESETS, CARD_CSS];

	@property(a_bool)
		rounded?: boolean = false;

	@property({ attribute: 'img-url' })
		imgUrl?: string;

	@property({ attribute: 'img-alt' })
		imgAlt = '';

	@property()
		type: CardType = 'image-slot';

	cardImageContent() {
		if (!this.imgUrl) {
			return html``;
		}
		return html`
			<figure>
				<img height="144" width="144" src=${this.imgUrl} alt=${this.imgAlt} />
				<figcaption>
					<slot name="caption"></slot>
				</figcaption>
			</figure>
		`;
	}

	renderCardDefault(classes: string) {
		return html`
			<div class=${classes}>
				${this.cardImageContent()}
				<div class="wp-card-slot">
					<slot></slot>
				</div>
			</div>
		`;
	}

	renderCard() {
		switch (this.type) {
			default:
				return this.rounded
					? this.renderCardDefault('wp-card wp-card--rounded')
					: this.renderCardDefault('wp-card');
		}
	}
	render() {
		return this.renderCard();
	}
}
