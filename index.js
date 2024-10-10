//callbacks
// function fetchData(callback){
//     setTimeout(()=>{
//         const data = {message:'Hello World'};
//         callback(data);
//     },1000);
// }

// function handleData(data,error){
//     if(error){
//         console.log(error);
//         return;
//     }else{
//         console.log('Data:',data);
//     }
// }

// fetchData(handleData);
///promises
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = {message:'Hello World'};
            resolve(data);
        },1000);
    });
}

// fetchData().then((data)=>{
//     console.log('Data:',data);
// }).catch((error)=>{
//     console.log(error);
// });


///async await usage

async function getdata(){
    try{
        const data = await fetchData();
        console.log('Data:',data);
    }catch(error){
        console.log(error);
    }
}

getdata();




