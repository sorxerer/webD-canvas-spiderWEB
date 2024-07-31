const canvas = document.querySelector('canvas');
const banner= document.querySelector('.main')
canvas.width= canvas.offsetWidth
canvas.height= canvas.offsetHeight
const ctx = canvas.getContext('2d');

let dots=[]
const colors = [
    '#eee' ,'#545454' ,'#596d91' ,'#bb5a68' ,'#696541'
    // 'rgba(255, 87, 51, 0.5)', // Bright Red
    // 'rgba(51, 255, 87, 0.5)', // Bright Green
    // 'rgba(51, 87, 255, 0.5)', // Bright Blue
    // 'rgba(255, 51, 161, 0.5)', // Bright Pink
    // 'rgba(255, 209, 51, 0.5)', // Bright Yellow
    // 'rgba(51, 253, 209, 0.5)', // Bright Cyan
    // 'rgba(255, 51, 51, 0.5)', // Bright Orange
    // 'rgba(209, 51, 255, 0.5)', // Bright Purple
    // 'rgba(255, 195, 0, 0.5)', // Bright Gold
    // 'rgba(51, 255, 136, 0.5)'  // Bright Teal
];


for(let i=0 ; i <200 ; i++){
    dots.push({
        x: Math.floor(Math.random()*canvas.width) ,
        y: Math.floor(Math.random()*canvas.height) ,
        size: Math.random()*1 +1 ,
        color: colors[Math.floor(Math.random()*5)]
    })
}
const drawdots=()=>{
    dots.forEach(dot=>{
        ctx.fillStyle = dot.color
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill()

    })
}
drawdots()
console.log(dots)
banner.addEventListener('mousemove' , (event)=>{
    ctx.clearRect(0 , 0 ,canvas.width , canvas.height); 
drawdots()
    let mouse={
        x:event.clientX , // Get the X coordinate
        y: event.clientY// Get the Y coordinate
        // x :event.pageX -banner.getBoundingClientRect.left,

    
    }
    dots.forEach(dot=>{
        let distance = Math.sqrt((mouse.x-dot.x)**2 + (mouse.y-dot.y)**2 )
        if(distance<200){
            ctx.strokeStyle = dot.color
            ctx.lineWidth =1 ;
            ctx.beginPath();
            ctx.moveTo(dot.x , dot.y);
            ctx.lineTo(mouse.x , mouse.y);
            ctx.stroke();
        }
    })
    
})

banner.addEventListener('mouseout' , ()=>{
    ctx.clearRect(0 , 0 ,canvas.width , canvas.height)
    drawdots()
})

