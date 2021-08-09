import TableComplete from './table/tableComplete'
const ReportTable = ({ token, reportList }) => {
  return (
    <div className="pt-6 pb-6 flex flex-col justify-center items-center justify-items-center">
      <ul>
        <TableComplete token={token} reportList={reportList}></TableComplete>
      </ul>
    </div>
  )
}

export default ReportTable
