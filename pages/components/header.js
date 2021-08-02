import ReactUrl from './reacturl'

function Header() {
  return (
    <div className="bg-green-500 p-3 flex justify-between">
      <h1 className="text-2xl font-bold">Cookie Stand Admin</h1>
      <ReactUrl></ReactUrl>
    </div>
  )
}

export default Header
