let count = 0
const val = document.querySelector("#value");
const btn = document.querySelectorAll(".button");
btn.forEach(function(button){
    button.addEventListener("click",function(e){
     const styles = e.currentTarget.classList;
     //console.log(styles);
     if(styles.contains('decrease')){
        count--
     }
     else if(styles.contains('increase')){
         count++
     }
     else{
         count = 0
     }
     if(count > 0){
         val.style.color = "green"
     }
     if(count < 0){
        val.style.color = "red"
    }
    if(count === 0){
        val.style.color = "black"
    }
     val.textContent = count
     console.log(count);

    })
})