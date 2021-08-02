const Result = props => {
  return (
    <div className=" self-center">
      <h1>Report Table Coming Soon...</h1>
      <ul>
        {props.onAddResult.length == 0 ? (
          <p>Empty</p>
        ) : (
          props.onAddResult.map(item => <li>{JSON.stringify(item)}</li>)
        )}
      </ul>
    </div>
  )
}

export default Result
