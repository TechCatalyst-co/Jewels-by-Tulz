import {Suspense, useRef, useState} from 'react';
import {Await, NavLink, useAsyncValue, useNavigate} from 'react-router';
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

  return (
    <header className="header">
      <HeaderMenuMobileToggle />
      <NavLink className="header-brand" prefetch="intent" to="/" end>
        <strong>Jewels by Tulz</strong>
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <HeaderCtas cart={cart} isLoggedIn={isLoggedIn} />
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
  const [shopOpen, setShopOpen] = useState(false);
  const shopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openShopMenu = () => {
    if (shopCloseTimer.current) clearTimeout(shopCloseTimer.current);
    setShopOpen(true);
  };
  const scheduleShopMenuClose = () => {
    if (shopCloseTimer.current) clearTimeout(shopCloseTimer.current);
    shopCloseTimer.current = setTimeout(() => setShopOpen(false), 250);
  };

  const shopMenu = (
    <div
      className={`header-shop-menu${shopOpen ? ' is-open' : ''}`}
      onMouseEnter={openShopMenu}
      onMouseLeave={scheduleShopMenuClose}
      onFocus={openShopMenu}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setShopOpen(false);
        }
      }}
    >
      <button
        aria-expanded={shopOpen}
        aria-haspopup="true"
        className={`header-menu-item header-shop-trigger${shopOpen ? ' is-open' : ''}`}
        onClick={() => setShopOpen((open) => !open)}
        type="button"
      >
        Shop
      </button>
      <div
        className="header-mega-menu"
        aria-label="Shop collections and categories"
        onMouseEnter={openShopMenu}
        onMouseLeave={scheduleShopMenuClose}
      >
        <div className="header-mega-menu-inner">
          <section className="header-mega-column" aria-labelledby="header-mega-collections">
            <h2 id="header-mega-collections">Collections</h2>
            <NavLink onClick={close} prefetch="intent" to="/collections/all">All</NavLink>
            <NavLink onClick={close} prefetch="intent" to="/collections/jewels-by-tulz">Jewels by Tulz</NavLink>
            <NavLink onClick={close} prefetch="intent" to="/collections/jewels-by-tulz-too">Jewels by Tulz Too</NavLink>
          </section>
          <section className="header-mega-column" aria-labelledby="header-mega-shop-all">
            <h2 id="header-mega-shop-all">Shop all</h2>
            <ul>
              {['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Chains'].map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );

  return (
    <nav
      className={className}
      role="navigation"
      aria-label={viewport === 'desktop' ? 'Main navigation' : 'Mobile navigation'}
    >
      {viewport === 'mobile' && (
        <>
          <NavLink className="header-menu-item" end onClick={close} prefetch="intent" to="/">Home</NavLink>
          <NavLink className="header-menu-item" end onClick={close} prefetch="intent" to="/collections/all">All</NavLink>
          <NavLink className="header-menu-item" end onClick={close} prefetch="intent" to="/collections/jewels-by-tulz">Jewels by Tulz</NavLink>
          <NavLink className="header-menu-item" end onClick={close} prefetch="intent" to="/collections/jewels-by-tulz-too">Jewels by Tulz Too</NavLink>
        </>
      )}
      {viewport === 'desktop' && <>
        <NavLink className="header-menu-item" end prefetch="intent" to="/">Home</NavLink>
        <NavLink className="header-menu-item" end prefetch="intent" to="/collections/jewels-by-tulz">Jewels by Tulz</NavLink>
        <NavLink className="header-menu-item" end prefetch="intent" to="/collections/jewels-by-tulz-too">Jewels by Tulz Too</NavLink>
        {shopMenu}
      </>}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (['contact', 'catalog', 'home', 'jewels by tulz', 'jewels by tulz too', 'shop'].includes(item.title.toLowerCase())) return null;
        const itemUrl = item.url;
        if (typeof itemUrl !== 'string' || itemUrl.length === 0) return null;

        const url = resolveMenuItemUrl(
          {...item, url: itemUrl},
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
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  cart,
  isLoggedIn,
}: Pick<HeaderProps, 'cart' | 'isLoggedIn'>) {
  return (
    <nav className="header-ctas" aria-label="Store actions">
      <SearchToggle />
      <WishlistLink />
      <AccountLink isLoggedIn={isLoggedIn} />
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
      <MenuIcon />
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
      <SearchIcon />
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
      className="header-icon-link header-cart-link"
      aria-label={`Shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`}
    >
      <BagIcon />
      <span className="header-cart-count" aria-hidden="true">{count}</span>
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

function WishlistLink() {
  return (
    <NavLink className="header-icon-link" to="/pages/wishlist" aria-label="Wishlist">
      <HeartIcon />
    </NavLink>
  );
}

function AccountLink({isLoggedIn}: Pick<HeaderProps, 'isLoggedIn'>) {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<AccountButton loggedIn={false} onNavigate={navigate} />}>
      <Await resolve={isLoggedIn}>
        {(loggedIn) => <AccountButton loggedIn={loggedIn} onNavigate={navigate} />}
      </Await>
    </Suspense>
  );
}

function AccountButton({loggedIn, onNavigate}: {loggedIn: boolean; onNavigate: (to: string) => void}) {
  return (
    <button className="header-icon-link reset" onClick={() => onNavigate(loggedIn ? '/account' : '/account')} aria-label={loggedIn ? 'Account' : 'Sign in'}>
      <UserIcon />
    </button>
  );
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.4"/><path d="m15.5 15.5 4.2 4.2"/></svg>;
}
function HeartIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 8.8c0 4.1-8.3 10-8.3 10s-8.3-5.9-8.3-10a4.6 4.6 0 0 1 8.3-2.7 4.6 4.6 0 0 1 8.3 2.7Z"/></svg>;
}
function UserIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.2"/><path d="M5.5 20c.4-3.8 2.7-5.8 6.5-5.8s6.1 2 6.5 5.8Z"/></svg>;
}
function BagIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 12H4L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>;
}
function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
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
