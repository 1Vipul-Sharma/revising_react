import { Link } from 'react-router-dom';

const users = [
  { id: 101, name: 'Ankit' },
  { id: 202, name: 'Ravi' },
  { id: 303, name: 'Simran' },
];

function Users() {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
