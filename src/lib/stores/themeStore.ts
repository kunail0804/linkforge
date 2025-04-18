import { writable, type Writable } from 'svelte/store';

const LOCAL_STORAGE_KEY = 'theme';
const DEFAULT_THEME = 'light';

function createThemeStore(): Writable<'light' | 'dark'> & { toggle: () => void } {
  const browser = typeof window !== 'undefined';
  const initial = browser && localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark' ? 'dark' : DEFAULT_THEME;

  const store = writable<'light' | 'dark'>(initial);

  if (browser) {
    store.subscribe((theme) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    });
  }

  return {
    ...store,
    toggle: () => {
      store.update((t) => (t === 'light' ? 'dark' : 'light'));
    }
  };
}

export const theme = createThemeStore();