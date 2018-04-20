import React, { Component } from 'react';
import logo from './logo.svg';
import TestAnimation from './components/TestAnimation';
import ScrollAnim from './components/ScrollAnim';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TestAnimation />
				<div className="Long-div">
					<ScrollAnim />
				</div>
			</div>
		);
	}
}

export default App;
