export type DomainEventName = string;

export interface DomainEvent {
  name: DomainEventName;
}

export type EventSubscriber = (domainEvent: DomainEvent) => void;

const eventDispatcher = {
  list: new Map<DomainEventName, EventSubscriber[]>(),
  registerSubscriber(domainEventName: DomainEventName, eventSubscriber: EventSubscriber): void {
    if (!this.list.has(domainEventName)) {
      this.list.set(domainEventName, []);
    }
    const eventSubscribers = this.list.get(domainEventName);
    if (eventSubscribers) {
      eventSubscribers.push(eventSubscriber);
    }
  },
  removeSubscriber(
    domainEventName: DomainEventName,
    removedEventSubscriber: EventSubscriber
  ): void {
    const eventSubscribers = this.list.get(domainEventName);
    if (!eventSubscribers) {
      return;
    }
    eventSubscribers.filter((eventSubscriber) => eventSubscriber !== removedEventSubscriber);
  },
  dispatch(domainEvent: DomainEvent): void {
    const eventSubscribers = this.list.get(domainEvent.name);
    if (!eventSubscribers) {
      return;
    }
    eventSubscribers.forEach((eventSubscriber) => eventSubscriber(domainEvent));
  }
};

export default Object.freeze(eventDispatcher);
