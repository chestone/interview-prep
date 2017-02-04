// Implement $(‘div span’) DOM selection.
function $(selector) {
  var results = [];
  var selectArr = selector.split(' ');
  var initial = document.getElementsByTagName(selectArr[0]);
  function select(currArr, currElem, remains) {
    if (!remains) {
      results.push(current);
    } else {
      select(current.concat(currElem.getElementsByTagName(remains[0])), remains.slice(1));
    }
  }
  initial.forEach(function(elem) {
    select([], elem, selectArr.slice(1))
  });

  return results;
};
