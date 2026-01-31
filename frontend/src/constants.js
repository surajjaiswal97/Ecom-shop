// Base URL for API requests. Set BACKEND_APP_BASE_URL in your environment
// e.g. locally: BACKEND_APP_BASE_URL=http://localhost:5000
export const BASE_URL = process.env.BACKEND_APP_BASE_URL || '';
export const PRODUCTS_URL = process.env.BACKEND_APP_BASE_URL + '/api/products';
export const USERS_URL = process.env.BACKEND_APP_BASE_URL + '/api/users';
export const ORDERS_URL = process.env.BACKEND_APP_BASE_URL + '/api/orders';
export const PAYPAL_URL = process.env.BACKEND_APP_BASE_URL + '/api/config/paypal';
