import { Row } from "../row/Row"
import { data } from '../../../data/data'
export const Body = () => {
  return (
    <>
      <tbody className="w-[60%]
    [&>tr:nth-of-type(odd)]:bg-[#E9D7E2]">
        {data.map(row => <Row
          row={row}
          key={row.id}
        />)}
      </tbody>
    </>
  )
}