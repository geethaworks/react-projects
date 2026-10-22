import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import ProductList from './components/productList';
import { PageNotFound } from './components/common';
import Product from './components/product';
import routes from './routes';

const App = () => (
  <Switch>
    <Route exact component={Product} path={routes.products.show} />
    <Route exact component={ProductList} path={routes.products.index} />
    <Redirect exact from={routes.root} to={routes.products.index} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
