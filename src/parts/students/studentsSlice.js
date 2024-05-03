import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: '1',
		name: 'John',
		surname: 'Connor',
		age: '20',
		speciality: 'mathematics',
	},
	{
		id: '2',
		name: 'Max',
		surname: 'Payne',
		age: '20',
		speciality: 'criminology',
	},
];
const studentsSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {},
});

export default studentsSlice.reducer;