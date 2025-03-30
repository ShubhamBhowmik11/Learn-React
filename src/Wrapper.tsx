import { useEffect } from "react";

function Build({children} : {children : React.ReactNode}): JSX.Element {
      return <h1>{children}</h1>;
    }
    
    function Template(): JSX.Element {
      useEffect(function(){
            alert("pop");
      },[])
      return  <>
     <Build>shubham</Build>
     <Build>Bhowmik</Build>
     </>
    }
    
    export default Template;
    