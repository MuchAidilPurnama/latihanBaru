
  <template>
      <body class="bg-gray-100">
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Your Cart</h1>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5"> <!-- product -->
              <div class="w-20">
                <img class="h-24" src="https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/f/if3401_2_footwear_photography_side20lateral20view_grey.jpg" alt="">
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">RIVALRY 86 LOW</span>
                <span class="text-purple-500 text-xs">Adidas</span>
                <a href="#" class="font-semibold hover:text-purple-500 tex-t-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
  
              <input class="mx-2 border text-center w-8" type="text" value="1">
  
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">$2100</span>
            <span class="text-center w-1/5 font-semibold text-sm">$2100</span>
          </div>
  
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5"> <!-- product -->
              <div class="w-20">
                <img class="h-24" src="https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/d/id4655_2_footwear_photography_side20lateral20view_grey.jpg" alt="">
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">SUPERTAR XLG</span>
                <span class="text-purple-500 text-xs">Adidas</span>
                <a href="#" class="font-semibold hover:text-purple-500 text-gray-500 text-xs">Remove</a>
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
              <input class="mx-2 border text-center w-8" type="text" value="1">
  
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
              </svg>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
            <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
          </div>
  
          <a href="/product" class="flex font-semibold text-purple-600 text-sm mt-10">
        
            <svg class="fill-current mr-2 text-purple-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            Continue Shopping
          </a>
        </div>
  
        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items 3</span>
            <span class="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div class="py-10">
            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
          </div>
          <button class="bg-purple-500 hover:bg-purple-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <a href="/checkout">
            <button  class="bg-purple-500 font-semibold hover:bg-purple-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
         </a>
        </div>
        <div>         
        </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="bg-gray-100 pt-5">
   <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
     <div class="p-5">
       <h3 class="font-bold text-xl text-indigo-600">Aidil Jnselz</h3>
     </div>
      <div class="p-5">
         <div class="text-sm uppercase text-indigo-600 font-bold">Resources</div>
         <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a> 
      </div>
      <div class="p-5">
         <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
         <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
      <div class="p-5">
         <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
         <a class="my-3 block" href="/#">Aidil, S ukamenak jl.pasawahan, ID <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com <span class="text-teal-600 text-xs p-1"></span></a> 
      </div>
   </div>
</div>
      <div class="bg-gray-200">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Aidil Purnama —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@aidilprnma_</a>
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
    </footer>
  </body>
  </template>

    <style>
      #summary {
        background-color: #f6f6f6;
      }
    </style>
  