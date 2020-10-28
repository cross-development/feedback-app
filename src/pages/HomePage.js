//Core
import React from 'react';
//Components
import Home from 'components/Home';
import Main from 'components/Main';
import Loader from 'components/Loader';
//Redux
import { useSelector } from 'react-redux';

const HomePage = () => {
	const { user, loading } = useSelector(state => state.auth);

	return (
		<>
			{user && <Main />}

			{!user || loading ? <Home /> : <Loader onLoad={loading} />}
		</>
	);
};

export default HomePage;
