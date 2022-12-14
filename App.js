import React, { Component } from 'react'

export default class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          items : [],
          isLoaded : false,
        }
      }

      componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded : true,
            items : json,
          })
        });
      }

      render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Username: {item.username} | Email: {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}
