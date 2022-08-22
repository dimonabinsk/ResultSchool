const users = [
	{
		username: "David",
		status: "online",
		lastActivity: 10
	},
	{
		username: "Lucy",
		status: "offline",
		lastActivity: 22
	},
	{
		username: "Bob",
		status: "online",
		lastActivity: 104
	}
];

const onlineUsers = [];

users.forEach(user => {
	if (user.status === "online") {
		onlineUsers.push(user.username)
	}
});

alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers.join(", ")}`);