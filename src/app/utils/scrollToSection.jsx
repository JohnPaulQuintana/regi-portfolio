export const scrollToSection = (className) => {
    const targetSection = document.querySelector(`.${className}`);
    console.log(targetSection)
    if (targetSection) {
        // Get the footer height if it's fixed
        const footerHeight = document.querySelector("footer") ? document.querySelector("footer").offsetHeight : 0;

        // Scroll to the section with adjusted position (considering footer height)
        window.scrollTo({
            top: targetSection.offsetTop - footerHeight, // Adjust the scroll position by subtracting the footer height
            behavior: "smooth", // Ensure smooth scrolling
        });
    } else {
      console.error(`Element with id '${className}' not found`);
    }
  };