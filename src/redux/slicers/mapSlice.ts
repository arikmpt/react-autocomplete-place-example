import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HistoryProps {
  name: string;
  center: google.maps.LatLngLiteral
}

export interface MapState {
  zoom: number
  center: google.maps.LatLngLiteral
  histories: HistoryProps[]
}

const initialState: MapState = {
  zoom: 5,
  center: {lat: -25.344, lng: 131.031 },
  histories: []
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload
    },
    setCenter: (state,  action: PayloadAction<google.maps.LatLngLiteral>) => {
      state.center = action.payload
    },
    setHistories: (state,  action: PayloadAction<HistoryProps>) => {
      state.histories = [...state.histories, action.payload]
    },
  },
})

export const { setZoom, setCenter, setHistories } = mapSlice.actions

export default mapSlice.reducer