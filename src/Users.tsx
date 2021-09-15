import React from 'react';
import useUsers from './useUsers';

function Users(props: any) {
  const query = useUsers();
  if (query.isLoading) {
    return <div>Cargando usuarios</div>;
  }

  if (query.isError) {
    return <div>Error cargando usuarios: {(query as any).error?.message}</div>;
  }

  return (
    <div>
      <ul>
        {query.data.data.map((user: any) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <button onClick={() => query.refetch}>Refrescar</button>
    </div>
  );
}

export default Users;
