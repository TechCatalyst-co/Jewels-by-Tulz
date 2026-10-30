import {useState} from 'react';

import {FreeGiftModal} from '~/components/FreeGiftModal';

export function AnnouncementBanner() {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: wire email signup modal trigger here — the FreeGiftModal below handles
  // the open/close state and email capture form once backend wiring exists.
  // TODO: connect newsletter state / email capture handler to a backend
  // endpoint or Shopify customer account integration after sign-up.
  return (
    <div className="announcement-banner" role="region" aria-label="Announcement">
      <button
        className="announcement-link"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="free-gift-modal"
        aria-label="SIGN UP FOR A FREE SURPRISE GIFT WITH ANY PURCHASE"
        onClick={(event) => {
          event.preventDefault();
          setIsOpen((prev) => !prev);
        }}
      >
        SIGN UP FOR A FREE SURPRISE GIFT WITH ANY PURCHASE
      </button>
      <FreeGiftModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
