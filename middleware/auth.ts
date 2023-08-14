import { useAuthStore } from '../store/AuthStore';
import { storeToRefs } from 'pinia';
export default function ({ route, redirect }: any) {
  const authData = useAuthStore();
  const { userData } = storeToRefs(authData);
  const isLoggedIn = userData ?? false;

  console.log('hjhjhjhjh')
  if (route.path ===  '/' && !isLoggedIn) {
    return redirect('/login'); // Redirect to login page if not logged in
  }

  if (route.path.startsWith('/app/') && !isLoggedIn) {
    return redirect('/login'); // Redirect to login page if not logged in
  }

  if (!route.path.startsWith('/app/') && isLoggedIn) {
    return redirect('/app/home'); // Redirect to dashboard or another page if logged in
  }
}
