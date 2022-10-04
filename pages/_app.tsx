import '../styles/globals.css'
import '../styles/main.css'
import '../styles/util.css'
import '../styles/vendor/bootstrap/css/bootstrap.min.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'
import '../fonts/linearicons-v1.0.0/icon-font.min.css'
import '../styles/vendor/animate/animate.css'
import '../styles/vendor/css-hamburgers/hamburgers.min.css'
import '../styles/vendor/animsition/css/animsition.min.css'
import '../styles/vendor/select2/select2.min.css'
import '../styles/vendor/daterangepicker/daterangepicker.css'
import '../styles/vendor/slick/slick.css'
import '../styles/vendor/MagnificPopup/magnific-popup.css'
import '../styles/vendor/perfect-scrollbar/perfect-scrollbar.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
