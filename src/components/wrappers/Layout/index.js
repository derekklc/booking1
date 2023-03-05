import HomePage from "../Home"
import Booking from "../Booking"
import AboutUs from "../About"
import Products from "../Products"
import { PageNames } from "../../../constants"
import ContactUs from "../Contact"
import SignUp from "../SignUp"
import Login from "../Login"
import BottomBar from "tt/components/organisms/BottomBar"

const renderHome = () => {
  return <HomePage />
}

const renderBooking = () => {
  return <Booking />
}

const renderAbout = () => {
  return <AboutUs />
}

const renderProducts = () => {
  return <Products />
}

const renderContact = () => {
  return <ContactUs />
}

const renderSignUp = () => {
  return <SignUp />
}

const renderLogin = () => {
  return <Login />
}

const RenderPages = ({ pageName }) => {
  if (pageName === PageNames.Bookings) {
    return renderBooking()
  }
  if (pageName === PageNames.About) {
    return renderAbout()
  }
  if (pageName === PageNames.Products) {
    return renderProducts()
  }
  if (pageName === PageNames.Contact) {
    return renderContact()
  }
  if (pageName === PageNames.SignUp) {
    return renderSignUp()
  }
  if (pageName === PageNames.Login) {
    return renderLogin()
  }

  return renderHome()
}

const Layout = ({ pageName }) => {
  return (
    <div>
      {RenderPages({ pageName })}
      <BottomBar />
    </div>
  )
}

export default Layout
