import React, {Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots : [],
            searchField : '',
        }
    }
    
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value});                
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then( users => this.setState( {robots: users} ));        
    }

    render() {
        const {robots, searchField} = this.state
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
                    <SearchBox searchChange={this.onSearchChange}/>
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
}

export default App;