// components/Logout.tsx
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Logout() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/Auth");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-black text-white px-4 py-2 rounded-4xl cursor-pointer hover:bg-white hover:text-black transition duration-200"
    >
      Logout
    </button>
  );
}
