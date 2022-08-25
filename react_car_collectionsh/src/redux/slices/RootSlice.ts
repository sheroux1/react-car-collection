import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        colour: 'Colour',
        make: 'Make',
        model: 'Model',
        name: 'Name',
        year: 'Year'
    },
    reducers: {
        chooseColour: (state, action) => { state.colour = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseName: (state, action) => { state.name = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},

    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseColour, chooseMake, chooseModel, chooseName, chooseYear } = rootSlice.actions;