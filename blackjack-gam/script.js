function main(){

let conform = document.getElementById("main-result").innerHTML;
if(conform =="opps..soory.. you are lose!" ){
    alert("You Can't Play The Game");
}else{

    let x;
    do{
     x = Math.floor(Math.random() * 100/7.6);
    
    } while(x ==0);
       
    
    let currenttotal =parseInt (document.getElementById("result").innerHTML);
    let total = currenttotal + x;
    document.getElementById("result").innerHTML = total;

    if(total==21){
        document.getElementById("main-result").innerHTML = "congrazz...you won the game!";
        document.getElementById("restart").style.display = 'block';
    }else if(total > 21){
        document.getElementById("main-result").innerHTML = "opps..soory.. you are lose!";
        document.getElementById("restart").style.display = 'block';
    }else if(total < 21){
        document.getElementById("main-result").innerHTML = "common lest play to end..!"
    }
    
    let img = document.createElement("img");
    img.src = 'p/'+x+'.png';
    img.height = 250;

    document.body.appendChild(img); 
}

}function reBtn(){
    location.reload();




}