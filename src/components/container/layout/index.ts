import { LAYOUT_STYLES } from './style.css';
import { LayoutType } from './defs';
import { enums, CSS_RESETS } from '../../../globals/exports';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement(enums.COMPONENT_PREFIX + 'layout')
export class WPLayout extends LitElement {
	static styles = [CSS_RESETS, LAYOUT_STYLES];

	@property()
		type: LayoutType = 'topbar-0';

	@property()
		fixed_box = false;

	private _convertTypeToClass() {
		const prefix_ = this.fixed_box ? 'wp-fixed-layout' : 'wp-layout-';
		switch (this.type) {
			case 'topbar-1':
				return prefix_ + 'tbr-1';
			case 'sidebar-0':
				return prefix_ + 'sbr-0';
			case 'sidebar-1':
				return prefix_ + 'sbr-1';
			default:
				return prefix_ + 'tbr-0';
		}
	}

	render_markup() {
		return html`
			<div class=${this._convertTypeToClass()}>
				<slot></slot>
			</div>
		`;
	}

	render() {
		if (this.type === 'sidebar-0') {
			return html`
				<style>
					:host {
						display: grid;
						grid-template-columns: 180px auto;
					}</style
				>${this.render_markup()}
			`;
		}
		return this.render_markup();
	}
}
