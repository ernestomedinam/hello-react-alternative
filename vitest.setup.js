import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from "msw/node";
import { songsHandlers } from './src/utils/mswHandlers/songs';

const server = setupServer(...songsHandlers);

beforeAll(() => server.listen({onUnhandledRequest: "error"}));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
