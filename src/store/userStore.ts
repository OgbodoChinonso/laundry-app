import { create } from 'zustand';

interface User{
  user: {
    firstname: string,
    lastname: string,
    location: string,
    mobileNumber: string,
    // password: string | number,
  }
  loginUser: (userData: User['user']) => void,
  logoutUser: () => void
}

export const userDetails = create<User>((set) =>({
  user: null,
loginUser: (userData) => set({user: userData}),
logoutUser: () => set({user: null})
}))
