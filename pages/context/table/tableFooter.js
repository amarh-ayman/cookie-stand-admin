const TableFooter = ({ reportList }) => {
  let calculateTotalColumn = function (ArrayOfArrays) {
    let resultsum = 0
    let ArrayOfSums = []
    for (let i = 0; i < 14; i++) {
      let resultsum = 0
      for (let j = 0; j < ArrayOfArrays.length; j++) {
        resultsum = resultsum + ArrayOfArrays[j].hourly_sales[i]
      }
      ArrayOfSums.push(resultsum)
    }
    for (const iterator of ArrayOfSums) {
      resultsum = resultsum + iterator
    }
    return [ArrayOfSums, resultsum]
  }
  return (
    <tfoot>
      <tr className="bg-green-500 p-2">
        <td className="border border-green-600 p-2">Totals</td>
        {calculateTotalColumn(reportList)[0].map(number => {
          return <td className="border border-green-600 p-2">{number}</td>
        })}
        <td className="border border-green-600 p-2">
          {calculateTotalColumn(reportList)[1]}
        </td>
      </tr>
    </tfoot>
  )
}

export default TableFooter
