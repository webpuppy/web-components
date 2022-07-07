var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, LitElement, Enums, html, property, } from '../../globals/exports';
let WPLayout = class WPLayout extends LitElement {
    constructor() {
        super(...arguments);
        this.type = 'sidebar-0';
    }
    /**
     *
     * todo: setup dynamic grid sizing on children
     */
    render() {
        return html `
		<div class="wp-layout">
			<header class="wp-layout__hdr">

			</header>
			<main class="wp-layout__main">

			</main>
		</div>
		`;
    }
};
__decorate([
    property()
], WPLayout.prototype, "type", void 0);
WPLayout = __decorate([
    customElement(Enums.default.COMPONENT_PREFIX + 'layout')
], WPLayout);
export { WPLayout };
