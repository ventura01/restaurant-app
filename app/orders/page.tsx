'use client'

type Props = {};

const OrdersPage = (props: Props) => {
  return (
    <div className="container max-w-screen-xl mx-auto">
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
          <tr className="text-sm md:text-base bg-red-50">
            <td className="my-1 hidden md:block">12545</td>
            <td className="my-1 ">12.12.2023</td>
            <td className="my-1 hidden md:block">Pizza Margherita</td>
            <td className="my-1 ">18.99</td>
            <td className="my-1 ">En camino</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-50">
            <td className="my-1 hidden md:block">12545</td>
            <td className="my-1 ">12.12.2023</td>
            <td className="my-1 hidden md:block">Pizza Margherita</td>
            <td className="my-1 ">18.99</td>
            <td className="my-1 ">En camino</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-50">
            <td className="my-1 hidden md:block">12545</td>
            <td className="my-1 ">12.12.2023</td>
            <td className="my-1 hidden md:block">Pizza Margherita</td>
            <td className="my-1 ">18.99</td>
            <td className="my-1 ">En camino</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
