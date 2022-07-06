var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import txtCSS from './txt.css';
import { customElement, LitElement, Enums, html, } from '../../globals/exports';
let WPTxt = class WPTxt extends LitElement {
    render() {
        return html `
			<p>
				<slot></slot>
			</p>
		`;
    }
};
WPTxt.styles = [txtCSS];
WPTxt = __decorate([
    customElement(Enums.default.COMPONENT_PREFIX + 'text-content')
], WPTxt);
export { WPTxt };
