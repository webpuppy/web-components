import { DEFAULT_LAYOUT_STYLES } from './style.css';
import { LayoutType } from './defs';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property
} from '../../../globals/exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'layout')
export class WPLayout extends LitElement {

	static override styles = [DEFAULT_LAYOUT_STYLES];

    @property()
    type: LayoutType = 'topbar-0';

    private _convertTypeToClass() {
        switch (this.type) {
            case 'topbar-1':
                return 'wp-layout-tbr-1';
			case 'sidebar-0':
				return 'wp-layout-sbr-0';
            case 'sidebar-1':
                return 'wp-layout-sbr-1';
            default:
                return 'wp-layout-tbr-0';
        }
    }

    render() {
        return html`
            <div class="${this._convertTypeToClass()}">
				<slot name="nav"></slot>
				<slot name="main"></slot>
            </div>
        `;
    }
}
