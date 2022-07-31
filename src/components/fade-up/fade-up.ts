import { CSSResultGroup } from 'lit';
import {
    Enums,
    when,
	state,
	query,
	queryAssignedElements,
	CSS_RESETS,
} from '../../globals/exports';
import {
	customElement,
    LitElement,
    html,
    property,
} from 'lit-exports';
import style from './fade-up.css';

@customElement(Enums.default.COMPONENT_PREFIX + 'fade-up')
export class WPFadeUp extends LitElement {

	static override styles = [CSS_RESETS, style];

	render() {
		return html`
		<slot></slot>
		`;
	}
}
