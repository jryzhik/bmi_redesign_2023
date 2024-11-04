export function getDateSorting(happeningsArray) {
   return happeningsArray.sort((a, b) => new Date(a.happeningDatetime) - new Date(b.happeningDatetime));
}
