import { WPExpando } from './Expando';
import { WPButton } from './Button';
import { WPLink } from './Link';
import { WPImg } from './Image';
import { WPNav } from './Nav';
import { WPLoading } from './Loading';
import { WPFtr } from './Footer';
// import { WPDropdown, WPDropdownItem } from './dropdown';
import { WPDivider } from './Divider';
import { WPVideo } from './Video';
import { WPFadeUp } from './Transitions';
import { WPBanner } from './Banner';
import { WPContainer } from './Container';
// import { WPCarousel, WPCarouselItem } from './carousel';
// import { WPEditableList, WPEditableListItem } from './editable-list';
// import { WPToaster, WPToast } from './toast';
import { WPModal } from './Modal';
// import { WPLayout, WPCard, WPGrid, WPFlex, WPSection } from './container';
// import {
// 	WPSidebar,
// 	WPSidebarItem,
// 	WPSidebarMenu,
// 	WPSidebarMenuItem,
// } from './sidebar';
import { WPTag } from './Tag';
import { WPCode } from './Code';
import { WPNavItem } from './Nav/nav-item';
import { WPCard } from './Card';
import { WPTypography } from './Typography';
// import { WPTextInput, WPDateInput } from './input';
/**
 * Global Map For Packaged Tags
 */
declare global {
	interface HTMLElementTagNameMap {
		'wp-code': WPCode;
		'wp-divider': WPDivider;
		'wp-typography': WPTypography;
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
		'wp-card': WPCard;
		'wp-nav': WPNav;
		'wp-nav-item': WPNavItem;
		'wp-button': WPButton;
		'wp-tag': WPTag;
		'wp-link': WPLink;
		'wp-img': WPImg;
		'wp-ftr': WPFtr;
		// 'wp-layout': WPLayout;
	}
}

export * from './Button';
export * from './Link';
export * from './Container';
export * from './Image';
export * from './Loading';
export * from './Nav';
export * from './Nav/nav-item';
export * from './Card';
// export * from './input';
// export * from './sidebar';
// export * from './ftr';
export * from './Tag';
export * from './Code';
export * from './Toast';
// export * from './dropdown';
export * from './Video';
export * from './Modal';
// export * from './editable-list';
// export * from './carousel';
export * from './Transitions';
export * from './Expando';
export * from './Banner';
export * from './Divider';
export * from './Typography';