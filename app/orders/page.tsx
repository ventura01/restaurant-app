"use client";

import { OrderType } from "@/types/types";
import { PencilLine } from "@phosphor-icons/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Props = {};

const OrdersPage = (props: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isPending, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  if (error) return "An error has occurred: " + error.message;
  // console.log(data);
  const handlerUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ id, status });
    toast.success("The order status has been changed");
  };
  if (isPending || status === "loading") return "Loading...";
  return (
    <div className="container max-w-screen-xl mx-auto pt-10 md:py-20">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Orden No.</th>
            <th>Fecha</th>
            <th className="hidden md:block">Producto</th>
            <th>Precio</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
            <tr
              key={item.id}
              className={`${item.status !== "delivered" && "bg-red-50"}`}
            >
              <td className="my-1 p-3 hidden md:block">{item.id}</td>
              <td className="my-1 p-3 ">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="my-1 p-3 hidden md:block">
                {item.products[0].title}
              </td>
              <td className="my-1 p-3 ">{item.price}</td>

              <td>
                {session?.user.isAdmin ? (
                  <form
                    className="flex items-center justify-start gap-x-3"
                    onSubmit={(e) => handlerUpdate(e, item.id)}
                  >
                    <input
                      className="py-2 px-3 ring-2 ring-red-100 rounded-md"
                      placeholder="Status"
                    ></input>
                    <button className="bg-red-500 p-1 rounded-full">
                      <PencilLine size={18} color="#fff" weight="fill" />
                    </button>
                  </form>
                ) : (
                  <td className="my-1 p-3 ">{item.status}</td>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
