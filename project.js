let show;
let flag="false";
function first(){
    document.getElementById("one").style.backgroundImage="url("+"https://tse4.mm.bing.net/th/id/OIG1..Aknuub5K.wWip9Y.4qw?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
}
document.getElementById("one").addEventListener('mouseover',()=>{
    show=setInterval(function(){
        if(flag=="false"){
            first();
            flag="true";
        }
        else{
            document.getElementById("one").style.backgroundImage="url("+"https://tse2.mm.bing.net/th/id/OIG1.jbcMlKHM9dm0KdcWpjp2?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
            flag="false";
        }
    },1000)
});
document.getElementById("one").addEventListener('mouseout',()=>{
    clearInterval(show);
})
function second(){
    document.getElementById("two").style.backgroundImage="url("+"https://tse4.mm.bing.net/th/id/OIG2.Ti3By14tZyivzdskEOJF?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
}
document.getElementById("two").addEventListener('mouseover',()=>{
    show=setInterval(function(){
        if(flag=="false"){
            second();
            flag="true";
        }
        else{
            document.getElementById("two").style.backgroundImage="url("+"https://tse3.mm.bing.net/th/id/OIG1.4OOsP80tA0WIsp66hJsn?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
            flag="false";
        }
    },1000)
});
document.getElementById("two").addEventListener('mouseout',()=>{
    clearInterval(show);
})
function third(){
    document.getElementById("three").style.backgroundImage="url("+"https://tse2.mm.bing.net/th/id/OIG1.b6ZLVMXvq2f__kJzeHyV?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
}
document.getElementById("three").addEventListener('mouseover',()=>{
    show=setInterval(function(){
        if(flag=="false"){
            third();
            flag="true";
        }
        else{
            document.getElementById("three").style.backgroundImage="url("+"https://tse1.mm.bing.net/th/id/OIG1.Ek59nxs5rJf9q0m33xWD?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
            flag="false";
        }
    },1000)
});
document.getElementById("three").addEventListener('mouseout',()=>{
    clearInterval(show);
})
function fourth(){
    document.getElementById("four").style.backgroundImage="url("+"https://tse1.mm.bing.net/th/id/OIG4._uHvADAiuW9YbQKglnEV?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
}
document.getElementById("four").addEventListener('mouseover',()=>{
    show=setInterval(function(){
        if(flag=="false"){
            fourth();
            flag="true";
        }
        else{
            document.getElementById("four").style.backgroundImage="url("+"https://tse4.mm.bing.net/th/id/OIG2.oddQ7YtqaX.4PGSO7Evo?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"+")";
            flag="false";
        }
    },1000)
});
document.getElementById("four").addEventListener('mouseout',()=>{
    clearInterval(show);
})
// const a=document.createElement("p");
// a.innerText="hey";
// document.getElementById("side").appendChild(a);
