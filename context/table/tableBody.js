import TrashIcon from '@rsuite/icons/Trash'
import axios from 'axios'

const TableBody = ({ token, reportList }) => {
  let calculateTotalRow = function (numbers) {
    let x = 0
    for (const i of numbers) {
      x = x + i
    }

    return x
  }

  const trashBtn = event => {
    event.preventDefault()
    let id = event.target.id
    const config = { headers: { Authorization: 'Bearer ' + token } }
    axios.delete(
      `https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/${id}`,
      config
    )
  }
  return (
    <tbody>
      {reportList.map((item, index) => {
        let x = index % 2 == 0 ? 'bg-green-400 p-2' : 'bg-green-300 p-2'

        return (
          <tr key={index + 1} className={x}>
            <td className="border border-green-600 p-2">
              {item.location}&emsp;
              <TrashIcon
                id={item.id}
                color="red"
                cursor="pointer"
                onClick={trashBtn}
              />
            </td>
            {item.hourly_sales.map(my_number => {
              return (
                <td className="border border-green-600 p-2">{my_number}</td>
              )
            })}
            <td className="border border-green-600 p-2">
              {calculateTotalRow(item.hourly_sales)}
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
