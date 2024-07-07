import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [],
    image : 'image',
    category: 'category',
    title:'title',
    price:'price',
    Loading:'loading'
}

export const fetchproducts = createAsyncThunk('converter/fetchproducts',async ()=>{

    const response =await fetch(`${'https://fakestoreapi.com/products'}/products`);
    const data = await response.json();
    console.log(data);
    return data;
})

const productslice = createSlice({
    name :'products',
    initialState:initialState,
    reducers: {
        setimage : (state,action) => {
            state.image=action.payload 
        },
        setcategory : (state,action) => {
            state.category=action.payload
        },
        settitle : (state,action) => {
            state.title=action.payload
        },
        setprice : (state,action) => {
            state.price=action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.pending, (state) => {
            state.Loading = 'loading'
        });
        builder.addCase(fetchproducts.fulfilled, (state,action) => {
            state.Loading = 'succeeded'
            state.product = action.payload
        })
        builder.addCase(fetchproducts.rejected,(state) => {
            state.Loading='failed'
        })
    }
})

export const {
    setimage,
    setcategory,
    settitle,
    setprice
} = productslice.actions;

export default productslice.reducer;