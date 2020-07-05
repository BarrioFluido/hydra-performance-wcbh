window.initImg = function(source,url,isVideo=false){
var img = document.createElement('img');
img.crossOrigin = "anonymous";
img.src = url;
img.onload = function() {
source.init({ src: img, dynamic: isVideo });};
}
osc().constructor.prototype.correctScale = function(source){
  return this.scale(1,source.src.width/source.src.height*innerHeight/innerWidth)
}
initImg(s0,'https://i.imgur.com/J7TZRMP.png')
initImg(s1,'https://i.imgur.com/J7TZRMP.png')
initImg(s2,'https://i.imgur.com/J7TZRMP.png')
src(s0).correctScale(s0).scale(1.5).scroll(.1,.15)
	.modulateScale(src(s0).modulate(o0,2),()=>Math.sin(time/2)*.2)
		.modulate(o0,-.02).scale(.95)
  		.mult(src(o0).thresh(.2).scale(1.2).scrollX(-.01).invert(),[0,1,1,1,1].smooth())
	.out()
src(s1).correctScale(s1).scale(.60).mask(shape(6,.850).scale(0.5,.7,4.53).scrollX(-.08)).modulateScale(src(o1).scale(3.2),.2)
	.add(src(o1).scroll(-.05,-.1).modulate(src(o0).pixelate(256,128),-.08),.45)
		.contrast(.12)
	.out(o1)
src(o0).contrast(1.1).hue(.95).brightness(-.1)
		.layer(src(o1).luma(.5).contrast(.9)).modulateScale(o1,-.15)
		.layer(src(s2).mask(shape(6,.950)).correctScale(s2).scale(.15).scroll(.4,-.35))
	.out(o3)
render(o3)
//s0.initCam()
//src(s0).saturate(2).contrast(1.3).layer(src(o0).mask(shape(4,2).scale(0.5,0.7).scrollX(0.25)).scrollX(0.001)).modulate(o0,0.001).out(o0)
//speed=-.55
//s0.initCam()

//src(s0).scale(1.3).color(2,1,2)
//.colorama(-.01).colorama( ()=>Math.sin(time)*.05+.07 )

//.add(
//osc(200,-.2).thresh(.9,.1).color(0,1,3).rotate(Math.PI/2)
//.modulate( src(o0).scale(2.7) )
//.scale(.72),.333
//)

//.modulateScale( src(o0).scale(1.3),2 )
//.out()

speed=-.75
s0.initCam()

src(s0).scale(1.3).color(2,1,2)
.colorama(-.01).colorama( ()=>Math.sin(time)*.05+.07 )

.add(
osc(200,-.2).thresh(.94,.1).color(0,1,3).rotate(Math.PI/2)
.modulate( src(o0).scale(1.7) )
.scale(.72),.333
)

.modulateScale( src(o0).scale(1.3),2 )
.out()

