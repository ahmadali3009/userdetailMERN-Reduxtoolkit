import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    userdetails: [],
    loading: false,
    error: null
}
  // First, create the thunk
 export const fetchUserById = createAsyncThunk(
    'userdetail/createuser',
    async (userdetail, thunkAPI) => {
        try{
            const response = await axios.post(`http://localhost:8000/new` , userdetail)
            // console.log(response.json)
            return response.data
        }
        catch(error)
        {
            return thunkAPI.rejectWithValue(error.response.data)
        }
      
    },
)
export const getuserdetail = createAsyncThunk(
    'userdetail/getusers',
    async ( _ ,thunkAPI) => {
        try{
            const response = await axios.get(`http://localhost:8000/new`)
            // console.log(response.json)
            return response.data
        }
        catch(error)
        {
            return thunkAPI.rejectWithValue(error.response.data)
        }
      
    },
)

export const userdetailSlice = createSlice({
    name: "userdetail",
    initialState,
    reducers: {
        adduser: (state, action) => {
            console.log("action:", action)
            console.log("action.payload", action.payload.Name)

            const userdetail = {
                Name: action.payload.Name,
                email: action.payload.email,
                phone: action.payload.phone
            }
          
            state.userdetails.push((userdetail))
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // builder.addCase(fetchUserById.fulfilled, (state, action) => {
          // Add user to the state array
        //   state.userdetails.push(action.payload)
        builder
        .addCase(fetchUserById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
          state.loading = false;
        //   state.userdetails.push(action.payload);
        })
        .addCase(fetchUserById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }).addCase(getuserdetail.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getuserdetail.fulfilled, (state , action) => {
            state.loading = false;
            state.userdetails = action.payload; // Update userdetails with fetched data

          })
          .addCase(getuserdetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
        
      },
})

export const { adduser } = userdetailSlice.actions
export default userdetailSlice.reducer