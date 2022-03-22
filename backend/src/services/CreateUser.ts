interface CreateUserData{
  name: string;
  login: string;
  password: string;
  email: string;
}

export default function createUser({name, login, password, email}:CreateUserData) {
  const user = {name, login, password, email}

  return user
}