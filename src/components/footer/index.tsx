import GoogleMap from '@/components/footer/map'
import Copyright from '@/components/footer/copyright'
import Bottom from '@/components/footer/bottom'

export default function Footer() {
  return (
    <footer id='footer'>
      <Bottom />
      <GoogleMap />
      <Copyright />
    </footer>
  )
}
