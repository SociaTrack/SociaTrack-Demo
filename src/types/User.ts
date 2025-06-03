interface User {
  _id: string;
  name: string;
  email: string;
}

export const DUMMY_USER: User = {
  _id: "dummy-user-001",
  name: "Demo User",
  email: "demo@sociatrack.com",
};

export const DUMMY_CREDENTIALS = {
  email: "demo@sociatrack.com",
  password: "demo123",
};

export default User;
