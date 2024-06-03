import FoodSkeleton from "../foodSkeleton/FoodSkeleton";

import Select from 'react-select'

import './pizza.scss'

class Pizza extends FoodSkeleton {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            size: props.size || 'nothing',
            crust: props.crust || 'thin',
            sauces: props.sauces || [],
            ingredients: props.ingredients || [],
            basePrice: 5,
            sizePrices: {
                nothing: 0,
                small: 5,
                medium: 7,
                large: 9
            }
        };
    }

    handleSizeChange = e => {
        const selectedSize = e.target.value;
        if (selectedSize === 'nothing') {
            this.resetIngredientsAndSauces();
        } else {
            const basePrice = this.state.sizePrices[selectedSize];
            this.setState({ size: selectedSize, basePrice: basePrice });
        }
    }

    handleCrustChange = e => {
        const selectedCrust = e.target.value;
        this.setState({ crust: selectedCrust });
    }

    handleChangeSelection = (property) => (selectedOptions) => {
        this.setState({ [property]: selectedOptions || [] });
    }

    resetIngredientsAndSauces() {
        this.setState({ ingredients: [], sauces: [], size: 'nothing', basePrice: 0 });
    }

    calculatePrice() {
        let basePrice;
        if (this.state.size === 'nothing') {
            basePrice = 0;
            return 0
        } else {
            basePrice = this.state.sizePrices[this.state.size];
        }
        const saucesPrice = this.state.sauces.length * 0.5;
        const ingredientsPrice = this.state.ingredients.length;
        return basePrice + saucesPrice + ingredientsPrice;
    }

    renderItems() {
        const ingredients = [
            { value: 'tomatoes', label: 'Tomatoes' },
            { value: 'mushrooms', label: 'Mushrooms' },
            { value: 'pepperoni', label: 'Pepperoni' },
            { value: 'cheese', label: 'Cheese' },
            { value: 'olives', label: 'Olives' },
            { value: 'pepper', label: 'Bell pepper' },
            { value: 'chicken', label: 'Chicken' },
            { value: 'onions', label: 'Onions' }
        ];

        const sauces = [
            { value: 'bbq', label: 'BBQ' },
            { value: 'garlic', label: 'Garlic' },
            { value: 'alfredo', label: 'Alfredo' },
            { value: 'tomato', label: 'Tomato' },
            { value: 'pesto', label: 'Pesto' }
        ];

        return (
            <>
                <label>Choose crust:</label>
                <select 
                    value={this.state.crust} 
                    onChange={this.handleCrustChange} 
                    className='selection'>
                    <option value="thin">Thin</option>
                    <option value="thick">Thick</option>
                </select>
                <div>
                    <p>Choose ingredients:</p>
                    <Select 
                        options={ingredients} 
                        isMulti 
                        onChange={this.handleChangeSelection('ingredients')} 
                        className='react-select'/>
                </div>
                <div>
                    <p>Choose sauces:</p>
                    <Select 
                        options={sauces} 
                        isMulti 
                        onChange={this.handleChangeSelection('sauces')} 
                        className='react-select'/>
                </div>
            </>
        )
    }

    render() {
        return (
            <div className='pizza'>
                <div>
                    <label>Choose size:</label>
                    <select 
                        value={this.state.size} 
                        onChange={this.handleSizeChange} 
                        className='selection'>
                        <option value="nothing">---</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    {
                        this.state.size === 'nothing' ? null : this.renderItems() 
                    }
                </div>
                <br/>
                {super.render()}
            </div>
        );
    }
}

export default Pizza;