// // import data from './data';
// import { data } from './data.js';
// import { combineAge, renderAge } from './helpers.js';
// // import lodash from 'lodash';
// // import camelCase from 'lodash/camelCase';

// // console.log(lodash.camelCase('test test test'));
// console.log(combineAge(data));
// const container = document.querySelector('#age');
// renderAge(container, data);

import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';
import UsersList from './components/UsersList';
import Header from './components/Header';

const App = () => (
	<>
		<Header>The users:</Header>
		<UsersList data={data} />
	</>
);

ReactDOM.render(<App />, document.getElementById('app'));
