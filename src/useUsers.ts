import {UserCreatedEvent, USER_CREATED_EVENT} from 'domainEvents/userCreatedEvent';
import {useQuery} from 'react-query';
import eventDispatcher, {DomainEvent} from './eventDispatcher';
import queryClient from './queryClient';

eventDispatcher.registerSubscriber(USER_CREATED_EVENT, function (domainEvent: DomainEvent) {
  const userCreatedEvent = domainEvent as UserCreatedEvent;
  queryClient.setQueryData('USERS', function (oldData: Record<string, any>) {
    return {
      ...oldData,
      data: [...oldData.data, userCreatedEvent.user]
    };
  });
});

async function fetchUsers() {
  const response = await fetch('https://reqres.in/api/users?page=2');
  if (!response.ok) {
    throw new Error('Error recuperando la lista de usuarios');
  }
  return response.json();
}

export default function useUsers() {
  return useQuery('USERS', fetchUsers, {
    staleTime: 5000,
    notifyOnChangePropsExclusions: ['isStale']
  });
}
