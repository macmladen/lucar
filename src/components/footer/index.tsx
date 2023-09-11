import GoogleMap from '@/components/footer/map'
import Copyright from '@/components/footer/copyright'
import Bottom from '@/components/footer/bottom'
import CallUs from '@/components/footer/call-us'

export default function Footer() {
  return (
    <footer id='footer'>
      <CallUs />
      <Bottom />
      <GoogleMap />
      <Copyright />
    </footer>
  )
}
