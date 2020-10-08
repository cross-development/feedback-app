//Core
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Teammate from 'components/Teammate';

import teammates from 'data/teammates.json';

const TeammatePage = () => {
	const { teammateId } = useParams();
	const [wrong, setWrong] = useState('');
	const [improve, setImprove] = useState('');
	const [teammate, setTeammate] = useState(null);

	const handleChangeWrong = ({ target: { value } }) => setWrong(value);
	const handleChangeImprove = ({ target: { value } }) => setImprove(value);

	const handleSubmit = e => {
		e.preventDefault();

		//TODO: изменить метод онЛогин с редакса на сервисы
		// this.props.onFeedback(fullName, email, password);
		setWrong('');
		setImprove('');
	};

	useEffect(() => {
		const member = teammates.find(({ tmId }) => tmId === teammateId);

		setTeammate(member);
	}, [teammateId]);

	return (
		teammate && (
			<Teammate
				member={teammate}
				wrongValue={wrong}
				improveValue={improve}
				onSubmit={handleSubmit}
				onChangeWrong={handleChangeWrong}
				onChangeImprove={handleChangeImprove}
			/>
		)
	);
};

export default TeammatePage;
