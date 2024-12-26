import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
const Loader = () => {
  const location = useLocation();
  console.log(location)
    useEffect(() => {
      // Define the keys and corresponding pages (don't include leading "/")
      const pages = ["", "services", "about", "contact", "career", "pricing"];
  
      // Get the current page without the leading "/"
      const currentPage = location.pathname.slice(1);
  
      // Initialize sessionStorage keys for each page only if they don't exist
      if (!sessionStorage.getItem(currentPage)) {
        sessionStorage.setItem(currentPage, "false");  // Default to false if not set
      }
  
      // Reset all pages to 'false' (avoid keeping previous states)
      pages.forEach((page) => {
        if (page !== currentPage){

          sessionStorage.setItem(page, "false");  // Reset all to false
        }
      });
  
      // Check if we are on a page in the list
      if (pages.includes(currentPage)) {
        if (sessionStorage.getItem(currentPage) !== "true") {
          sessionStorage.setItem(currentPage, "true");  // Mark as refreshed
          window.location.reload();  // Trigger page reload
        } 
      }
    }, [location.pathname]);  // Run the effect whenever the pathname changes
  

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading flex flex-col items-center gap-2 text-4xl">
        
        <div className="flex-col tablet:flex-row justify-center">
          <div className="load-text text-xl text-center">
            <span>R</span>
            <span>E</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
            <span>A</span>
            <span>L</span>
            <span>D</span>
          </div>
          <div className="load-text text-center">
            <span>B</span>
            <span>A</span>
            <span>R</span>
            <span>A</span>
            <span>W</span>
            <span>I</span>
            <span>D</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
