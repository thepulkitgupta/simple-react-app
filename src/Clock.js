import React from 'react';



class Clock extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={date:new Date()};
    }
    //i can define as many variables i want with this 
    componentDidMount()
    {
      this.timerID=setInterval( () => this.tick(), 1000 );
      
    }
  
    componentWillUnmount()
    {
      clearInterval(this.timerID);
    }
  
    
   tick(){
     this.setState({
         date:new Date()
       });
   }
   
  
    render(){
      return (
         <div className="d-flex justify-content-center align-items-center bg-danger" style={{height:"100vh"}}>
           <div style={{fontSize:"15vmin"}}>
                  {this.state.date.toLocaleTimeString()}
             </div>
          </div>
       
      );
    }
  };

  export default Clock;