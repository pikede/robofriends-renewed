import React, {useState, useEffect, Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../action';
import './App.css';

const mapStateToProps = state => {
    return {
        searchField : state.searchField // value is from reducer searchRobots
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)) // dispatch event when user types to the action
    }
}
function App(store) {
    
    const [robots, setRobots] = useState([]) // uses array destructing [value, setter]
    const { searchField, onSearchChange } = store

    useEffect(() => { // lifecycle event method replaces componentDidMount, componentDidUnMount 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then( users => setRobots(users));        
    }, []) // runs once, only runs when the empty array changes

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if(!robots.length){
        return <h1>Loading</h1>
    } else {
        return (
            <> {/* start fragment section */}       
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            {/* end fragment */}
            </> 
        );   
    }
}

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots : []
//         }        
//     }

//     componentDidMount(){ // lifecycle event method replaces componentDidMount, componentDidUnMount 
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then( users => this.setState({robots : users}));        
//     }

//     render(){
//         const {robots} = this.state
//         const { searchField, onSearchChange } = this.props
//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchField.toLowerCase())
//         })
//         if(!this.state.robots.length){
//             return <h1>Loading</h1>
//         } else {
//             return (
//                 <> {/* start fragment section */}       
//                 <div className='tc'>
//                     <h1 className='f1'>Robofriends</h1>
//                     <SearchBox searchChange={onSearchChange}/>
//                     <Scroll>
//                         <ErrorBoundary>
//                             <CardList robots={filteredRobots}/>
//                         </ErrorBoundary>
//                     </Scroll>
//                 </div>
//                 {/* end fragment */}
//              </> 
//             );   
//         }
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);