import FoodSkeleton from "../foodSkeleton/FoodSkeleton";

import './sorbet.scss';

class Sorbet extends FoodSkeleton {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            fruit: props.fruit || 'lemon',
            fruitPrices: {
                lemon: 7,
                strawberry: 8,
                raspberry: 8,
                mango: 9
            }
        };
    }

    handleFruitChange = e => {
        const selectedFruit = e.target.value;
        this.setState({ fruit: selectedFruit });
    };

    calculatePrice() {
        if (!this.state.fruit) {
            return 0;
        }
        return this.state.fruitPrices[this.state.fruit];
    }
    render() {
        return (
            <div>
                <div>
                    <label>Choose fruit:</label>
                    <select value={this.state.fruit} onChange={this.handleFruitChange}>
                        <option value="lemon">Lemon</option>
                        <option value="strawberry">Strawberry</option>
                        <option value="raspberry">Raspberry</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                {super.render()}
            </div>
        );
    }
}

export default Sorbet;