interface authenticatedUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}


interface UserSignUpObject {
  email: string;
  password: string;
  name: string;
  username: string;
}

interface UserSignInObject {
  email: string;
  password: string;
}

export {authenticatedUser, UserSignInObject, UserSignUpObject}

