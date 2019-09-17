var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');

x = canv.width = window.innerWidth;
y = canv.height = window.innerHeight;

function pset(x, y){
	
	var radius = 2;
	ctx.fillStyle = 'magenta';
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
};

pset(x/2, y/2);
pset(x/2+30, y/2+30);
