export interface AppStore {
  contacts: Contact[];
  counter: number;
  isLoading: boolean;
}

export interface Contact {
  id: number;
  name: string;
}

export const appStore: AppStore = {
  contacts: null,
  counter: 0,
  isLoading: false,
}

console.log("appStore", appStore);
