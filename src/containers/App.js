import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


function App() {
    
    const [robots, setRobots] = useState([]) // uses array destructing [value, setter]
    const [searchField, setSearchField] = useState("") // initial value is empty string

    const onSearchChange = (event) => {
        setSearchField(event.target.value);                
    }

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
                        <CardList robots={filteredRobots} sear/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            {/* end fragment */}
            </> 
        );   
    }
}

export default App;