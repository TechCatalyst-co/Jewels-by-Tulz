import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from 'react-router';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {menu} = header;
  const menuItems = (menu || FALLBACK_HEADER_MENU).items;
  const contactItem = menuItems.find(
    (item) => item.title.toLowerCase() === 'contact' && item.url,
  );
  const contactUrl = contactItem
    ? resolveMenuItemUrl(
        contactItem,
        header.shop.primaryDomain.url,
        publicStoreDomain,
      )
    : '/pages/contact';

  return (
    <header className="header">
      <NavLink prefetch="intent" to="/" end>
        <strong>Jewels by Tulz</strong>
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <HeaderCtas cart={cart} contactUrl={contactUrl} />
    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav
      className={className}
      role="navigation"
      aria-label={viewport === 'desktop' ? 'Main navigation' : 'Mobile navigation'}
    >
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (item.title.toLowerCase() === 'contact') return null;
        if (!item.url) return null;

        const url = resolveMenuItemUrl(
          item,
          primaryDomainUrl,
          publicStoreDomain,
        );
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={viewport === 'desktop' ? activeLinkStyle : undefined}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
      {viewport === 'desktop' && (
        <>
          <span className="header-menu-sample-item">Rings</span>
          <span className="header-menu-sample-item">Necklaces</span>
          <span className="header-menu-sample-item">Earrings</span>
          <span className="header-menu-sample-item">Bracelets</span>
        </>
      )}
    </nav>
  );
}

function HeaderCtas({
  cart,
  contactUrl,
}: Pick<HeaderProps, 'cart'> & {contactUrl: string}) {
  return (
    <nav className="header-ctas" aria-label="Store actions">
      <HeaderMenuMobileToggle />
      <NavLink
        className="header-contact-link"
        prefetch="intent"
        to={contactUrl}
        style={activeLinkStyle}
      >
        Contact
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
      aria-label="Open menu"
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-search-toggle reset"
      onClick={() => open('search')}
      aria-label="Open search"
    >
      Search
    </button>
  );
}

function CartBadge({count}: {count: number}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart <span aria-label={`(items: ${count})`}>{count}</span>
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

function resolveMenuItemUrl(
  item: {url: string},
  primaryDomainUrl: string,
  publicStoreDomain: string,
) {
  return item.url.includes('myshopify.com') ||
    item.url.includes(publicStoreDomain) ||
    item.url.includes(primaryDomainUrl)
    ? new URL(item.url).pathname
    : item.url;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: 'white',
  };
}
