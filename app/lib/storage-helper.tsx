'use client';


export function getLocalStorage(key: string, defaultValue: any) {

    const stickyValue = localStorage.getItem(key);

    if (stickyValue !== null && stickyValue !== undefined) {
        try {
            return JSON.parse(stickyValue);
        } catch (error) {
            console.error(`Error parsing JSON for key "${key}":`, error);
            return defaultValue;
        }
    } else {
        return defaultValue;
    }
}

export function setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}