import TableComplete from './table/tableComplete'
const ReportTable = ({ token, reportList }) => {
  return (
    <div className="pt-6 pb-6 flex flex-col justify-center items-center justify-items-center">
      <ul>
        {reportList.length == 0 ? (
          <h2>No Cookie Stands Available</h2>
        ) : (
          <TableComplete token={token} reportList={reportList}></TableComplete>
        )}
      </ul>
    </div>
  )
}

export default ReportTable
