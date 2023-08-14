import { ref } from 'vue'
import { defineStore } from 'pinia'
export const USER_KEY = 'user-data-in-viue';
export const getUserdata = () => {
  return JSON.parse(localStorage.getItem(USER_KEY) ?? '');
}
export interface userDataType {
  email: string;
  name: string;
  mobile: string;
}
export const useAuthStore = defineStore('auth-store', () => {
  // const count = ref(1)
  // const doubleCount = computed(() => count.value * 2)
  const userData = ref<userDataType | null>(null);

  function setUserData (data: userDataType) {
    userData.value = data;
    console.log(data)
  }
  // function increment() {
  //   count.value++
  // }

  return { userData, setUserData }
})
