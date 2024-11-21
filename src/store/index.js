import { createStore } from 'vuex'

const state = {
	products: [
		{
			id: 1,
			img: '/products/product1.jpg',
			title: 'product 1',
			price: 130,
			category: 'ring',
		},
		{
			id: 2,
			img: '/products/product2.jpg',
			title: 'product 2',
			price: 130,
			category: 'necklace',
		},
		{
			id: 3,
			img: '/products/product3.jpg',
			title: 'product 3',
			price: 130,
			category: 'necklace',
		},
		{
			id: 4,
			img: '/products/product4.jpg',
			title: 'product 4',
			price: 430,
			category: 'earring',
		},
		{
			id: 5,
			img: '/products/product5.jpg',
			title: 'product 5',
			price: 130,
			category: 'ring',
		},
		{
			id: 6,
			img: '/products/product6.jpg',
			title: 'product 6',
			price: 130,
			category: 'necklace',
		},
		{
			id: 7,
			img: '/products/product1.jpg',
			title: 'product 7',
			price: 130,
			category: 'ring',
		},
		{
			id: 8,
			img: '/products/product2.jpg',
			title: 'product 8',
			price: 130,
			category: 'necklace',
		},
		{
			id: 9,
			img: '/products/product3.jpg',
			title: 'product 9',
			price: 130,
			category: 'necklace',
		},
		{
			id: 10,
			img: '/products/product4.jpg',
			title: 'product 10',
			price: 430,
			category: 'earring',
		},
	],
	productID: null,
	cart: [],
}

const mutations = {}

const actions = {}

const getters = {
	getProducts: (state) => state.products,
	getProductId: (state) => state.productID,
	getCart: (state) => state.cart,
}

export default createStore({
	state,
	getters,
	actions,
	mutations,
})
