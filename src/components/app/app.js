import { Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../main-screen/main-screen';
import ErrorScreen from '../error-screen/error-screen';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainScreen />
      </Route>
      <Route>
        <ErrorScreen />
      </Route>
    </Switch>
  );
};

export default App;
