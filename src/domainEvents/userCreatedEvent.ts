import {DomainEventName, DomainEvent} from 'eventDispatcher';

export const USER_CREATED_EVENT: DomainEventName = 'user.created';

interface User {
  id: string;
  email: string;
  job: string;
}

export interface UserCreatedEvent extends DomainEvent {
  user: User;
}

export default function createUserCreatedEvent(user: User): UserCreatedEvent {
  return Object.freeze({
    name: USER_CREATED_EVENT,
    user
  });
}
