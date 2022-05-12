var info = {
    a : "rohit",
    b : "amar",
    hello : function(){
        return function(){
            return {
                first : "Nilesh",
                second : function(){
                    return "hello world";
                }
            }
        }
    }
}


var a = info.hello();

var b = a(); 
var c = b.second();
console.log(c);



