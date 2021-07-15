import './CoastersPage.css'

import CoastersList from './CoastersList'

import Container from 'react-bootstrap/esm/Container'

const CoastersPage = () => {

    return (
        <Container>

            <h1>Listado de montañas rusas</h1>
            <CoastersList />

        </Container>
    )
}

export default CoastersPage