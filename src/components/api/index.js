import { Server } from 'miragejs';

export function createApi() {
  new Server({
    routes() {
      this.namespace = 'api';
      this.timing = 2000;

      this.get('/positions', () => {
        return [
          {
            id: 1,
            name: 'Batman',
            score: 89
          },
          {
            id: 8,
            name: 'Wolverine',
            score: 76
          },
          {
            id: 3,
            name: 'Heisenberg',
            score: 64
          },
          {
            id: 6,
            name: 'Jesse',
            score: 40
          }
        ];
      });
    }
  })
};