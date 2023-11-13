"use client";

import { Trash } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {};

const DeleteButton = ({ id }: { id: string }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      router.push("/menu");
      toast("Producto eliminado satisfatoriamente!");
    } else {
      const data = res.json();
      toast.error(data);
    }
  };
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    return;
  }
  return (
    <button
      className="bg-red-500 text-white p-3 absolute top-4 right-4 rounded-full"
      onClick={handleDelete}
    >
      <Trash size={18} color="#fff" weight="fill" />
    </button>
  );
};

export default DeleteButton;
