import { Store } from 'pullstate';
import { App } from '@shared/types';

window.onresize = () => {
	updateStore({ isMobile: window.innerWidth <= 1279 });
};
export const AppStore = new Store<App>({
	any: '',
});

export const updateStore = (data: object) =>
	AppStore.update((s: object) => ({ ...s, ...data }));
