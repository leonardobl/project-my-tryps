import dinamic from 'next/dynamic'

const Map = dinamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  return <Map />
}
