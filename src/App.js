import React, {Component, useState} from 'react';

import NavBar from './components/navbar';
import Counters from './components/counters';
import Dis from './components/discr';

import './App.css';



class App extends Component  {
  state = {

    counters:[
        {id:1,value:0,text:"iphone"},
        
    ],
    txt: " "
};
// const [txt,sw]=useinput('')
handleDelete= (counterId) => { 
const  counters= this.state.counters.filter(c => c.id !==counterId); 
this.setState({counters});
    //  console.log("this",counterId) ;


};
handleRes= () => { 
  const counters=  this.state.counters.map(c=>{
c.value=0;
return c;

    });

        this.setState({counters});
    

    };

    handleIncr= (counter)=> { 

const counters =[...this.state.counters];
const index =counters.indexOf(counter);
counters[index]={...counter};

counters[index].value++;
this.setState({counters});

};
handleDecr= (counter)=> { 

  const counters =[...this.state.counters];
  const index =counters.indexOf(counter);
  counters[index]={...counter};
  if(counters[index].value>0){
  counters[index].value--;
  this.setState({counters});
  }
  };
  handleAdd =()=> {

if(this.state.txt!==" "){
  
    const counters =[...this.state.counters];
    let i=counters.length+1;
    counters[i-1]={id:i,value:0,text:this.state.txt};
   this.state.counters=counters;
  
    
  
   this.setState({counters});
   this.state.txt=" "
  
}
  };
  textchange=(e) => {
  
this.state.txt=e.target.value
console.log(this.state.counters)

  };
  
render(){
  return (
    <React.Fragment>
                    <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} />
                    <main className="container">
                          <div className="row" >
                                <div className="col-12" > 
                                      <Dis />
                                </div>
                                
                          
                          </div>
                    </main>
                    {/* ////////////////////////////////// */}

                    <button 
                    onClick={()=>this.handleAdd()}
                    className="btn btn-primary btn-sm m-2">Add 
                    </button>
                    {/* //////////////////////// */}

                    
                  <div  ><input type="text"  onChange={e=>this.textchange(e)} /></div>


                  {/* //////////////////////// */}
                    <div > 

                          <Counters
                          counters={this.state.counters}
                          OnReset={this.handleRes}
                          onDelete={this.handleDelete}
                          onIncre={this.handleIncr}
                          onDecre={this.handleDecr}
                          
                          />
                    </div>

    </React.Fragment>
  );
}
}
export default App;
