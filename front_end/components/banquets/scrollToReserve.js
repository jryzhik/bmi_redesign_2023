// The ticket section is #reserve. It used to be #tickets, so links already sent
// with #tickets now open at the top of the page like a regular visit.
// The Reserve buttons scroll here without adding a hash to the address bar,
// so a link copied from it opens at the top too.
export const scrollToReserve = (event) => {
  const section = document.getElementById('reserve');
  if (!section) return;
  event.preventDefault();
  // Line the section up under the fixed nav (its scroll-margin-top) the same way in
  // every browser, rather than trusting each one's scrollIntoView to honor the margin.
  const offset = parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
  window.scrollTo({top: section.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth'});
  // Keyboard users keep tabbing from the tickets, as with a normal link.
  if (event.detail === 0) section.focus({preventScroll: true});
};
