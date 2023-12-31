import Image from "next/image"
import { formatMoney } from "../helpers"
import useKiosk from "../hooks/useKiosk"

const SummaryProduct = ({ product }) => {
  const {
    handleEditAmount,
    handleDeleteProduct,
    setTotal,
    total,
    handleChangeModalQuestion,
  } = useKiosk()

  return (
    <div
      className=" shadow-slate-700 shadow p-5 mb-3 sm:gap-10 gap-3 items-center rounded-xl flex sm:flex flex-wrap 
    "
      id="Summary"
    >
      <div className="md:w-1/6">
        <Image
          className="rounded-xl"
          width={150}
          height={200}
          src={`/assets/img/${product.image}.jpg`}
          alt={`Imagen producto ${product.name}`}
        />
      </div>
      <div className="md:w-3/6">
        <p className="sm:text-2xl text-xl font-bold">{product.name}</p>
        <p className="sm:text-2xl text-xl font-bold sm:mt-2 mt-1 ">
          Amount: {product.amount}
        </p>
        <p className="text-xl font-bold mt-2  text-amber-500">
          Price: {formatMoney(product.price)}
        </p>
        <p className="text-sm sm:mt-2 mt-1 font-bold text-gray-400">
          Subtotal: {formatMoney(product.price * product.amount)}
        </p>
      </div>
      <div className="sm:w-auto w-11/12">
        <button
          type="button"
          className="rounded-md flex  items-centersm:flex gap-2 px-5 py-2 font-bold uppercase shadow bg-sky-600 w-full hover:opacity-60  "
          onClick={() => handleEditAmount(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-4 h-4 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
          Edit
        </button>
        <button
          type="button"
          className="rounded-md flex gap-2 px-5 py-2 mt-3 shadow font-bold uppercase bg-red-600 w-full hover:opacity-60 
          "
          //   onClick={() => handleChangeModalQuestion(product.id)}
          onClick={() => handleDeleteProduct(product.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  )
}

export default SummaryProduct
