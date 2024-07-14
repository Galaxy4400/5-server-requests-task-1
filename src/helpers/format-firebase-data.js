export const formatFirebaseData = (snapshot) => {
	const data = [];

	snapshot.forEach(item => {
		data.push({...item.val(), id: item.key});
	});

	return data;
};
