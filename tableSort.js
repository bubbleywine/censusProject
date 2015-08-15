(function($) {
	$.fn.sortTable = function( config ) {
		var self = this;
		var _colNumbers = config.colIndex;
		var _sortFunctions = config.sortFunctions;
		var _className = config.sortableClassName;
		var _lastIndex = null;
		var _ascending = true;

		$.fn.extend({        
			sortColumn : function(sortIndex) {
				var htmlRows = $(self).find('tbody tr');
				var arrayToSort = [];
				$(htmlRows).each(function(){
					var colText = $(this).find('td')[_colNumbers[sortIndex]].innerHTML;
					var row = [colText, this];
					arrayToSort.push(row);
				});

		        arrayToSort.sort(_sortFunctions[sortIndex]);
		        if(sortIndex === _lastIndex){
		        	if(_ascending){
		        		arrayToSort.reverse();
		        		_ascending = false;
		        	} else {
		        		_ascending = true;
		        	}
		        } else {
		        	_ascending = true;
		        }

		        $(this).find('tbody').empty();
		        
		        for(var key in arrayToSort){
		            $(this).find('tbody').append(arrayToSort[key][1]);
		        }
		        _lastIndex = sortIndex;
		        return self;
	        }

		});
		
		var tableHeaders = $(this).find('thead th');

		var count = 0;
		tableHeaders.each(function(i, e) {
			for(var k in _colNumbers){
				if(i === _colNumbers[k]){
					var el = this;
					$(this).addClass(_className).css('cursor', 'pointer');
					(function(c) {
						$(el).click(function(){
							$(self).sortColumn(c);
						});					  
					})(count);
					count++;
				}
			}
		});
		return(this);
	};
})(jQuery);