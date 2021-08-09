import TableHeader from './tableHeader'
import TableBody from './tableBody'
import TableFooter from './tableFooter'

const TableComplete = ({ token, reportList }) => {
  return (
    <table className="w=11/12">
      <TableHeader />
      <TableBody token={token} reportList={reportList} />
      <TableFooter reportList={reportList} />
    </table>
  )
}

export default TableComplete
