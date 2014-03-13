/**
 * xhr
 */
;(function(w, d, undefined) {
	'use strict';

	d.addEventListener('DOMContentLoaded', function() {
		getJSON();
		getImage();
	}, false);

	var getJSON = function() {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState === 4 && xhr.status === 200) {
				var json = JSON.parse(xhr.responseText),
					log = d.getElementById('log-json'),
					li = d.createElement('li'),
					text = d.createTextNode('name: ' + json.content.name + ', id: ' + json.content.id);

				li.appendChild(text);
				log.appendChild(li);

				json.content.list.forEach(function(item, i) {
					var li = d.createElement('li'),
						text = d.createTextNode(item);
					li.appendChild(text)
					log.appendChild(li);
				});
			}
		};

		xhr.open('GET', 'stub.json');
		xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
		xhr.send(null);
	};

	w.BlobBuilder = w.MozBlobBuilder || w.Blob || w.BlobBuilder;
	var getImage = function() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'code.jpg', true);
		xhr.responseType = 'blob';

		xhr.onreadystatechange = function(e) {
			if (this.readyState === 4 && this.status === 200) {
				var blob = this.response;
				var reader = new FileReader();
				var log = d.getElementById('log-image');
				reader.onload = function(e) {
					var img = d.createElement('img');
					img.src = e.target.result;
					img.style.width = 250 + 'px';
					log.appendChild(img);
				};
				reader.readAsDataURL(blob);
			}
		}
		xhr.send(null);
	};

})(this, this.document);

