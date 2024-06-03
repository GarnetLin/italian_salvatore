import { Component } from "react";


class FoodSkeleton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        }
    }

    calculatePrice() {
        return 'Here is a method to calculate price'
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>Price: ${this.calculatePrice()}</p>
            </div>
        );
    }

}

export default FoodSkeleton;