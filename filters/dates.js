/*
  A date formatter filter for Nunjucks
*/
module.exports = function(date) {
  var month = [
     "Січня",
     "Лютого",
     "Березня",
     "Квітня",
     "Травня",
     "Червня",
     "Липня",
     "Серпня",
     "Вересня",
     "Жовтня",
     "Листопада",
     "Грудня"
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
  return month[d.getDate()] + " " + d.getMonth() + " " +d.getUTCFullYear();
}
