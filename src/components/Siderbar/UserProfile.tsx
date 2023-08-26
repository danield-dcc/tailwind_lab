import { LogOut } from 'lucide-react'

export function UserProfile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      <img
        src="https://github.com/danield-dcc.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Daniel Conceição
        </span>
        <span className="truncate text-sm text-zinc-500">daniel@gmail.com</span>
      </div>
      <button
        type="button"
        className="ml-auto p-2 rounded-md hover:bg-zinc-50 "
      >
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
