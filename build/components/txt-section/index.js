var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import txtCSS from './txt.css';
import { customElement, LitElement, Enums, html, property, } from '../../globals/exports';
let WPTxt = class WPTxt extends LitElement {
    constructor() {
        super(...arguments);
        this.size = 'md';
    }
    render() {
        return html `
			<p class="wp-txt-${this.size}">
				<slot></slot>
			</p>
		`;
    }
};
WPTxt.styles = [txtCSS];
__decorate([
    property()
], WPTxt.prototype, "size", void 0);
WPTxt = __decorate([
    customElement(Enums.default.COMPONENT_PREFIX + 'txt')
], WPTxt);
export { WPTxt };
let WPHdr = class WPHdr extends LitElement {
    render() {
        return html `
			<header>
				<slot></slot>
			</header>
		`;
    }
};
WPHdr.styles = [txtCSS];
WPHdr = __decorate([
    customElement(Enums.default.COMPONENT_PREFIX + 'hdr')
], WPHdr);
export { WPHdr };
