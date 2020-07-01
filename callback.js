
setTimeout(()=>{
    console.log('After two sec')

},2000)
const names = ['Harry' , ' make' , 'Jamsmith']
const shortNames = names.filter((name)=>{
    return name.length <=3
})
const geocode = (address , callback)=>{
   setTimeout(()=>{
    const data = {
        short:0 ,
        long:0
        
    }
    callback(data)
   },1000)
}
// const data = geocode('Plepia')
// console.log(data)
geocode('Plepia' , (data)=>{
console.log(data)
})

const add = (a,b ,(callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },1000)

})

add(2,4,(sum)=>{
 console.log(sum)
})
