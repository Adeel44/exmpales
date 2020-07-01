console.log('Starting time');

setTimeout(function(){
    console.log('running after two sec')

}, 2000)
setTimeout(function(){
    console.log('running after zero sec')

}, 0)
console.log('Stoping')
setTimeout(()=>{
    console.log('running after 1 sec')
},1000)

