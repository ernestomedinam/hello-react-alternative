import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from "msw/node";
import { songsHandlers } from './src/utils/mswHandlers/songs';
import { chickensHandlers } from './src/utils/mswHandlers/chickens';
import { cssColorsHandlers } from './src/utils/mswHandlers/css_colors';

const server = setupServer(
    ...songsHandlers, 
    ...chickensHandlers,
    ...cssColorsHandlers
);

beforeAll(() => server.listen({onUnhandledRequest: "error"}));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
