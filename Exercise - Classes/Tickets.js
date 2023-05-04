function ticketSorter(tickets, sorting) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];

  tickets.map((el) => {
    let [destination, price, status] = el.split("|");
    price = Number(price);
    result.push(new Ticket(destination, price, status));
  });
  let criteria = sorting;
  return result.sort((a, b) => {
    if (typeof a[criteria] === "number") {
      return a[criteria] - b[criteria];
    } else {
      return a[criteria].localeCompare(b[criteria]);
    }
  });
}
ticketSorter(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
