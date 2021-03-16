export type User = {
  id: number;
  name: string;
  username: string;
};

export const fetchUsers = async (): Promise<User[]> => {
  const endpoint = `https://jsonplaceholder.typicode.com/users`;
  const data = await (await fetch(endpoint)).json();
  return data.map((user: any) => (
      {
          id: user.id,
          name: user.name,
          username: user.username
      }
  ));
};
