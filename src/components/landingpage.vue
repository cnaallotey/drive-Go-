<template>
  <div>
    <div class="w-full">
      <div class="w-full">
        <div
          class="w-full bg-gray-900 relative z-10 overflow-hidden border-b-8 border-green-700"
        >
          <div class="w-full h-full absolute top-0 -z-10">
            <slide class="" />
          </div>

          <section
            class="bg-gray-900 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 relative z-10"
          >
            <navbr />
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
              <a
                href="#"
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-gray-800 rounded-full dark:bg-gray-800 dark:text-white"
                role="alert"
              >
                <span
                  class="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3"
                  >New</span
                >
                <span class="text-sm font-medium"
                  >DriveGo Electric is Launching! See what's new</span
                >
                <svg
                  class="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
              >
                Promoting Access and Inclusion to EVs in Africa
              </h1>
              <p
                class="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
              >
                DriveGo Electric is an all-in-one platform to buy electric vehicles from
                vetted suppliers, secure flexible rent-to-own financing, insurance,
                servicing and access EV barttery charging and swap stations.
              </p>
              <div
                class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
              >
                <a
                  href="/blogs"
                  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
                >
                  Read our Blog
                  <svg
                    class="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <button
                  @click="scrolltocontact()"
                  class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-200 hover:text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 -ml-1 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Send a message
                </button>
              </div>
            </div>
          </section>
          <div class="w-full relative bg-opacity-80 bg-gray-900 hidden">
            <!-- nav -->

            <!-- herosection -->
            <div class="w-full px-4">
              <div
                class="max-w-screen-xl mx-auto py-20 lg:py-48 flex flex-col items-center relative"
              >
                <h1
                  class="text-white px-4 text-4xl tracking-tight lg:text-6xl bg-opacity-100 font-extrabold text-center max-w-2xl"
                >
                  Driving
                  <span class="text-green-500"> Access and Inclusion to EVs</span> in
                  Africa
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full flex justify-center relative z-20 -translate-y-10 lg:-translate-y-20"
        >
          <img src="../assets/car.png" class="h-32 lg:h-64 w-auto" alt="" />
        </div>
        <div class="w-full">
          <div class="max-w-screen-xl mx-auto">
            <div class="w-full grid grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-10">
              <div
                class="w-full h-[15rem] lg:h-[20rem] col-span-3 lg:rounded-none relative overflow-hidden transition-transform ease-linear duration-500"
              >
                <img
                  src="../assets/logocar.png"
                  class="absolute inset-5 w-40 hidden lg:block z-10 rounded-xl"
                  alt=""
                />
                <img
                  src="../assets/eduardo-arcos-y8yf9r_WflE-unsplash.jpg"
                  class="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="w-full flex flex-col justify-center items-start col-span-3 px-4 text-left"
              >
                <div class="w-fit flex items-center space-x-2">
                  <h2
                    class="text-base text-green-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase lg:text-center"
                  >
                    About us
                  </h2>
                  <div class="h-0.5 w-10 bg-green-500"></div>
                </div>

                <p
                  class="mt-2 text-2xl leading-8 w-full font-semibold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto"
                >
                  Get to know who we are
                </p>
                <p class="text-gray-800 text-base font-normal leading-6 mt-4">
                  DriveGo Electric is an all inclusive online destination to trade
                  everything electric from cars, motor bikes, batteries, asset financing,
                  insurance, Ev charging etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-20 lg:mt-32">
          <div class="max-w-screen-xl mx-auto">
            <div class="w-full grid grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-10">
              <div
                class="w-full h-[15rem] lg:h-[30rem] col-span-3 lg:order-2 lg:rounded-3xl relative overflow-hidden transition-transform ease-linear duration-500"
              >
                <img
                  src="../assets/carimg.png"
                  class="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="w-full flex flex-col justify-start items-start col-span-3 lg:order-1 px-4"
              >
                <div class="w-fit flex items-center space-x-2">
                  <h2
                    class="text-base text-green-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase lg:text-center"
                  >
                    the need for evs
                  </h2>
                  <div class="h-0.5 w-10 bg-green-500"></div>
                </div>

                <p
                  class="mt-2 text-2xl leading-8 font-semibold tracking-tight text-left text-gray-900 sm:text-4xl max-w-2xl"
                >
                  The Future is Electric
                </p>
                <p class="text-gray-800 text-base font-normal leading-6 mt-4">
                  There is no doubt electric vehicles (EVs) and hybrid-electric vehicles
                  (HEVs) are now a regular part of the current conversation about cars.
                  EVs are vehicles with electric motors, versus the traditional combustion
                  engine powered by gasoline or diesel.
                </p>
                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                  <div class="w-full flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p class="text-lg leading-5 font-semibold text-slate-900">
                      Environmentally Friendly
                    </p>
                  </div>
                  <div class="w-full flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p class="text-lg leading-5 font-semibold text-slate-900">
                      Prevents Driver Fatigue
                    </p>
                  </div>
                  <div class="w-full flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p class="text-lg leading-5 font-semibold text-slate-900">
                      Cost Effective
                    </p>
                  </div>
                  <div class="w-full flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-10 w-10 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p class="text-lg leading-5 font-semibold text-slate-900">
                      Safety and Silence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <bloghomepage class="mt-20 lg:mt-32" />
        <div class="w-full bg-gray-900 py-20">
          <div class="max-w-screen-lg mx-auto">
            <div class="w-full grid grid-cols-1 md:grid-cols-1">
              <div class="w-full flex flex-col items-center">
                <p class="text-3xl font-semibold text-white">2.4 million</p>
                <p class="text-white text-bold text-sm uppercase">ev's sold Globally</p>
              </div>
              <div class="w-full flex flex-col hidden items-center">
                <p class="text-3xl font-semibold text-white">stat1</p>
              </div>
              <div class="w-full flex flex-col hidden items-center">
                <p class="text-3xl font-semibold text-white">stat1</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-20 lg:mt-32 hidden">
          <div class="max-w-screen-xl mx-auto px-4">
            <div class="w-full grid grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-10">
              <div
                class="w-full h-[15rem] lg:h-[20rem] col-span-3 lg:rounded-3xl relative overflow-hidden transition-transform ease-linear duration-500"
              >
                <img
                  src="../assets/evdashboard.jpg"
                  class="w-full h-full object-cover object-center"
                  alt=""
                />
              </div>
              <div
                class="w-full flex flex-col justify-center items-start col-span-3 px-4"
              >
                <div class="w-fit flex items-center space-x-2">
                  <h2
                    class="text-base text-green-500 font-semibold max-w-2xl mx-auto tracking-wide uppercase lg:text-center"
                  >
                    Tried and Tested
                  </h2>
                  <div class="h-0.5 w-10 bg-green-500"></div>
                </div>

                <p
                  class="mt-2 text-2xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl max-w-2xl mx-auto"
                >
                  Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta
                  sadipscing te.
                </p>
                <p class="text-gray-800 text-base font-normal leading-6 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias in
                  itaque perspiciatis, illo iure quibusdam omnis molestiae, repellendus
                  sapiente, quisquam a. Temporibus pariatur illum vero exercitationem eius
                  dolores deleniti veniam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="max-w-screen-xl mx-auto mt-20 lg:mt-32 px-4">
            <div class="grid grid-cols-8 gap-10 overflow-hidden">
              <div class="col-span-8 bg-gray-900 relative overflow-hidden group">
                <div
                  class="w-full h-full absolute top-0 scale-110 group-hover:scale-100 transition-all ease-linear duration-200"
                >
                  <img
                    src="https://images.unsplash.com/photo-1625998259975-b243bf480751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=100"
                    class="w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="w-full relative z-10 bg-gradient-to-br from-gray-900">
                  <div class="space-y-5 py-20 lg:py-28 px-4 lg:px-10">
                    <p
                      class="text-3xl font-semibold text-white group-hover:text-green-500 transition-all ease-linear duration-200"
                    >
                      EV Marketplace
                    </p>
                    <p class="text-base font-normal text-slate-200 leading-5">
                      Buy or sell anything from Electric cars, motor bikes, spare parts,
                      batteries
                    </p>
                    <button
                      class="px-5 py-3 font-semibold text-sm text-white border group-hover:bg-white group-hover:text-gray-900 transition-colors ease-in-out duration-300 rounded-md flex w-fit items-center space-x-2 border-slate-200"
                    >
                      <span>Join the Waitlist</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 -rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                          /></svg
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="col-span-8 lg:col-span-4 relative lg:h-[40rem] bg-gray-900 group overflow-hidden"
              >
                <div class="w-full h-full absolute top-0 overflow-hidden">
                  <img
                    src="../assets/happydriver.jpg"
                    class="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-all ease-linear duration-200"
                    alt=""
                  />
                </div>
                <div class="w-full h-full relative z-10 bg-gradient-to-br from-gray-900">
                  <div class="space-y-5 max-w-sm md:max-w-md py-20 px-4 lg:px-10">
                    <p
                      class="text-3xl font-semibold text-white group-hover:text-green-500 transition-all ease-linear duration-200"
                    >
                      EV Asset financing, Servicing and Insurance
                    </p>
                    <p class="text-base font-normal text-slate-200 leading-5">
                      Own an electric vehicle through a flexible rent to own framework and
                      enjoy insurance and service of your electric vehicle
                    </p>
                    <button
                      class="px-5 py-3 font-semibold text-sm text-white border rounded-md flex w-fit group-hover:bg-white group-hover:text-gray-900 transition-colors ease-in-out duration-300 items-center space-x-2 border-slate-200"
                    >
                      <span>Join the Waitlist</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 -rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                          /></svg
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="col-span-8 lg:col-span-4 relative lg:h-[40rem] bg-gray-900 group overflow-hidden"
              >
                <div class="w-full h-full absolute top-0">
                  <img
                    src="https://images.unsplash.com/photo-1635451048957-3beb7175f57f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=100"
                    class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all ease-linear duration-200 object-center"
                    alt=""
                  />
                </div>
                <div class="w-full h-full relative z-10 bg-gradient-to-br from-gray-900">
                  <div class="space-y-5 w-fit lg:max-w-md py-20 px-4 lg:px-10">
                    <p
                      class="text-3xl font-semibold text-white group-hover:text-green-500 transition-all ease-linear duration-200"
                    >
                      Battery Charging and Swapping Stations Locator
                    </p>
                    <p class="text-base font-normal text-slate-200 leading-5">
                      Find EV charging and battery swapping stations near you via map.
                      Check for compatibility with your vehicle and pay to book on the go!
                    </p>
                    <button
                      @click="getblogs()"
                      class="px-5 py-3 font-semibold text-sm text-white border rounded-md flex w-fit group-hover:bg-white group-hover:text-gray-900 transition-colors ease-in-out duration-300 items-center space-x-2 border-slate-200"
                    >
                      <span>Join the Waitlist</span>
                      <span
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 -rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                          /></svg
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-20 lg:mt-32 w-full">
          <div class="max-w-screen-xl mx-auto px-4">
            <div class="w-full flex flex-col lg:items-center mb-10">
              <div class="w-fit flex items-center space-x-2">
                <h2
                  class="text-base text-green-500 font-semibold max-w-2xl tracking-wide uppercase lg:text-center"
                >
                  Frequently Asked Questions
                </h2>
                <div class="h-0.5 w-10 bg-green-500"></div>
              </div>
              <p
                class="mt-2 text-2xl leading-8 font-semibold lg:text-center text-left tracking-tight text-gray-900 sm:text-4xl max-w-2xl"
              >
                Get to know our process
              </p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div class="p-5 rounded-2xl bg-slate-100 relative">
                <button
                  @click="
                    showModal(
                      ' Do electric cars break down more?',
                      ' No. EVs have fewer moving parts so they are less likely to break down.'
                    )
                  "
                  class="w-full flex items-center justify-between text-gray-900"
                >
                  <p class="text-base text-left font-semibold leading-6">
                    Do electric cars break down more?
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div class="p-5 rounded-2xl bg-slate-100">
                <button
                  @click="
                    showModal(
                      ' Can you buy or sell second-hand electric cars?',
                      'Yes. You can buy and sell second-hand electric cars on AutoElectriq as well as brand new electric vehicles.'
                    )
                  "
                  class="w-full flex items-center justify-between text-gray-900"
                >
                  <p class="text-base text-left font-semibold leading-6">
                    Can you buy or sell second-hand electric cars?
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div class="p-5 rounded-2xl bg-slate-100">
                <button
                  @click="
                    showModal(
                      'How can my EV’s battery last?',
                      'Some batteries can deliver a promised range of 150,000 miles or upto10 years.'
                    )
                  "
                  class="w-full flex items-center justify-between text-gray-900"
                >
                  <p class="text-base text-left font-semibold leading-6">
                    How can my EV’s battery last?
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div class="p-5 rounded-2xl bg-slate-100">
                <button
                  @click="
                    showModal(
                      ' How long does it take to charge an EV battery?',
                      ' For Level 1 chargers it could take a day or overnight to charge fully depending on the battery and EV model. While it could take 6-12hours for Level 2 chargers, Level 3 chargers can gain 200 miles of range with about 15 to 20 minutes of charging.'
                    )
                  "
                  class="w-full flex items-center justify-between text-gray-900"
                >
                  <p class="text-base text-left font-semibold leading-6">
                    How long does it take to charge an EV battery?
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-20">
          <div
            class="max-w-scren-sm px-4 flex flex-col lg:flex-row lg:items-center justify-center lg:space-x-5"
          >
            <img src="../assets/DRIVEGO1.jpg" class="w-40" alt="" />
            <p class="text-base lg:text-lg font-semibold leading-6">
              Can’t find what you are looking for? <br />
              Send us a message
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mt-5 lg:mt-0 rotate-90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div class="w-full bg-gray-900 mt-20 lg:mt-32 relative z-10">
          <div class="w-full h-full -z-10 absolute inset-0">
            <img
              src="../assets/ev4.jpg"
              class="w-full h-full object-cover object-bottom"
              alt=""
            />
          </div>
          <div class="w-full bg-gray-900 bg-opacity-80" ref="contact">
            <div class="max-w-screen-md mx-auto px-4 py-20 lg:py-32">
              <div
                class="w-full bg-white rounded-2xl shadow-lg pt-8 lg:pt-8 mt-5 overflow-hidden"
              >
                <h3
                  class="text-2xl font-semibold text-gray-900 mb-5 px-8 text-center lg:text-left"
                >
                  Contact form
                </h3>
                <form
                  action="submit"
                  @submit.prevent="submitform()"
                  id="contact_form"
                  class="w-full"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                >
                  <div class="w-full lg:flex px-5 lg:px-8">
                    <div class="flex w-full lg:w-1/2 h-full flex-col lg:mr-8">
                      <label for="name" class="text-sm text-gray-700 mb-1"
                        >Your name <span class="text-red-500">*</span></label
                      ><input
                        type="text"
                        name="name"
                        placeholder="eg. John Doe"
                        class="rounded-lg border-gray-200"
                        v-model="contact.name"
                        required
                      />
                      <label for="email" class="text-sm text-gray-700 mb-1 mt-4"
                        >Your email <span class="text-red-500">*</span></label
                      ><input
                        type="email"
                        name="email"
                        placeholder="eg. you@example.com"
                        class="rounded-lg border-gray-200"
                        v-model="contact.email"
                        required
                      />
                      <label for="Phone" class="text-sm text-gray-700 mb-1 mt-4"
                        >Your phone number</label
                      ><input
                        type="tel"
                        name="contact"
                        placeholder=""
                        class="rounded-lg border-gray-200"
                        v-model="contact.tel"
                      />
                    </div>
                    <div class="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0">
                      <label for="message" class="text-sm text-gray-700 mb-1"
                        >Your Message <span class="text-red-500">*</span></label
                      ><textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="8"
                        class="rounded-lg border-0 bg-gray-100"
                        v-model="contact.message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="w-full flex justify-center">
                    <button
                      type="submit"
                      class="w-full py-5 text-base font-medium text-white bg-green-500 hover:bg-green-600 hover:shadow-xl transition-all duration-200 mx-auto mt-8"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footeVue />
        <modal
          v-if="modal"
          :modalContent="modalContent"
          :modalheader="modalheader"
          @closeModal="(n) => (modal = n)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import modal from "../components/modal.vue";
import axios from "axios";
import slide from "./slide.vue";
import navbr from "../components/navbar.vue";
import bloghomepage from "../components/bloghomepage.vue";
import footeVue from "./foote.vue";
export default {
  components: { modal, slide, navbr, footeVue, bloghomepage },
  data() {
    return {
      modalContent: "",
      modalheader: "",
      modal: false,
      contact: {},
      blogs: [],
    };
  },
  created() {
    this.getblogs();
  },
  methods: {
    showModal: function (x, y) {
      this.modalheader = x;
      this.modalContent = y;
      this.modal = true;
    },
    scrolltocontact: function () {
      const el = this.$refs.contact;
      el.scrollIntoView({ behavior: "smooth" });
    },
    getblogs: function () {},
    submitform: function () {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.contact,
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    },
  },
};
</script>
