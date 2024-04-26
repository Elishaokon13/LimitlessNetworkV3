import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/limitlesslogo.webp'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
        <Image alt='logo' src={logo} className='w-10 h-15' />
    </Link>
  )
}
