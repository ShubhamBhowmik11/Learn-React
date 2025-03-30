interface Comp {
    value:number,
    func:(data: object) => void;
  }

function Passing(props:Comp){
function ChangeTheValue(){
      props.func((prev:number) =>{
           return prev = prev + 1
      });     
    
}
 return <>
 <h1>{props.value}</h1>
 <button onClick={ChangeTheValue}> Submit</button>
 </>
}
export default Passing;

