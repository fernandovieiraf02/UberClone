import { createStackNavigator } from 'react-navigation';
import InitialRoutes from './InitialRoutes';
import MainRoutes from './MainRoutes';


const routes = createStackNavigator({
        Initial: {
            screen: InitialRoutes 
        },
        Main: {
            screen: MainRoutes
        }
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    }
)

export default routes;