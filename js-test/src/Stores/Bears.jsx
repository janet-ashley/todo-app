import {create} from 'zustand'

export const useStoreCount = create( (set) => ({
    bears : 0,
    increment : () => set ((state) => ({bears : state.bears + 1})),
    decrement : () => set ((state) => ({bears : state.bears - 1})),
    rest : () => set ((state) => ({bears : 0}))

}) )