import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './layouts/Main';
import MainContainer from './containers/Main';
import {Switch, Route } from 'react-router-dom'
import List from './containers/List';
function App() {
	return (
			<div className="App">
				<MainLayout>
					<Switch>
						<Route exact path='/' component={MainContainer}/>
						<Route path='/product/:name' component={List} />
					</Switch>
				</MainLayout>
			</div>
	);
}

export default App;