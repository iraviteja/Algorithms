// There are 100 doors in a row that are all initially closed.
// You make 100 passes by the doors.
// The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).
// The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.
// The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the 100th door.

// Iterative way
var doors=[];
for(var i=0;i<100;i++)
	doors[i]=false;             //create doors
for(var i=1;i<=100;i++)
	for(var i2=i-1;i2<100;i2+=i)
  		doors[i2]=!doors[i2];      //toggle doors
for(var i=1;i<=100;i++)      //read doors
	console.log("Door %d is %s",i,doors[i-1]?"open":"closed");

// Optimized ( iterative )
// for (var door = 1; door <= 100; door++) {
//   var sqrt = Math.sqrt(door);
//   if (sqrt === (sqrt | 0)) {
//     console.log("Door %d is open", door);
//   }
// }

// Optimizing the optimized?
// for(var i=1;i<=10;i++){
//  console.log("Door %d is open",i*i);
// }