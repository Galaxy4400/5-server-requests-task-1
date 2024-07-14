export const formatFirebaseData = (snapshot) => {
	const data = [];

	snapshot.forEach(item => {
		data.push({id: item.key, ...item.val()});
	});

	return data;
};
