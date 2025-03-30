import React from 'react';
type GreetClassProps={
      name:string;
}
class GreetClass extends React.Component<GreetClassProps>{
      reader(){
            return(
                  <>
                  <div>class Component - {this.props.name}</div>

                  </>
            )
      }
}
export default GreetClass;