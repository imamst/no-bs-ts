type AdvMap<T> = (data: T) => T;
type AdvFilter<T> = (data: T) => boolean;
type Handler<T> = {
    [Prop in keyof T as `map${Capitalize<string & Prop>}`]?: AdvMap<T[Prop]>;
} & {
    [Prop in keyof T as `filter${Capitalize<string & Prop>}`]?: AdvFilter<T[Prop]>;
}
type AdvProcessedEvent<T> = {
    eventName: keyof T;
    data: T[keyof T];
}

class AdvEventProcessor<T extends {}> {
    private handlers: Handler<T>[] = [];
    private advProcessed: AdvProcessedEvent<T>[] = [];

    handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
        let allowEvent = true;

        const capitalize = (str: string) => 
            `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

        for (const handler of this.handlers) {
            const filterFunc = handler[
                `filter${capitalize(eventName as string)}` as keyof Handler<T>
            ] as unknown as ((value: T[K]) => boolean) | undefined;

            if (filterFunc && !filterFunc(data)) {
                allowEvent = false;
                break;
            }
        }

        if (allowEvent) {
            let mappedData = { ...data };
            for (const handler of this.handlers) {
                const mapFunc = handler[
                    `map${capitalize(eventName as string)}` as keyof Handler<T>
                ] as unknown as ((value: T[K]) => T[K]) | undefined;

                if (mapFunc) {
                    mappedData = <T[K]>mapFunc(mappedData);
                }
            }

            this.advProcessed.push({
                eventName,
                data: mappedData
            })
        }
    }

    addHandler(handler: Handler<T>): void {
        this.handlers.push(handler);
    }

    getProcessedEvents() {
        return this.advProcessed;
    }
}

interface AdvEventMap {
    login: { user?: string; name?: string; hasSession?: boolean };
    logout: { user?: string };
}

class AdvUserEventProcessor extends AdvEventProcessor<AdvEventMap> {}

const auep = new AdvUserEventProcessor();

auep.addHandler({
    filterLogin: ({user}) => Boolean(user),
    mapLogin: (data) => ({
        ...data,
        hasSession: Boolean(data.user && data.name),
    }),
});

auep.handleEvent("login", {
    name: "jack"
});

auep.handleEvent("login", {
    user: "tom",
    name: "tomas",
});

auep.handleEvent("logout", {
    user: "tom"
});

console.log(auep.getProcessedEvents());