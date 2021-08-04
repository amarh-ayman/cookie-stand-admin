const TableBody = ({ onAddResult }) => {
  let calculateTotalRow = function (numbers) {
    let x = 0
    for (const i of numbers) {
      x = x + i
    }

    return x
  }

  return (
    <tbody>
      {onAddResult.map((item, index) => {
        let x = index % 2 == 0 ? 'bg-green-400 p-2' : 'bg-green-300 p-2'

        return (
          <tr className={x}>
            <td className="border border-green-600 p-2">{item[0]}</td>
            {item[1].map(my_number => {
              return (
                <td className="border border-green-600 p-2">{my_number}</td>
              )
            })}
            <td className="border border-green-600 p-2">
              {calculateTotalRow(item[1])}
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
