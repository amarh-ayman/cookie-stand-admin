import 'tailwindcss/tailwind.css'
import axios from 'axios'

const Form = ({ token }) => {
  const AddResultHandler = event => {
    event.preventDefault()
    const form_R = {
      location: event.target.location.value,
      minimun: event.target.min.value,
      maximum: event.target.max.value,
      average_cookies_per_sale: event.target.avg.value,
    }

    let max_cus = form_R.maximum
    let min_cus = form_R.minimun
    let numberOfCustomersHourlyArray = []
    for (let i = 0; i < 14; i++) {
      numberOfCustomersHourlyArray.push(
        Math.floor(Math.random() * (max_cus - min_cus) + min_cus)
      )
    }

    let data = {
      location: form_R.location,
      description: '',
      hourly_sales: numberOfCustomersHourlyArray,
      minimum_customers_per_hour: 1,
      maximum_customers_per_hour: form_R.minimun,
      average_cookies_per_sale: form_R.average,
      owner: 1,
    }

    const config = { headers: { Authorization: 'Bearer ' + token } }
    axios.post(
      'https://cookie-stand-api.herokuapp.com/api/v1/cookie-stands/',
      data,
      config
    )

    // *************************
    event.target.reset()
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
