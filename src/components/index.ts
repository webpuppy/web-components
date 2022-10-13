import { WPExpando } from './expando';
import { WPBtn } from './btn';
import { WPLink } from './link';
import { WPImg } from './img';
import { WPNav } from './nav';
import { WPLoading } from './loading';
import { WPFtr } from './ftr';
// import { WPDropdown, WPDropdownItem } from './dropdown';
import { WPVideo } from './video';
import { WPFadeUp } from './fade-up';
import { WPBanner } from './banner';
import { WPContainer } from './container';
// import { WPCarousel, WPCarouselItem } from './carousel';
// import { WPEditableList, WPEditableListItem } from './editable-list';
// import { WPToaster, WPToast } from './toast';
import { WPModal } from './modal';
// import { WPLayout, WPCard, WPGrid, WPFlex, WPSection } from './container';
// import {
// 	WPSidebar,
// 	WPSidebarItem,
// 	WPSidebarMenu,
// 	WPSidebarMenuItem,
// } from './sidebar';
import { WPCode, WPTag } from './tag';
import { WPNavItem } from './nav/nav-item';
// import { WPTextInput, WPDateInput } from './input';
/**
 * Global Map For Packaged Tags
 */
declare global {
	interface HTMLElementTagNameMap {
		'wp-banner': WPBanner;
		'wp-expando': WPExpando;
		'wp-fade-up': WPFadeUp;
		// 'wp-carousel-item': WPCarouselItem;
		// 'wp-carousel': WPCarousel;
		// 'wp-editable-list-item': WPEditableListItem;
		// 'wp-editable-list': WPEditableList;
		'wp-modal': WPModal;
		'wp-video': WPVideo;
		'wp-container': WPContainer;
		// 'wp-dropdown': WPDropdown;
		// 'wp-dropdown-item': WPDropdownItem;
		// 'wp-toast': WPToast;
		// 'wp-toaster': WPToaster;
		'wp-loading': WPLoading;
		// 'wp-date-input': WPDateInput;
		// 'wp-text-input': WPTextInput;
		'wp-code-line': WPCode;
		// 'wp-sidebar-item': WPSidebarItem;
		// 'wp-sidebar': WPSidebar;
		// 'wp-sidebar-menu': WPSidebarMenu;
		// 'wp-sidebar-menu-item': WPSidebarMenuItem;
		// 'wp-section': WPSection;
		// 'wp-flex': WPFlex;
		// 'wp-grid': WPGrid;
		// 'wp-card': WPCard;
		'wp-nav': WPNav;
		'wp-nav-item': WPNavItem;
		'wp-btn': WPBtn;
		'wp-tag': WPTag;
		'wp-link': WPLink;
		'wp-img': WPImg;
		'wp-ftr': WPFtr;
		// 'wp-layout': WPLayout;
	}
}

export * from './btn';
export * from './link';
export * from './container';
export * from './img';
export * from './loading';
export * from './nav';
export * from './nav/nav-item';
// export * from './input';
// export * from './sidebar';
// export * from './ftr';
export * from './tag';
export * from './toast';
// export * from './dropdown';
export * from './video';
export * from './modal';
// export * from './editable-list';
// export * from './carousel';
export * from './fade-up';
export * from './expando';
export * from './banner';
