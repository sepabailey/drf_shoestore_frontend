import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/ShoeView/")
      .then((res) => res.json())
      .then((res) => this.setState({ shoe: res }));
  }

  render() {
    return (
      <div>
        <h1>Shoes for Sale</h1>
        {this.state.shoe.map((s) => {
          return (
            <ul>
              <li>
                Shoe: {s.brand_name}
                <br />
                Manufacturer: {`${s.manufacturer}`}
                <br />
                Size: {s.size}
                <br />
                Color: {s.color}
                <br />
                Make: {s.material} <br />
                Type: {s.shoe_type}
                <br />
                Fastener: {s.fasten_type}
                <br />
              </li>
            </ul>
          );
        })}
        <br />
      </div>
    );
  }
}

export default App;
