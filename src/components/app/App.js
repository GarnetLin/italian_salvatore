import DishMenu from "../dishMenu/DishMenu";
import AppHeader from "../appHeader/AppHeader";
import { PizzaLeftSplash, PizzaRightSplash } from "../pizzaSplash/PizzaSplash";

import '../../style/style.scss';

const App = () => {
    return (
        <>
            <AppHeader/>
            <br></br>
            <div className="main-content">
                <PizzaLeftSplash/>
                    <DishMenu/>
                <PizzaRightSplash/>
            </div>
        </>
    )
}

export default App;