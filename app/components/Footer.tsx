import {Suspense} from 'react';
import {Await} from 'react-router';
import {FaInstagram, FaFacebook, FaPinterest} from 'react-icons/fa';
import type {FooterQuery, HeaderQuery} from 'storefrontapi.generated';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
            <div className="footer-columns">
              <div className="footer-column">
                <h3 className="footer-heading">Help &amp; Info</h3>
                <ul className="footer-link-list">
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Customer Support
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Shipping
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Returns
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      FAQs
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Account
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Privacy Settings
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Sitemap
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Newsletter</h3>
                <p className="footer-newsletter-incentive">
                  Subscribe and get 10% off your first order
                </p>
                <form
                  className="footer-newsletter-form"
                  onSubmit={(event) => {
                    event.preventDefault();
                    // TODO: connect newsletter subscription state to the mailing
                    // list API (capture email, apply 10% discount incentive).
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                  />
                  <button
                    type="submit"
                    className="footer-newsletter-button"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>

              <div className="footer-column">
                <h3 className="footer-heading">Contact</h3>
                <ul className="footer-link-list">
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Store Hours
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      About Us
                    </button>
                  </li>
                  <li>
                    <button type="button" onClick={(event) => placeholderClick(event)}>
                      Press
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-subbar">
              <span className="footer-copyright">
                &copy; {/* TODO: wire dynamic copyright date / legal route */}
                Jewels by Tulz
              </span>
              <button
                type="button"
                className="footer-terms-link"
                onClick={(event) => placeholderClick(event)}
              >
                Terms and Policies
              </button>
              <div className="footer-social">
                <button
                  type="button"
                  aria-label="Instagram"
                  onClick={(event) => placeholderClick(event)}
                >
                  <FaInstagram size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Facebook"
                  onClick={(event) => placeholderClick(event)}
                >
                  <FaFacebook size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Pinterest"
                  onClick={(event) => placeholderClick(event)}
                >
                  <FaPinterest size={18} />
                </button>
              </div>
            </div>
          </footer>
        )}
      </Await>
    </Suspense>
  );
}

function placeholderClick(event: React.MouseEvent) {
  event.preventDefault();
  // TODO: wire up click handler for placeholder link/button
}
