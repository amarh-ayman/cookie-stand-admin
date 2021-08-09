import hoursOpen from '../../data'

const TableHeader = () => {
  return (
    <thead className="bg-green-500 rounded-lg">
      <tr key={0} className="">
        {hoursOpen.map((item, index) => (
          <td key={index + 1} className="p-2">
            {item}
          </td>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
