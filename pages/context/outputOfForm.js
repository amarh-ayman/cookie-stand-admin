import OnCreate from './createForm'
const Result = props => {
  return (
    <div className=" self-center">
      <h1>Report Table Coming Soon...</h1>
      <ul>
        {props.onAddResult.length == 0 ? (
          <h2>No Cookie Stands Available</h2>
        ) : (
          props.onAddResult.map(item => (
            <>
              <li>{JSON.stringify(item)}</li>
              <OnCreate max={item.max} min={item.min}></OnCreate>
            </>
          ))
        )}
      </ul>
    </div>
  )
}

export default Result
