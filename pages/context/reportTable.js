import Table from './table/tableComplete'
const Result = ({ onAddResult }) => {
  return (
    <div className="pt-6 pb-6 flex flex-col justify-center items-center justify-items-center">
      <ul>
        {onAddResult.length == 0 ? (
          <h2>No Cookie Stands Available</h2>
        ) : (
          <Table onAddResult={onAddResult}></Table>
        )}
      </ul>
    </div>
  )
}

export default Result
