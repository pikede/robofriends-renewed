import React, {Component} from 'react';
import './Hello.css';

// as class 
// class Hello extends Component{
//     render(){
//         return (
//             <div className = 'f1 tc'>            
//                 <h1> Hello</h1>
//                 <p>{this.props.greeting}</p>
//             </div>
//     );
//     }
// }

// as function
const Hello = (props) => {
    return (
        <div className = 'f1 tc'>            
            <h1> Hello</h1>
            <p>{props.greeting}</p>
        </div>
);
}

export default Hello;