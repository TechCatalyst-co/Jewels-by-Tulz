import {useEffect, useState, type FormEvent} from 'react';

export function FreeGiftModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [isOpen, onClose]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Connect to backend / newsletter API to actually claim the free gift.
    // Capture the email and issue the free surprise gift here.
    console.warn('Free gift signup submitted with email:', email);
    setSubmitted(true);
  };

  return (
    <>
      {/* Modal overlay */}
      {isOpen && (
        <div
          className="free-gift-modal-backdrop"
          data-open="true"
          role="button"
          aria-label="Close free gift modal"
          tabIndex={0}
          onClick={onClose}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              onClose();
            }
          }}
        >
          <div
            className="free-gift-modal-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="free-gift-modal-heading"
          >
            <button
              type="button"
              className="free-gift-modal-close"
              aria-label="Close free gift modal"
              onClick={onClose}
            >
              <span aria-hidden="true">×</span>
            </button>

            {!submitted ? (
              <form className="free-gift-modal-form" onSubmit={handleSubmit}>
                <h2 id="free-gift-modal-heading" className="free-gift-modal-heading">
                  Claim Your Free Surprise Gift
                </h2>
                <p className="free-gift-modal-description">
                  Join our email list and receive a free surprise gift with any purchase.
                </p>
                <div className="free-gift-modal-field">
                  <label htmlFor="free-gift-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="free-gift-email"
                    type="email"
                    className="free-gift-modal-input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <button type="submit" className="free-gift-modal-submit">
                  Claim Free Gift
                </button>
                {/* TODO: Wire up backend submission so the free gift is actually issued and delivered. */}
              </form>
            ) : (
              <div className="free-gift-modal-success">
                <svg
                  className="free-gift-modal-success-icon"
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
                <h3 className="free-gift-modal-success-heading">
                  Check your inbox!
                </h3>
                <p className="free-gift-modal-success-text">
                  Your free surprise gift is on its way.
                </p>
                <button
                  type="button"
                  className="free-gift-modal-dismiss"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                >
                  Close
                </button>
                {/* TODO: Persist claimed gift / apply cart discount logic once backend is connected. */}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
