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
  var d = new Date(date);
  return month[d.getMonth()] + " " + d.getDate() + " " +d.getUTCFullYear();
}
