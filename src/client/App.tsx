import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Compose from './pages/Compose';
import Edit from "./pages/Edit"
import Navbar from './components/Navbar';
// import { useState, useEffect } from 'react';
// import List from './List';
// import Detail from './Detail';

const App: React.FC<IAppProps> = props => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/editing/:id" component={Edit} />
				<Route exact path="/compose" component={Compose} />
			</Switch>
		</Router>
	);
}

export interface IAppProps {}

export interface IAppState {}

export default App;