
const logString=(param:unknown):void=>{
    if(typeof param=== 'string'){
        console.log(param);
        return
    }else{
        console.log('error');
        return
    }
}
logString('hello');
logString(5555);


