import { create } from 'zustand';

interface User{
      firstname: string,
    lastname: string,
    location: string,
    mobileNumber: string,
    // password: string | number,
}
interface UserState{
  user: User | null,
  loginUser: (userData: User) => void,
  logoutUser: () => void
}

export const userDetails = create<UserState>((set) =>({
  user: null,
loginUser: (userData) => set({user: userData}),
logoutUser: () => set({user: null})
}))
