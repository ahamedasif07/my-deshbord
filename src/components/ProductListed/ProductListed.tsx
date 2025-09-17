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
    <div className="bg-white w-full rounded-2xl shadow-md p-5 sm:p-5 xs:p-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-5 xs:mb-3">
        <h2 className="text-lg font-semibold xs:text-sm">{productType}</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1 xs:text-xs xs:gap-0.5">
          SORT BY:{" "}
          <span className="font-medium text-gray-800 xs:text-xs">Today</span>
        </button>
      </div>

      {/* Product List */}
      <div className="divide-y">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center py-4 xs:py-2"
          >
            {/* Left: Icon + Name + Date */}
            <div className="flex items-center gap-3 xs:gap-2">
              <div className="w-12 h-12 xs:w-8 xs:h-8 flex items-center justify-center rounded-lg bg-gray-100">
                <User className="w-6 h-6 xs:w-4 xs:h-4 text-gray-600" />
              </div>
              <div>
                <p className="font-medium xs:text-sm">{product.name}</p>
                <p className="text-xs text-gray-500 sm:text-[10px]">
                  {product.date}
                </p>
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex items-center gap-10 xs:gap-4 text-sm xs:text-xs">
              <div>
                <p className="font-medium xs:text-sm">${product.price}</p>
                <p className="text-xs text-gray-500 sm:text-[10px]">Price</p>
              </div>
              <div className="md:block hidden">
                <p className="font-medium xs:text-sm">{product.orders}</p>
                <p className="text-xs text-gray-500 sm:text-[10px]">Orders</p>
              </div>
              <div>
                {product.status === "out-of-stock" ? (
                  <span className="text-xs sm:text-[10px] font-medium text-red-600 bg-red-100 px-2 py-1 xs:px-1 xs:py-0.5 rounded-md">
                    00
                  </span>
                ) : (
                  <p className="font-medium xs:text-sm">{product.stock}</p>
                )}
                <p className="text-xs text-gray-500 sm:text-[10px]">Stock</p>
              </div>
              <div>
                <p className="font-medium xs:text-sm">${product.amount}</p>
                <p className="text-xs text-gray-500 sm:text-[10px]">Amount</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 text-sm text-gray-500 xs:text-xs xs:pt-2">
        <p>Showing {products.length} Results</p>
        <div className="flex gap-2 xs:gap-1">
          <button className="px-2 py-1 xs:px-1 xs:py-0.5 border rounded-md">
            &lt;
          </button>
          <button className="px-3 py-1 xs:px-2 xs:py-0.5 rounded-md bg-blue-600 text-white">
            2
          </button>
          <button className="px-2 py-1 xs:px-1 xs:py-0.5 border rounded-md">
            3
          </button>
          <button className="px-2 py-1 xs:px-1 xs:py-0.5 border rounded-md">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListed;
