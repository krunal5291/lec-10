var k="uuuuuuu"
count=0

for(var i=0;i<k.length;i++){
    if(k[i]=="a"||k[i]=="e"||k[i]=="i"||k[i]=="o"||k[i]=="u"){
        count++;
    }
}

if(count==0){
    console.log("false")
}
else{
    console.log("true")
}