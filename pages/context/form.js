import 'tailwindcss/tailwind.css'

const Form = ({ onTakeResult }) => {
  const AddResultHandler = event => {
    event.preventDefault()
    const form_R = {
      location: event.target.location.value,
      minimun: event.target.min.value,
      max: event.target.max.value,
      average: event.target.avg.value,
    }

    event.target.reset()
    onTakeResult(prevR => [...prevR, form_R])
  }
  return (
    <form onSubmit={AddResultHandler}>
      <div className="m-5">
        <label className="font-medium " for="location">
          Location
        </label>
        <input
          className="bg-gray-200 w-11/12"
          type="text"
          name="location"
          required
        />
      </div>
      <div className="overflow-hidden flex justify-between m-5">
        <div>
          <label className="text-xs font-bold " for="min">
            Minimun Custmor per Hour
          </label>
          <br />
          <input type="number" name="min" />
        </div>
        <div>
          <label className="text-xs font-bold " for="max">
            Maximun Custmor per Hour
          </label>
          <br />
          <input type="number" name="max" />
        </div>
        <div>
          <label className="text-xs font-bold " for="average">
            Average Cookies per Sale
          </label>
          <br />
          <input type="number" step="0.01" name="avg" />
        </div>
        <button className="bg-green-500 w-40 p-4" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default Form
