function SaleBanner() {
  // Replace with you component logic
  return (
    <>
      <div class="bg-black text-white p-4">
        <div class="container mx-auto text-center">
          <div class="flex items-center justify-center">
            <svg fill="none" width="24px" height="24px" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="mx-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path>
            </svg>
            <span class="text-2xl font-bold">Mix & Match Buy 1 Get 1 50% off!</span>
          </div>
          <p class="mt-2 text-lg">Sale Ends in X Days Y Hours T Minutes P Seconds</p>
        </div>
      </div>
    </>
  );
}

export default SaleBanner;
