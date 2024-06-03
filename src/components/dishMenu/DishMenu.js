import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css'
import './dishMenu.scss'

import Sorbet from '../sorbet/Sorbet'
import Pizza from '../pizza/Pizza'

const DishMenu = () => {
	return (
		<div className='wrapper'>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>Pizza</Accordion.Header>
					<Accordion.Body>
						<Pizza/>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Sorbet</Accordion.Header>
					<Accordion.Body>
						<Sorbet/>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}

export default DishMenu;