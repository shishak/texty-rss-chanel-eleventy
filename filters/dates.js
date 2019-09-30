/*
  A date formatter filter for Nunjucks
*/
module.exports = function(date) {
  var month = [
     "Січень",
     "Лютий",
     "Березень",
     "Квітень",
     "Може",
     "Червень",
     "Липень",
     "Серпень",
     "Вересень",
     "Жовтень",
     "Листопад",
     "Грудень"
  ];
  var ordinal = {
    1 : "",
    2 : "",
    3 : "",
    21 : "",
    22 : "",
    23 : "",
    31 : ""
  };
  var d = new Date(date);
  return month[d.getMonth()] + " " + d.getDate() + (ordinal[d.getDate()] || "") + " " +d.getUTCFullYear();
}
