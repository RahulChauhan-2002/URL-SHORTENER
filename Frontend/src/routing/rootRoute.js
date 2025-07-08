// Define only the root route here
import { createRootRoute } from '@tanstack/react-router';
import App from '../App';

export const rootRoute = createRootRoute({
  component: App,
});
