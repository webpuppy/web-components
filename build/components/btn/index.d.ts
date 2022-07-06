import { LitElement } from '../../globals/exports';
import { CBButtonType } from './defs';
export declare class WPBtn extends LitElement {
    use_icon: boolean;
    type: CBButtonType;
    text: string;
    static styles: import("lit").CSSResult[];
    get_icon(): "" | "✓" | "x";
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=index.d.ts.map