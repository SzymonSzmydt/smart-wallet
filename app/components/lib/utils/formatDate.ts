export const formatDate = () =>
  new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date());
