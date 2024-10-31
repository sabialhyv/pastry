import Navbar from './Navbar'
import Footer from './Footer'



const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className='flex-1 mt-32'>
          {children}
        </main>
        <Footer />
  
    </div>
  )
}

export default Layout