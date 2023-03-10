import { createSlice } from '@reduxjs/toolkit'

const initialStore = {
    itemArray: [
        {name: 'Lord of the Rings', price: 9.99, id: 0, img: '/images/lotr.jpg'},
        {name: 'Bookmark', price: 2.99, id: 1},
        {name: 'Magazine', price: 3.99, id: 2}
    ],
    movieStock: [
        {name: 'Avatar', price: 19.99, id: 3},
        {name: 'Blade Runner 2049', price: 19.99, id: 4},
        {name: 'How to Train Your Dragon Trilogy', price: 29.99, id: 5, img: '/images/dragontrilogy.jpg'},
        {name: 'E.T.', price: 9.99, id: 6, img:'/images/et.jpg'},
        {name: 'The Princess Bride', price: 9.99, id: 7},
        {name: 'Mac and Me', price: 0.99, id: 8}
    ],
    gameStock: [
        {name: 'Trouble', price: 9.99, id: 8},
        {name: 'Cascadia', price: 39.99, id: 9, img: '/images/cascadia.jpg'},
        {name: 'Betrayal at Haunted Hill', price: 49.99, id: 10}
    ],
}

export const storeSlice = createSlice({
    name: 'store',
    initialState: initialStore,
    reducers: {},
})

export default storeSlice.reducer;