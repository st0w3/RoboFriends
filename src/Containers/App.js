import React from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from '../Components/Scroll';

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            robots:[],
            searchField: ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()})
        .then(users => {
            this.setState({robots: users})
        });
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (robots.length === 0)
    {
        return <h1>Loading...</h1>
    } else{
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList Robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
    }
}

export default App;