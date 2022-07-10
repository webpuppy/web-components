import { DEFAULT_LAYOUT_STYLES } from './layout.css';
import { LayoutType } from './defs';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
    classMap,
    when,
} from '../../../globals/exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'layout')
export class WPLayout extends LitElement {

	static override styles = [DEFAULT_LAYOUT_STYLES];

    @property()
    type: LayoutType = 'topbar-0';

    private _convertTypeToClass() {
        switch (this.type) {
            case 'topbar-0':
                return 'wp-layout-tbr-0';
            case 'topbar-1':
                return 'wp-layout-tbr-1';
            case 'sidebar-1':
                return 'wp-layout-sbr-1';
            default:
                return 'wp-layout-sbr-0';
        }
    }
    /**
     *
     * todo: setup dynamic grid sizing on children
     */

    render() {
        return html`
            <div class="${this._convertTypeToClass()}">
				<slot name="nav"></slot>
				<slot name="main"></slot>
            </div>
        `;
    }
}