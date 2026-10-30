import {useEffect, useState, type FormEvent} from 'react';

export function PromoDiscountWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [isOpen]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Connect to backend / newsletter API to actually claim the discount.
    // Capture the email and issue a unique 10% off code here.
    console.warn('Claim discount submitted with email:', email);
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating button */}
      {!hidden && (
        <button
          type="button"
          className="promo-widget-float"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls="promo-widget-modal"
          onClick={() => {
            // TODO: Connect toggle handler to backend/state management for discount eligibility tracking.
            setIsOpen((prev) => !prev);
          }}
        >
          {/* Text label */}
          GET 10% OFF
          {/* Close / hide button */}
          <button
            type="button"
            className="promo-widget-hide"
            aria-label="Hide discount button"
            onClick={(event) => {
              event.stopPropagation();
              // TODO: Wire dismiss handler to persist dismissed state and optionally track impression.
              setIsOpen(false);
              setHidden(true);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </button>
      )}

      {/* Hidden state indicator */}
      {hidden && (
        <button
          type="button"
          className="promo-widget-show"
          aria-label="Show discount button"
          onClick={() => {
            // TODO: Connect show handler to restore dismissed discount widget from state.
            setHidden(false);
          }}
        >
          10% Off
        </button>
      )}

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="promo-widget-backdrop"
          data-open="true"
          role="button"
          aria-label="Close discount modal"
          tabIndex={0}
          onClick={() => setIsOpen(false)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setIsOpen(false);
            }
          }}
        >
          <div
            className="promo-widget-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-widget-heading"
          >
            <button
              type="button"
              className="promo-widget-close"
              aria-label="Close discount modal"
              onClick={() => setIsOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>

            {!submitted ? (
              <form className="promo-widget-form" onSubmit={handleSubmit}>
                <h2 id="promo-widget-heading" className="promo-widget-heading">
                  Unlock 10% Off Your First Order
                </h2>
                <p className="promo-widget-description">
                  Join our list and receive a welcome discount.
                </p>
                <div className="promo-widget-field">
                  <label htmlFor="promo-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="promo-email"
                    type="email"
                    className="promo-widget-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <button type="submit" className="promo-widget-submit">
                  Claim Discount
                </button>
                {/* TODO: Wire up backend submission so the discount code is actually issued and delivered. */}
              </form>
            ) : (
              <div className="promo-widget-success">
                <svg
                  className="promo-widget-success-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3 className="promo-widget-success-heading">
                  Check your inbox!
                </h3>
                <p className="promo-widget-success-text">
                  Your 10% off code is on its way.
                </p>
                <button
                  type="button"
                  className="promo-widget-dismiss"
                  onClick={() => {
                    setSubmitted(false);
                    setIsOpen(false);
                  }}
                >
                  Close
                </button>
                {/* TODO: Persist claimed discount / apply cart discount logic once backend is connected. */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
