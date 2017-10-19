let robot	
window.onload = function(){
	let canvas = document.getElementById('room');
	let width=canvas.width;
	let height=canvas.height;
	let ctx=canvas.getContext('2d');
	
	let inter=setInterval(draw, 1000/60);
	
	robot={
		width:50,
		height:50,
		x:parseInt(Math.random()*500),
		y:parseInt(Math.random()*400),
		speed:parseInt(Math.random()*7)+3,
		currDir:parseInt(Math.random()*4)
	}
	
	
		
	function draw(){
		ctx.fillStyle="#909090";
		ctx.fillRect(0,0,width,height);
		ctx.fillStyle="white";
		ctx.fillRect(robot.x, robot.y, robot.width, robot.height);
		moveRobot();
	}

	function moveRobot(){
		switch(robot.currDir){
			case 0:{
				if(robot.x+robot.width+robot.speed>=width){
					robot.currDir=(robot.currDir+1)%4;
				}else{
					robot.x+=robot.speed;
				}
				break;
			}
			case 1:{
				if(robot.y+robot.height+robot.speed>=height){
					robot.currDir=(robot.currDir+1)%4;
				}else{
					robot.y+=robot.speed;
				}
				break;
			}
			case 2:{
				if(robot.x-robot.speed<=0){
					robot.currDir=(robot.currDir+1)%4;
				}else{
					robot.x-=robot.speed;
				}
				break;
			}
			case 3:{
				if(robot.y-robot.speed<=0){
					robot.currDir=(robot.currDir+1)%4;
				}else{
					robot.y-=robot.speed;
				}
				break;
			}
			
		}
	}
}
