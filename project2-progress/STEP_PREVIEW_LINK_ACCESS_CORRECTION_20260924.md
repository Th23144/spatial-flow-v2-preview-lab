# Preview-link Access Correction — 2026-09-24

The user reported that all three preview links in the previous handoff failed to open.

Cause:
the chat-rendered htmlpreview.github.io query-style links were being rewritten/encoded in a way that broke the target URL.

Correction:
- stop using htmlpreview query-style links for this review batch;
- use direct raw.githack branch URLs for standalone HTML previews;
- update the Search 1024 audit wrapper so its internal iframe also uses raw.githack rather than an htmlpreview query URL.

Affected review artifacts only:
- Contact Wishlist-led 02
- Search 1024 audit
- About Exact-source Harmonized 02

No visual design or production code changed.
NO PRODUCTION MAPPING.
