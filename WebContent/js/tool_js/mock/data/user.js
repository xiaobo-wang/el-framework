const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'http://localhost:8080/elui/img/user.png',
    name: '张玉'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

const TabInfos = [];

for (let i = 0; i < 10; i++) {
	TabInfos.push(Mock.mock({
	    id: Mock.Random.guid(),
	    title: Mock.Random.cname(),
	    content: Mock.mock('@county(true)')
	}));
}

export { LoginUsers, Users, TabInfos };
