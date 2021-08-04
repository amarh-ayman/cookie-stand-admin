import TableHeader from './header'
import TableBody from './content'
import TableFooter from './footer'

const Table = ({ onAddResult }) => {
  return (
    <table className="w=11/12">
      <TableHeader />
      <TableBody onAddResult={onAddResult} />
      <TableFooter onAddResult={onAddResult} />
    </table>
  )
}

export default Table
