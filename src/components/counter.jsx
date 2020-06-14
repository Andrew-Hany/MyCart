import React, {Component} from 'react';


class Counter extends Component {
    

render() {
  
return (
<div>
    <span>{this.props.counter.text}:</span>
    <span  className={this.getBadgeClasses()}>{this.formateCount()} </span>
    <button
     onClick={() => this.props.onIncre(this.props.counter)} 
     className= "btn btn-secondary btn-sm m-2">increment
     </button>
     <button
     onClick={() => this.props.onDecre(this.props.counter)} 
     className= "btn btn-secondary btn-sm 2">decrement
     </button>


    <button
     onClick={ () => this.props.onDelete(this.props.counter.id)} 
     className="btn btn-danger btn-sm m-2 " >Delete 
     </button>
       
 </div>   
);
 }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        if (this.props.counter.value == 0) {
            classes += "warning";
        }
        else
            classes += "primary ";
        return classes;
    }

 formateCount(){
     const { value } = this.props.counter;
     return value  === 0 ? "zero": value  ;
    return value;
 }
}
export default Counter;