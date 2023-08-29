<template>
<!-- Swap dark-theme to light-theme for light color theme -->
<footer id="dark-theme" class='bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-6 md:gap-2'>
  <div class='grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 '>
    <div class='flex flex-col gap-6'>
      <label class='text-gray-400'>COLLECTIONS</label>
      <ul class='flex flex-col gap-6 '>
        <li>Stan Smith</li>
        <li>Superstar</li>
        <li>Ultraboost</li>
        <li>Adidas Exclusive</li>
      </ul>
    </div>
    <div class='flex flex-col gap-6'>
      <label class='text-gray-400'>SUPPORT</label>
      <ul class='flex flex-col gap-6'>
        <li>Contact Us</li>
        <li>Ordering</li>
        <li>Payment & delivery</li>
        <li>Your Account</li>
      </ul>
    </div>
    <div class='flex flex-col gap-6'>
      <label class='text-gray-400'>FEATURED</label>
      <ul class='flex flex-col gap-6 '>
        <li>New Arrivals</li>
        <li>Imposible is Nothing</li>
        <li>Sale</li>
        <li>Last Change</li>
      </ul>
    </div>
    <div className='flex flex-col gap-6'>
      <label className='text-gray-400'>SPORT</label>
      <ul className='flex flex-col gap-6 '>
        <li>Real Madrid</li>
        <li>Arsenal</li>
        <li>Juventus</li>
        <li>Manchester United</li>
      </ul>
    </div>
  </div>
  <div class='w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent'></div>
  <div class='flex flex-col items-center gap-8 md:justify-between md:flex-row'>
    <div class='flex flex-col gap-2'>
      <p class='text-gray-400'>SUBSCRIBE TO OUR NEWSLETTER</p>
      <p class='text-gray-300'>The latest news, article, resources, sent to your inbox weekly</p>
    </div>
    <div class='flex flex-col gap-4 xsm:flex-row md:p-0'>
      <input class='px-9 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 ' placeholder='Enter your email' type="text" />
      <button class='px-6 py-4 font-semibold bg-purple-500 rounded-lg'>Subscribe</button>
    </div>
  </div>
  <div class='w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent'></div>
  <div class='flex flex-col items-center gap-6 md:flex-row md:justify-between '>
    <div>
     @Much Aidil Purnama, 2005
    </div>
    <div class='flex gap-4 p-2 rounded-md social-wrapper'>
      <img onclick="relocate('facebook.com')" src="https://img.icons8.com/material/24/000000/twitter--v2.png" alt="Facebook">
      <img onclick="relocate('instagram.com')" src="https://img.icons8.com/material/24/000000/instagram-new--v1.png" alt="Instagram">
      <img onclick="relocate('twitter.com')" src="https://img.icons8.com/material/24/000000/twitter--v2.png" alt="twitter ">
      <img onclick="relocate('telegram.org')" src="https://img.icons8.com/ios-filled/24/000000/telegram-app.png" alt="telegram ">
      <img onclick="relocate('discird.com')" src="https://img.icons8.com/material/24/000000/discord-logo--v1.png" alt="discord">
    </div>
  </div>
</footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,300&display=swap");
:root {
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-300: #d1d5db;
  --gray-400: #93a3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;
}
#light-theme {
  --primary: #f3f4f6;
  --comp-primary: #1f2937;
  --bg: f1f5f9;
  --gray-200: #e5e7eb;
  --white: black;
  --black: white;
  --blur: 10px;
}
#dark-theme {
  --primary: #1f2937;
  --comp-primary: #f3f4f6;
  --white: white;
  --gray-200: #374151;
  --black: black;
}
footer {
  background-color: var(--primary);
  color: var(--white);
  box-shadow: 1px -5px var(--blur) rgba(0, 0, 0, 0.3);
}
* {
  transition: all 0.3s ease;
}
.divider {
  filter: blur(1px);
}
input,
textarea {
  background-color: var(--comp-primary);
  color: var(--black);
}
.nav-modal {
  background-color: var(--primary);
}
button {
  background-color: var(--comp-primary);
  color: var(--primary);
}
.social-wrapper {
  background-color: white;
  border:  solid var(--comp-primary);
}

</style>