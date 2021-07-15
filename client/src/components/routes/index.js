import { Switch, Route } from 'react-router-dom'
import IndexPage from './../pages/IndexPage/IndexPage'
import CoastersPage from './../pages/CoastersPage/CoastersPage'
import CoasterDetails from './../pages/CoasterDetails/CoasterDetails'
import CoasterForm from '../pages/CoasterForm/CoasterForm'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/montañas-rusas" exact render={() => <CoastersPage />} />
            <Route path="/montañas-rusas/detalle/:coaster_id" render={props => <CoasterDetails {...props} />} />
            <Route path="/montañas-rusas/crear" render={() => <CoasterForm />} />
        </Switch>
    )
}

export default Routes