//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Redux
import { Provider } from 'react-redux';
import store from 'redux/store';
//Firebase
import './firebase';
//Styles
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

// const response = await getProducts()
//         const products = Object.keys(response.data).reduce((acc, key) => {
//             acc.push({ id: key, ...response.data[key] })
//             return acc
//         }, []);
//         this.setState({ products })
