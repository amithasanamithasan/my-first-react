export default   function Singer({sin}){
    console.log(sin);
 return(
    <div>
 
    <h3>Name:  {sin.name}</h3>
    <p>Age:  {sin.age}</p>
   <p>Titel:  {sin.titel}</p>
    </div>

 )
    }