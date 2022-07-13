import { LAYOUT_STYLES } from './style.css';
import { LayoutType } from './defs';
import {
    customElement,
    LitElement,
    Enums,
    html,
    property,
	CSS_RESETS
} from '../../../globals/exports';

@customElement(Enums.default.COMPONENT_PREFIX + 'layout')
export class WPLayout extends LitElement {

	static override styles = [CSS_RESETS, LAYOUT_STYLES];

    @property()
    type: LayoutType = 'topbar-0';

	@property()
	fixed_box = false;

    private _convertTypeToClass() {
		const prefix_ = this.fixed_box ? 'wp-fixed-layout' :'wp-layout-';
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

    render() {
        return html`
            <div class="${this._convertTypeToClass()}">
				<slot name="nav"></slot>
				<slot name="main"></slot>
				<slot name="footer"></slot>
            </div>
        `;
    }
}
