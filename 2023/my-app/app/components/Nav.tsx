'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-row">
      <Link
        className={`p-4 hover:bg-slate-200 ${pathname === '/' && "font-bold"}`}
        href="/"
      >
        Home
      </Link>
    </nav>
  )
}