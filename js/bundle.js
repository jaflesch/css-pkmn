var app = new Vue({
  	el: '#app',
  	data: {
    	message: 'Pika pi!',

  		grid: {
  			size: 640,
  			length: 96
  		}
  	},
  	methods: {
  		setBGColor: function() {
  			var rgb = [this.rand(0, 255), this.rand(0, 255), this.rand(0, 255)];  			
  			console.log(rgb);
  			document.getElementsByTagName('html')[0].style.backgroundColor = "rgb(" + rgb + ")";
  		},

  		pixelGridStyle: function(type) {
	  		var proportion = this.grid.length + '%';

			return {
				height: proportion,
				paddingBottom: (type == 'line') ? '0' : proportion
			};
		},
		
		mapGrid: function(line, column) {
			var length = this.grid.length;
			var target = "poke-img";
			var img = document.getElementById(target);
			var canvas = document.createElement('canvas');
			
			canvas.width = img.width;
			canvas.height = img.height;
			canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
			
			var rgba = canvas.getContext('2d').getImageData(line - 1, column - 1, 1, 1).data;
			var color = "rgba(" + rgba.join(',') + ")";
			
			switch(color) {
				case '0':
				case ''	: return { backgroundColor: 'initial' };
				default	: return { backgroundColor: color };
			}
		},
		
		rand: function(min, max) {
			min = Math.ceil(min);
  			max = Math.floor(max);
  			
  			return Math.floor(Math.random() * (max - min)) + min;
		}
  	},
  	created: function() { this.setBGColor(); }
})