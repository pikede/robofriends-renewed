import React, {useState, useEffect, Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../action';
import './App.css';

const mapStateToProps = state => {
    return {
        searchField : state.searchRobots.searchField, // value is from reducer searchRobots
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)), // dispatch event when user types to the action
        onRequestRobots: () => dispatch(requestRobots()) // same as requestRobots(dispatch)
    }
}
function App(store) {
    const { searchField, onSearchChange, robots, isPending } = store

    useEffect(() => { // lifecycle event method replaces componentDidMount, componentDidUnMount 
        store.onRequestRobots();
    }, []) // runs once, only runs when the empty array changes

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if(isPending){
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
//     componentDidMount(){ // lifecycle event method replaces componentDidMount, componentDidUnMount 
//         this.props.onRequestRobots()
//     }

//     render(){
//         const { searchField, onSearchChange, robots, isPending } = this.props
//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchField.toLowerCase())
//         })
//         if(isPending){
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