//  export default function Todo({Task, isDone})
//  {
// return(
//     <li>Task:  {Task}</li>
// )
    

// }
// codition rendering option 1
// export default function Todo({Task, isDone})
// {
// // return(
// //    <li>Task:  {Task}</li>
// // )
// if(isDone === true){
//     return <li>Finsed:{Task}</li>
// }
//    else{
//     return<li> HARD work on: {Task}</li>
//    }

// }


// codition rendering option 2


// export default function Todo({Task, isDone})
// {
// // return(
// //    <li>Task:  {Task}</li>
// // )
// if(isDone){
//     return <li>Finsed:{Task}</li>
// }
// return<li>Work on {Task}</li>

// }


// condition rendaring option 3
// tarnery oparator
// export default function Todo({Task, isDone})
// {


// return(

// <li> {isDone ? 'Finshid and learning ':'Work on '} :{Task}</li>
// )

// }



// condition rendaring option 4 && oparator using 
// jodi shotti hoi tahole jaba 

// export default function Todo({Task, isDone})
// {


// return(

// <li>{Task}{isDone &&':Done'}</li>
// )

// }

// condition rendaring option 5 ||oparator using 
// jodi isDone shotto na hoi mane isDone false hoi
// export default function Todo({Task, isDone})
// {


// return(

// <li>{Task}{isDone ||':Do it'}</li>
// )

// }

// // condition rendaring option 6 null
// // jaita jaita kora hoice oita diba na 
//  export default function Todo({Task, isDone})
// {
// if(isDone){
//     return null;
// }
// return<li> not done  {Task}</li>;

// }

// // condition rendaring option 7 variable vitor rakhe
// // jaita jaita kora hoice oita diba na 
export default function Todo({Task, isDone}){
    let listitem;

if(isDone){
 listitem= <li> IS Done: {Task}</li>;
}
else{
    listitem=<li> not done : {Task}</li>;
}
return listitem;

}
