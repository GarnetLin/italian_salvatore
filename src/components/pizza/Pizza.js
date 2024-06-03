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
            sauces: props.sauces || [],
            ingredients: props.ingredients || [],
            basePrice: 10
        };
    }

    calculatePrice() {
        const saucesPrice = this.state.sauces.length * 0.5;
        const ingredientsPrice = this.state.ingredients.length;
        return this.state.basePrice + saucesPrice + ingredientsPrice;
    }

    handleCrustChange = e => {
        const selectedCrust = e.target.value;
        this.setState({ crust: selectedCrust });
    }

    handleChangeIngredients = selectedIngredients => {
        this.setState({ ingredients: selectedIngredients || []});
    }

    handleChangeSauces = selectedSauces => {
        this.setState({ sauces: selectedSauces || []});
    }

    render() {
        const ingredients = [
            { value: 'tomatoes', label: 'Tomatoes' },
            { value: 'mushrooms', label: 'Mushrooms' },
            { value: 'pepperoni', label: 'Pepperoni' },
            { value: 'cheese', label: 'Cheese' },
            { value: 'olives', label: 'Olives' },
            { value: 'pepper', label: 'Bell pepper' },
            { value: 'chicken', label: 'Chicken' },
            { value: 'onions', label: 'Onions' }

        ]

        const sauces = [
            { value: 'bbq', label: 'BBQ' },
            { value: 'garlic', label: 'Garlic' },
            { value: 'alfredo', label: 'Alfredo' },
            { value: 'tomato', label: 'Tomato' },
            { value: 'pesto', label: 'Pesto' }
        ]

        return (
            <div className='wrapper'>
                <div>
                    <label>Choose crust:</label>
                    <select value={this.state.crust} 
                            onChange={this.handleCrustChange} 
                            className='selection'>
                        <option value="thin">Thin</option>
                        <option value="thick">Thick</option>
                    </select>
                    <div>
                        <p>Choose ingredients:</p>
                        <Select options={ingredients} 
                                isMulti 
                                onChange={this.handleChangeIngredients} 
                                className='react-select'/>
                    </div>
                    <div>
                        <p>Choose sauces:</p>
                        <Select options={sauces} 
                                isMulti 
                                onChange={this.handleChangeSauces} 
                                className='react-select'/>
                    </div>
                </div>
                <br/>
                {super.render()}
            </div>
        );
    }
    
}

export default Pizza;