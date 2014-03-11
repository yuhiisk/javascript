/**
 * xhr
 */
;(function(w, d, undefined) {
	'use strict';

	d.addEventListener('DOMContentLoaded', function() {
		getData();
	}, false);

	var getData = function() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var json = JSON.parse(xhr.responseText);
				console.log(json);
				d.getElementById('log').innerHTML = 'name: ' + json.content.name + 'id:' + json.content.id;
				json.content.list.forEach(function(item, i) {
					console.log(item);
				});
			}
		};

		xhr.open('GET', 'stub.json');
		xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
		xhr.send(null);
	};

})(this, this.document);

