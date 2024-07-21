import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from "msw/node";
import { songsHandlers } from './src/utils/mswHandlers/songs';
import { chickensHandlers } from './src/utils/mswHandlers/chickens';

const server = setupServer(...songsHandlers, ...chickensHandlers);

beforeAll(() => server.listen({onUnhandledRequest: "error"}));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
