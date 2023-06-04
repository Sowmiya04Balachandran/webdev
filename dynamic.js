/*const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0){
                const poppedElement  = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}

//Modify the lines below and use .then and .catch smartly to get the correct output.
create2ndPost()

    .then(()=> {

        deletePost().then((deletedPost1) => {

            console.log(deletedPost1.title)

            create3rPost()

                .then(() => {

                        deletePost().then((deletedpost2) => {

                            console.log(deletedpost2.title)

                            deletePost().then((deletedpost3) => {

                                console.log(deletedpost3.title)

                                deletePost().catch((msg) => console.log(msg))

                            })

                    })

                })

            })

        })

*/

console.log('person1:shows ticket');
console.log('persom2:shows tickets');

const preMovie=async()=>{
    const promiseWifeBringTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const addButter=new Promise((resolve,reject)=>resolve('butter'));
    const getcoolDrink= new Promise((resolve,reject)=>resolve('cooldrink'))
    let ticket =await promiseWifeBringTicket;
    console.log('wife:i have the ${ticket}');
    console.log('husband:we should go in');
    console.log('wife: no iam hungry');

    let popcorn=await getPopcorn;
    console.log('husband:i got some ${popcorn}');
    
    console.log('husband:we should go in');
    console.log('wife: i need butter on my popcorn ');

    let butter=await addButter;

    console.log('husband:i got some ${butter}on popcorn');
    console.log('husband:anything else darling');
    console.log('wife:we should go in');
    console.log('wife: i need butter on my cool Drink ');

    let drink=await getcoolDrink;

    console.log('husband:i also got some cool drink for you');
    console.group('husband:we should goin');
    console.log('wife:let go');


return ticket;


}
preMovie().then((ticket)=>console.log('person3:shows ${ticket}'));
console.log('person4:shows ticket');
console.log('person5:shows ticket');