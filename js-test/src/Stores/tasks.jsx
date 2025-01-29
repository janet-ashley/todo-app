import {create} from "zustand";
import axiosInstance from "./axiosInstance";

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: null,
  errorData: null,
};

export const useStoreTasks = create((set) => ({
  ...initialState,

  fetchTasks: async () => {
    set({ ...initialState, loading: true });
    try {
      const response = await axiosInstance.get("/");
      set({ ...initialState, success: true, data: response.data });
    } catch (err) {
      console.error("Error fetching tasks:", err);
      set({ ...initialState, error: true, errorData: err.message });
    }
  },

  addTask: async (task) => {
    set({ loading: true });
    try {
      const response = await axiosInstance.post("/", task);
      set((state) => ({
        ...state,
        data: [...(state.data || []), response.data],
        success: true,
        loading: false,
      }));
    } catch (err) {
      console.error("Error adding task:", err);
      set({ error: true, errorData: err.message, loading: false });
    }
  },

  deleteTask: async (id) => {
    set({ loading: true });
    try {
      await axiosInstance.delete(`/${id}`);
      set((state) => ({
        ...state,
        data: state.data?.filter((task) => task.id !== id),
        success: true,
        loading: false,
      }));
    } catch (err) {
      console.error("Error deleting task:", err);
      set({ error: true, errorData: err.message, loading: false });
    }
  },
}));
