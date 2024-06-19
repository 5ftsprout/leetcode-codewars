//Remove All The Marked Elements of a List
Array.prototype.remove_ = function(integer_list, values_list){
    for (let i in values_list){
      integer_list = integer_list.filter((num) => num !== values_list[i])
    }
    return integer_list
}





//Top Relevant Solution
Array.prototype.remove_ = function(integer_list, values_list){
	return integer_list.filter(function (element) {
  	return values_list.indexOf(element) === -1;
  });
}