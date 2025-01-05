// lib/api.js
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const baseUrl = 'http://192.168.20.61:8000';
export const apiUrl = (path) => {
    return `${baseUrl}${path}`;
};