import { LogOut } from 'lucide-react'
import Button from '../Button'

export function UserProfile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  )
}
