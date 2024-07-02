import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";
// import { ToastContainer, toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
import toast, { Toaster } from 'react-hot-toast';
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      {/* <ToastContainer posit /> */}
      <Toaster
         position="top-center"
         reverseOrder={false}
      />

      
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;
