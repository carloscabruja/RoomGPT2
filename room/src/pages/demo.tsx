//pages/index.tsx
import { useAuth } from '@/Context/AuthProvider';
import Link from 'next/link';

export default function Home() {

  if (!user) {
    return (
      <>
        <h1>Please log in</h1>
        <Link href="/login">
          login
        </Link>
      </>
    );
  }

   
  return (
    <>
      <h1>Welcome {user.accessToken}</h1>
      <button onClick={() => setUser(null)}>Logout</button>
    </>
  );
}
