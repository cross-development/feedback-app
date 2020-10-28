//Core
import React from 'react';
//Components
import Home from 'components/Home';
import Main from 'components/Main';
import Loader from 'components/Loader';
//Redux
import { useSelector } from 'react-redux';

const HomePage = () => {
	const { uid, loading: userLoading } = useSelector(state => state.auth);

	return (
		<>
			{uid && <Main />}

			{!uid || userLoading ? <Home /> : <Loader onLoad={userLoading} />}
		</>
	);
};

export default HomePage;
