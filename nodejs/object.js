var obj = { 
            a : "indore", 
            b : "mumbai", 
            c : "pune" 
        };

// console.log(obj.c);
demo();

function demo(){
    console.log("Hello");
    setTimeout(()=>{
        demo();
    }, 1);
}