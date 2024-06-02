import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.min.css'

import Sorbet from '../sorbet/Sorbet'

const DishMenu = () => {
	return (
		<Accordion defaultActiveKey="0">
			<Accordion.Item eventKey="0">
				<Accordion.Header>Pizza!</Accordion.Header>
				<Accordion.Body>
					fd;f;dfd
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>Sorbet!</Accordion.Header>
				<Accordion.Body>
					<Sorbet/>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default DishMenu;