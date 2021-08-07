import Link from 'next/link'
function CookieStandHeader({ token, setToken }) {
  const signOutHandler = () => {
    setToken(null)
  }
  return (
    <div className="bg-green-500 p-3 flex justify-between">
      <h1 className="text-2xl font-bold">Cookie Stand Admin</h1>
      <ul className="flex pr-5 w-2/5 justify-end">
        <li className="p-3 bg-green-100 ml-5 rounded hover:bg-green-200 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-3 bg-green-100 ml-5 rounded hover:bg-green-200 cursor-pointer">
          <Link href="/">
            <button onClick={signOutHandler}>Sign Out</button>
          </Link>
        </li>

        <li className="p-3 bg-green-100 ml-5 rounded hover:bg-green-200 cursor-pointer">
          <Link href="./overview">Overview</Link>
        </li>
      </ul>
    </div>
  )
}

export default CookieStandHeader
