<template>
    <div class="pt-22 ">
      <div class="container mx-auto px-6">
        <div class="message text-center">
          <h1 class="text-3xl font-bold pt-10">Terimakasih Telah Memesan</h1>
          <p>Kode Pemesanan : {{ getOrder.code }}</p>
          <p class="italic">
            Terimakasih atas kepercayaan Tn./Ny. {{ getOrder.user.name }} kepada NatureMart
          </p>
        </div>
        {{ orderData }}
      </div>
    </div>
      <!-- component -->
<div class="bg-gray-100">
      <div class="bg-white p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
            <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
            <p> Have a great day!  </p>
            <div class="py-10 text-center">
                <a href="/menyatu" class="px-12 bg-purple-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </a>
            </div>
        </div>
    </div>
  </div>
    <section class="relative py-18 bg-blueGray-100">
<div class="w-full mb-12 px-4">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
   text-white">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
          <h3 class="font-semibold text-lg text-white px-6  align-middle border border-solid py-4  uppercase  text-left bg-purple-600 text-purple-300 border-purple-700">Order Summary</h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto ">
      <div class="container mx-auto px-6">
        <div class="mx-10 mt-10">
          <div class="grid grid-cols-2 py-8">
            <div>
              <dl
                class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-100"
              >
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Kode Pemesanan : 
                  </dt>
                  <dd class="text-lg font-semibold">{{ getOrder.code }}</dd>
                </div>
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Alamat Email : 
                  </dt>
                  <dd class="text-lg font-semibold">{{ getOrder.user.email }}</dd>
                </div>
                <div class="flex flex-col py-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Alamat Rumah : 
                  </dt>
                  <dd class="text-lg font-semibold">
                    {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                  </dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Nomor Telpon :
                  </dt>
                  <dd class="text-lg font-semibold">
                    {{  getOrder.shipping_address.phone }}
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <dl
                class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
              >
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Metode Pembayaran : 
                  </dt>
                  <dd class="text-lg font-semibold">{{ getOrder.orders[0].payment_type }}</dd>
                </div>
                <div class="flex flex-col pb-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Metode Pengiriman : 
                  </dt>
                  <dd class="text-lg font-semibold">{{ getOrder.orders[0].delivery_type }}</dd>
                </div>
                <div class="flex flex-col py-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Alamat Tagihan : 
                  </dt>
                  <dd class="text-lg font-semibold">
                    {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                  </dd>
                </div>
                <div class="flex flex-col pt-3">
                  <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                    Total Barang :
                  </dt>
                  <dd class="text-lg font-semibold">
                    {{  getOrder.orders[0].grand_total }}
                  </dd>
                </div>
              </dl>
            </div>
            
          </div>
        </div>
        {{ orderData }}
      </div>
    </div>
  </div>
</div>
</section>

    <br>
  </template>
  
  <script>
  import { mapGetters,  } from 'vuex';
  export default {
    props: ['orderCode'],
    computed: {
      ...mapGetters('order', ['getOrder']),
    },
    created() {
      this.$store.dispatch('order/fetchOrder', this.orderCode);
    },
  };
  </script>