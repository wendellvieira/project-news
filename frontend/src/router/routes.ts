import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('layouts/GeneralLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/Home/index.vue') },
		],
	},
];

export default routes;
