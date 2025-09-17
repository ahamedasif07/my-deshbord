// components/ProductListed.tsx
import { Product } from "@/app/page";
import { User } from "lucide-react";

interface ProductListedProps {
  products: Product[];
  productType: string;
}

const ProductListed: React.FC<ProductListedProps> = ({
  products,
  productType,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold">{productType}</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1">
          SORT BY: <span className="font-medium text-gray-800">Today</span>
        </button>
      </div>

      {/* Product List */}
      <div className="divide-y">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center py-4"
          >
            {/* Left: Icon + Name + Date */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-xs text-gray-500">{product.date}</p>
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex items-center gap-10 text-sm">
              <div>
                <p className="font-medium">${product.price}</p>
                <p className="text-xs text-gray-500">Price</p>
              </div>
              <div>
                <p className="font-medium">{product.orders}</p>
                <p className="text-xs text-gray-500">Orders</p>
              </div>
              <div>
                {product.status === "out-of-stock" ? (
                  <span className="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-md">
                    Out of stock
                  </span>
                ) : (
                  <p className="font-medium">{product.stock}</p>
                )}
                <p className="text-xs text-gray-500">Stock</p>
              </div>
              <div>
                <p className="font-medium">${product.amount}</p>
                <p className="text-xs text-gray-500">Amount</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 text-sm text-gray-500">
        <p>Showing {products.length} Results</p>
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded-md">&lt;</button>
          <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
            2
          </button>
          <button className="px-2 py-1 border rounded-md">3</button>
          <button className="px-2 py-1 border rounded-md">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ProductListed;
