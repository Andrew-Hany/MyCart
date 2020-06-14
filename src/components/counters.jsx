import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
   

render() {
 

return (
 <div>

     <button 
     onClick={this.props.OnReset}
     className="btn btn-primary btn-sm m-2">Reset 
     </button>
     {/* ///////////////////////////////////////////////////////// */}
     

{/* ///////////////////////////////////////////////////////// */}
     {this.props.counters.map(counter=> 
     <Counter
      key={counter.id} 
      counter={counter}
      onDelete={this.props.onDelete} 
      onIncre={this.props.onIncre}
      
      onDecre={this.props.onDecre}
      onAdd={this.props.onAdd}
      

      >
       
    </Counter>
     
      )}

 </div>
);
 }

   
}
export default Counters;