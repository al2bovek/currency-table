export const Row = ({ row }) => {
  const { type, amount, currency } = row;
  return (
    <>
      <tr className="bg-[#D7B5C9] text-gray-600 [&>td]:border [&>td]:border-white [&>td]:w-[33%] [&>td]:py-4 text-2xl [&>td]:font-light">
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  )
}