import { enums, WPSizeable, CSS_RESETS } from '../../globals/exports';
import { when } from 'lit/directives/when.js';
import { html } from 'lit';
import {
	customElement,
	property,
	state,
	query,
	queryAssignedElements,
} from 'lit/decorators.js';
import { WPDropdownItem } from './dropdown-item';
import dropdownCSS from './style.css';
import {
	WPDropdownChangeEventDetail,
	WPDropdownChangeEventSignature,
} from './defs';

@customElement(enums.COMPONENT_PREFIX + 'dropdown')
export class WPDropdown extends WPSizeable {
	static override styles = [CSS_RESETS, dropdownCSS];

	@property()
		default_value = 'Choose an Option';

	@state()
		selected_value: string;

	@query('.wp-dropdown-menu')
		menu_el: HTMLElement;

	@queryAssignedElements()
		menu_items: WPDropdownItem[];

	init() {
		this.selected_value = this.default_value;
	}

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener('DOMContentLoaded', () => this.init());
		this.addEventListener('click', e => {
			const target = <HTMLElement>e.target;
			if (target.nodeName === 'WP-DROPDOWN-ITEM') {
				const t = <WPDropdownItem>target;
				// console.log(t.value);

				this.toggle_menu();
				const customEvent = new CustomEvent<WPDropdownChangeEventDetail>(
					WPDropdownChangeEventSignature,
					{
						detail: {
							old_val: this.selected_value,
							new_val: t.value,
							el: this,
						},
					}
				);
				window.dispatchEvent(customEvent);
				this.selected_value = t.value;
				return;
			}
			this.toggle_menu();
		});
	}

	toggle_menu() {
		if (!this.menu_el.classList.contains('wp-dropdown-menu--active')) {
			this.menu_el.classList.add('wp-dropdown-menu--active');
			return;
		}
		this.menu_el.classList.remove('wp-dropdown-menu--active');
		return;
	}

	render_state(size_class: string) {
		return when(
			this.selected_value === this.default_value,
			() => html`
				<div class=${size_class}>
					<div class="wp-dropdown-selected">${this.default_value}</div>
					<div class="wp-dropdown-menu">
						<slot></slot>
					</div>
				</div>
			`,
			() => html`
				<div class=${size_class}>
					<div class="wp-dropdown-selected">${this.selected_value}</div>
					<div class="wp-dropdown-menu">
						<slot></slot>
					</div>
				</div>
			`
		);
	}

	render() {
		return this.render_state('wp-dropdown wp-dropdown--' + this.size);
	}
}
