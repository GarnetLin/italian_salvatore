import FoodSkeleton from "../foodSkeleton/FoodSkeleton";


class Sorbet extends FoodSkeleton {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            flavor: props.flavor || 'nothing',
            flavorPrices: {
                nothing: 0,
                lemon: 7,
                chocolate: 7,
                strawberry: 8,
                raspberry: 8,
                mango: 9
            }
        };
    }

    handleFlavorChange = e => {
        const selectedFlavor = e.target.value;
        this.setState({ flavor: selectedFlavor });
    }

    calculatePrice() {
        if (!this.state.flavor) {
            return 0;
        }
        return this.state.flavorPrices[this.state.flavor];
    }

    render() {
        return (
            <div className='sorbet'>
                <div>
                    <label>Choose flavor:</label>
                    <select value={this.state.flavor} onChange={this.handleFlavorChange} className='selection'>
                        <option value="nothing">---</option>
                        <option value="lemon">Lemon</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="strawberry">Strawberry</option>
                        <option value="raspberry">Raspberry</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <br/>
                {super.render()}
            </div>
        );
    }
}

export default Sorbet;