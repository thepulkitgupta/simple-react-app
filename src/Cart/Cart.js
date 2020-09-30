import React from 'react';

class Cart extends React.Component
{

    constructor(props)
    {   
        
        super(props);
        this.state={obj:[],cobj:[0],loadCart:true};
        this.item=this.item.bind(this);
        this.cart=this.cart.bind(this);
       
    }
    componentDidUpdate()
    {
       document.getElementById("root").focus();
    }
    componentDidMount()
    {
        var arr=[1,2,3,4,5,6,7,8,9];
        var items=arr.map((x)=><this.item key={x} value={x}/>);
        this.setState({obj:items})
    }
    
    item(props)
    {
        return(
            <div className="col-sm-4">
                <div className="d-flex flex-column align-items-center p-3  ">
                    <img src={ "1.jpg"} height="300px" width="300px" alt={props.value}/>
                    <div className="d-flex mt-1">
                    <button onClick={ this.handleClick.bind(this,props.value)} className="btn btn-primary mr-1">AddToCart</button>
                    <button className="btn btn-success ml-1">View Details</button>
                    </div>
                </div>
            </div>
        )
    }

    handleClick(id)
    {
        var cobj=this.state.cobj;
        cobj.push(id);
        this.setState(state=>({ 
            cobj:cobj,
            loadCart:!state.loadCart
        }))
    }
    cart()
    {   
        var cobj= this.state.cobj;
        const element=cobj.map((number)=><div id={"citem"+number} key={number}>{number}</div>)
        return (
            <div className="d-flex justify-content-center align-items-center bg-primary text-dark" style={{height:"100vh"}}>
           <div className="display-4">
           {element}
            </div>   
            </div>
        )
    }
     
    render(){
        var element;
        if(this.state.loadCart===false)
            element=<this.cart/>;
        else 
            {element= <div className="container-fluid">
            <div className="row">
            {this.state.obj}
            </div>
         </div>;}
        return(
            <div>
                <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="https://www.google.com">Wallpaper</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Homepage</a>
                        </li>
                    </ul>
                </nav>
                {element}
            </div>
        )
    }
}
export default Cart;