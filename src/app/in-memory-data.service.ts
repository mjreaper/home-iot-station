import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const devices = [
            { id: 1, name: "Testdev 1" },
            { id: 2, name: "Testdev 2" },
            { id: 3, name: "Testdev 3" },
            { id: 4, name: "Testdev 4" },
            { id: 5, name: "Testdev 5" }
        ];

        return { devices };
    }
}