import FoodSkeleton from "../foodSkeleton/FoodSkeleton";

import Select from 'react-select'

import './pizza.scss'

class Pizza extends FoodSkeleton {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            size: props.size,
            crust: props.crust || 'thin',
            extraSauces: props.extraSauces || [],
            extraIngredients: props.extraIngredients || [],
            basePrice: 10
        };
    }

    calculatePrice() {
        const extraSaucesPrice = this.state.extraSauces.length * 0.5;
        const extraIngredientsPrice = this.state.extraIngredients.length;
        return this.state.basePrice + extraSaucesPrice + extraIngredientsPrice;
    }

    handleCrustChange = e => {
        const selectedCrust = e.target.value;
        this.setState({ crust: selectedCrust });
    }

    handleChange = selectedOption => {
        this.setState({ extraIngredients: selectedOption || []});
    }

    render() {
        const options = [
            { value: 'tomatoes', label: 'Tomatoes' },
            { value: 'mushrooms', label: 'Mushrooms' },
            { value: 'pepperoni', label: 'Pepperoni' },
            { value: 'cheese', label: 'Cheese' },
            { value: 'olives', label: 'Olives' }
        ]

        return (
            <div className='wrapper'>
                <div>
                    <label>Choose crust:</label>
                    <select value={this.state.crust} onChange={this.handleCrustChange} className='selection'>
                        <option value="thin">Thin</option>
                        <option value="thick">Thick</option>
                    </select>
                    <Select options={options} isMulti onChange={this.handleChange} className='react-select'/>
                </div>
                {super.render()}
            </div>
        );
    }
    
}

export default Pizza;