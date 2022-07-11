<template>
  <div>
    <div class="w-full">
      <div class="w-full">
        <div class="w-full bg-black relative z-10 overflow-hidden">
          <div class="w-full h-full absolute top-0 -z-10">
            <slide class="" />
          </div>
          <div class="w-full relative bg-opacity-80 bg-black">
            <!-- nav -->

            <nav class="w-full pt-2">
              <div class="max-w-screen-xl mx-auto px-4 py-3 rounded-3xl">
                <div class="w-full flex items-center justify-between">
                  <img
                    src="../assets/logocar.png"
                    class="w-auto h-10 object-cover object-center"
                    alt=""
                  />

                  <div class="w-fit flex items-center justify-center space-x-4">
                    <svg
                      viewBox="0 0 24 24"
                      class="text-white w-6 h-6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.29 20.2534C15.837 20.2534 19.965 14.0004 19.965 8.5784C19.965 8.4004 19.965 8.2234 19.953 8.0484C20.7562 7.46693 21.4493 6.74701 22 5.9224C21.2511 6.2544 20.4566 6.47216 19.643 6.5684C20.4996 6.05546 21.1408 5.24875 21.447 4.2984C20.6417 4.77628 19.7607 5.11313 18.842 5.2944C18.2234 4.63616 17.405 4.20023 16.5136 4.0541C15.6222 3.90797 14.7075 4.0598 13.9111 4.48607C13.1147 4.91234 12.4811 5.58927 12.1083 6.41206C11.7355 7.23485 11.6444 8.15758 11.849 9.0374C10.2176 8.95564 8.6216 8.53172 7.16465 7.79317C5.70769 7.05461 4.42233 6.01792 3.392 4.7504C2.86732 5.6536 2.70659 6.72282 2.94254 7.74036C3.17848 8.75791 3.79337 9.64728 4.662 10.2274C4.00926 10.2085 3.37063 10.0329 2.8 9.7154V9.7674C2.80039 10.7147 3.1284 11.6327 3.7284 12.3658C4.3284 13.0988 5.16347 13.6018 6.092 13.7894C5.48781 13.9541 4.85389 13.9781 4.239 13.8594C4.50116 14.6749 5.01168 15.388 5.69913 15.899C6.38658 16.41 7.21657 16.6934 8.073 16.7094C7.22212 17.378 6.24779 17.8722 5.20573 18.1639C4.16367 18.4556 3.07432 18.539 2 18.4094C3.8766 19.6137 6.06019 20.2525 8.29 20.2494"
                        fill="currentColor"
                      />
                    </svg>

                    <svg
                      class="text-white w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      class="text-white w-6 h-6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.315 2C14.745 2 15.099 2.013 16.123 2.06C17.187 2.109 17.914 2.278 18.55 2.525C19.2175 2.77587 19.8222 3.16936 20.322 3.678C20.8306 4.17777 21.2241 4.7825 21.475 5.45C21.722 6.086 21.891 6.813 21.94 7.877C21.988 8.944 22 9.284 22 12V12.08C22 14.723 21.988 15.067 21.94 16.123C21.891 17.187 21.722 17.914 21.475 18.55C21.2241 19.2175 20.8306 19.8222 20.322 20.322C19.8222 20.8306 19.2175 21.2241 18.55 21.475C17.914 21.722 17.187 21.891 16.123 21.94C15.056 21.988 14.716 22 12 22H11.92C9.277 22 8.933 21.988 7.877 21.94C6.813 21.891 6.086 21.722 5.45 21.475C4.7825 21.2241 4.17777 20.8306 3.678 20.322C3.16936 19.8222 2.77587 19.2175 2.525 18.55C2.278 17.914 2.109 17.187 2.06 16.123C2.013 15.099 2 14.744 2 12.315V11.685C2 9.255 2.013 8.901 2.06 7.877C2.109 6.813 2.278 6.086 2.525 5.45C2.77587 4.7825 3.16936 4.17777 3.678 3.678C4.17777 3.16936 4.7825 2.77587 5.45 2.525C6.086 2.278 6.813 2.109 7.877 2.06C8.901 2.013 9.256 2 11.685 2H12.315ZM12.234 3.802H11.766C9.31 3.802 8.982 3.813 7.959 3.86C6.984 3.905 6.455 4.067 6.102 4.204C5.635 4.386 5.302 4.602 4.952 4.952C4.602 5.302 4.386 5.635 4.204 6.102C4.067 6.455 3.904 6.984 3.86 7.959C3.813 8.982 3.802 9.31 3.802 11.766V12.234C3.802 14.69 3.813 15.018 3.86 16.041C3.905 17.016 4.067 17.545 4.204 17.898C4.386 18.364 4.603 18.698 4.952 19.048C5.302 19.398 5.635 19.614 6.102 19.796C6.455 19.933 6.984 20.096 7.959 20.14C9.013 20.188 9.329 20.198 12 20.198H12.08C14.677 20.198 14.997 20.188 16.04 20.14C17.016 20.095 17.545 19.933 17.898 19.796C18.364 19.614 18.698 19.398 19.048 19.048C19.398 18.698 19.614 18.365 19.796 17.898C19.933 17.545 20.096 17.016 20.14 16.041C20.188 14.986 20.198 14.671 20.198 12V11.92C20.198 9.323 20.188 9.003 20.14 7.96C20.095 6.984 19.933 6.455 19.796 6.102C19.6358 5.66757 19.3802 5.2746 19.048 4.952C18.7254 4.61986 18.3324 4.36426 17.898 4.204C17.545 4.067 17.016 3.904 16.041 3.86C15.018 3.813 14.69 3.802 12.234 3.802ZM12 6.865C12.6743 6.865 13.3421 6.99782 13.9651 7.25588C14.5881 7.51394 15.1542 7.89218 15.631 8.36901C16.1078 8.84584 16.4861 9.41191 16.7441 10.0349C17.0022 10.6579 17.135 11.3257 17.135 12C17.135 12.6743 17.0022 13.3421 16.7441 13.9651C16.4861 14.5881 16.1078 15.1542 15.631 15.631C15.1542 16.1078 14.5881 16.4861 13.9651 16.7441C13.3421 17.0022 12.6743 17.135 12 17.135C10.6381 17.135 9.33201 16.594 8.36901 15.631C7.40601 14.668 6.865 13.3619 6.865 12C6.865 10.6381 7.40601 9.33201 8.36901 8.36901C9.33201 7.40601 10.6381 6.865 12 6.865ZM12 8.667C11.116 8.667 10.2683 9.01815 9.64321 9.64321C9.01815 10.2683 8.667 11.116 8.667 12C8.667 12.884 9.01815 13.7317 9.64321 14.3568C10.2683 14.9818 11.116 15.333 12 15.333C12.884 15.333 13.7317 14.9818 14.3568 14.3568C14.9818 13.7317 15.333 12.884 15.333 12C15.333 11.116 14.9818 10.2683 14.3568 9.64321C13.7317 9.01815 12.884 8.667 12 8.667ZM17.338 5.462C17.6563 5.462 17.9615 5.58843 18.1865 5.81347C18.4116 6.03852 18.538 6.34374 18.538 6.662C18.538 6.98026 18.4116 7.28548 18.1865 7.51053C17.9615 7.73557 17.6563 7.862 17.338 7.862C17.0197 7.862 16.7145 7.73557 16.4895 7.51053C16.2644 7.28548 16.138 6.98026 16.138 6.662C16.138 6.34374 16.2644 6.03852 16.4895 5.81347C16.7145 5.58843 17.0197 5.462 17.338 5.462Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </nav>
            <!-- herosection -->
            <div class="w-full px-4">
              <div
                class="max-w-screen-xl mx-auto py-20 lg:py-40 flex flex-col items-center relative"
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
                class="w-full h-[15rem] lg:h-[30rem] col-span-3 lg:order-2 lg:rounded-3xl relative overflow-hidden hover:skew-y-2 transition-transform ease-linear duration-500"
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
        <div class="w-full mt-20 lg:mt-32 bg-black py-40">
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
              <div class="col-span-8 bg-black relative overflow-hidden group">
                <div
                  class="w-full h-full absolute top-0 scale-110 group-hover:scale-100 transition-all ease-linear duration-200"
                >
                  <img
                    src="../assets/evinterior.jpg"
                    class="w-full h-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div class="w-full relative z-10 bg-gradient-to-br from-black">
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
                      class="px-5 py-3 font-semibold text-sm text-white border group-hover:bg-white group-hover:text-black transition-colors ease-in-out duration-300 rounded-md flex w-fit items-center space-x-2 border-slate-200"
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
                class="col-span-8 lg:col-span-4 relative lg:h-[40rem] bg-black group overflow-hidden"
              >
                <div class="w-full h-full absolute top-0 overflow-hidden">
                  <img
                    src="../assets/happydriver.jpg"
                    class="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-all ease-linear duration-200"
                    alt=""
                  />
                </div>
                <div class="w-full h-full relative z-10 bg-gradient-to-br from-black">
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
                      class="px-5 py-3 font-semibold text-sm text-white border rounded-md flex w-fit group-hover:bg-white group-hover:text-black transition-colors ease-in-out duration-300 items-center space-x-2 border-slate-200"
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
                class="col-span-8 lg:col-span-4 relative lg:h-[40rem] bg-black group overflow-hidden"
              >
                <div class="w-full h-full absolute top-0">
                  <img
                    src="../assets/batteryharging.jpg"
                    class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all ease-linear duration-200 object-center"
                    alt=""
                  />
                </div>
                <div class="w-full h-full relative z-10 bg-gradient-to-br from-black">
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
                      class="px-5 py-3 font-semibold text-sm text-white border rounded-md flex w-fit group-hover:bg-white group-hover:text-black transition-colors ease-in-out duration-300 items-center space-x-2 border-slate-200"
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
            <img src="../assets/car.png" class="w-40" alt="" />
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
        <div class="w-full bg-black mt-20 lg:mt-32 relative z-10">
          <div class="w-full h-full -z-10 absolute inset-0">
            <img
              src="../assets/ev4.jpg"
              class="w-full h-full object-cover object-bottom"
              alt=""
            />
          </div>
          <div class="w-full bg-black bg-opacity-80">
            <div class="max-w-screen-md mx-auto px-4 py-20 lg:py-32">
              <div
                class="w-full bg-white rounded-2xl shadow-lg pt-8 lg:pt-8 mt-5 overflow-hidden"
              >
                <h3
                  class="text-2xl font-semibold text-gray-900 mb-5 px-8 text-center lg:text-left"
                >
                  Contact form
                </h3>
                <form action="submit" id="contact_form" class="w-full">
                  <div class="w-full lg:flex px-5 lg:px-8">
                    <div class="flex w-full lg:w-1/2 h-full flex-col lg:mr-8">
                      <label for="name" class="text-sm text-gray-700 mb-1"
                        >Your name <span class="text-red-500">*</span></label
                      ><input
                        type="text"
                        name="name"
                        placeholder="eg. John Doe"
                        class="rounded-lg border-gray-200"
                        required
                      />
                      <label for="email" class="text-sm text-gray-700 mb-1 mt-4"
                        >Your email <span class="text-red-500">*</span></label
                      ><input
                        type="email"
                        name="email"
                        placeholder="eg. you@example.com"
                        class="rounded-lg border-gray-200"
                        required
                      />
                      <label for="Phone" class="text-sm text-gray-700 mb-1 mt-4"
                        >Your phone number</label
                      ><input
                        type="tel"
                        name="contact"
                        placeholder=""
                        class="rounded-lg border-gray-200"
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

        <footer class="w-full mt-20 lg:mt-32 bg-black">
          <div class="grid grid-cols-5 gap-x-20 pt-32">
            <div class="w-full col-span-2">
              <img
                src="../assets/plug.png"
                class="w-full hidden lg:block h-full object-center"
                alt=""
              />
            </div>
            <div class="col-span-5 lg:col-span-3 px-4 mb-10">
              <div class="max-w-2xl flex flex-col space-y-5">
                <p class="text-3xl font-semibold text-white">
                  Get notified when our products are launched!
                </p>
                <p class="text-base font-normal text-white leading-5 max-w-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab
                  praesentium qui, maxime eos, cumque temporibus eius numquam ut veniam
                  ratione earum dicta delectus porro sapiente tempore dolore! Hic,
                  impedit!
                </p>
                <div
                  class="w-full flex flex-col md:flex-row items-center space-y-2 md:space-y-0 lg:space-x-2 max-w-lg"
                >
                  <input
                    type="text"
                    class="w-full md:w-auto flex-1 rounded-md"
                    name="subscribe"
                    id=""
                  />
                  <button
                    class="w-full md:w-fit p-3 text-white rounded-md bg-green-600 font-semibold text-sm"
                  >
                    Subscribe
                  </button>
                </div>
                <p class="text-xs font-normal text-slate-200 leading-5 max-w-md">
                  By clicking “Sebscribe” you accepting.
                </p>
              </div>
            </div>
          </div>
          <div
            class="max-w-screen-lg mx-auto pb-10 pt-5 border-t border-slate-50 border-opacity-20"
          >
            <div class="w-full hidden flex items-center justify-center space-x-8">
              <svg
                viewBox="0 0 24 24"
                class="text-green-500 w-8 h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.29 20.2534C15.837 20.2534 19.965 14.0004 19.965 8.5784C19.965 8.4004 19.965 8.2234 19.953 8.0484C20.7562 7.46693 21.4493 6.74701 22 5.9224C21.2511 6.2544 20.4566 6.47216 19.643 6.5684C20.4996 6.05546 21.1408 5.24875 21.447 4.2984C20.6417 4.77628 19.7607 5.11313 18.842 5.2944C18.2234 4.63616 17.405 4.20023 16.5136 4.0541C15.6222 3.90797 14.7075 4.0598 13.9111 4.48607C13.1147 4.91234 12.4811 5.58927 12.1083 6.41206C11.7355 7.23485 11.6444 8.15758 11.849 9.0374C10.2176 8.95564 8.6216 8.53172 7.16465 7.79317C5.70769 7.05461 4.42233 6.01792 3.392 4.7504C2.86732 5.6536 2.70659 6.72282 2.94254 7.74036C3.17848 8.75791 3.79337 9.64728 4.662 10.2274C4.00926 10.2085 3.37063 10.0329 2.8 9.7154V9.7674C2.80039 10.7147 3.1284 11.6327 3.7284 12.3658C4.3284 13.0988 5.16347 13.6018 6.092 13.7894C5.48781 13.9541 4.85389 13.9781 4.239 13.8594C4.50116 14.6749 5.01168 15.388 5.69913 15.899C6.38658 16.41 7.21657 16.6934 8.073 16.7094C7.22212 17.378 6.24779 17.8722 5.20573 18.1639C4.16367 18.4556 3.07432 18.539 2 18.4094C3.8766 19.6137 6.06019 20.2525 8.29 20.2494"
                  fill="currentColor"
                />
              </svg>

              <svg
                class="text-green-500 w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                class="text-green-500 w-8 h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.315 2C14.745 2 15.099 2.013 16.123 2.06C17.187 2.109 17.914 2.278 18.55 2.525C19.2175 2.77587 19.8222 3.16936 20.322 3.678C20.8306 4.17777 21.2241 4.7825 21.475 5.45C21.722 6.086 21.891 6.813 21.94 7.877C21.988 8.944 22 9.284 22 12V12.08C22 14.723 21.988 15.067 21.94 16.123C21.891 17.187 21.722 17.914 21.475 18.55C21.2241 19.2175 20.8306 19.8222 20.322 20.322C19.8222 20.8306 19.2175 21.2241 18.55 21.475C17.914 21.722 17.187 21.891 16.123 21.94C15.056 21.988 14.716 22 12 22H11.92C9.277 22 8.933 21.988 7.877 21.94C6.813 21.891 6.086 21.722 5.45 21.475C4.7825 21.2241 4.17777 20.8306 3.678 20.322C3.16936 19.8222 2.77587 19.2175 2.525 18.55C2.278 17.914 2.109 17.187 2.06 16.123C2.013 15.099 2 14.744 2 12.315V11.685C2 9.255 2.013 8.901 2.06 7.877C2.109 6.813 2.278 6.086 2.525 5.45C2.77587 4.7825 3.16936 4.17777 3.678 3.678C4.17777 3.16936 4.7825 2.77587 5.45 2.525C6.086 2.278 6.813 2.109 7.877 2.06C8.901 2.013 9.256 2 11.685 2H12.315ZM12.234 3.802H11.766C9.31 3.802 8.982 3.813 7.959 3.86C6.984 3.905 6.455 4.067 6.102 4.204C5.635 4.386 5.302 4.602 4.952 4.952C4.602 5.302 4.386 5.635 4.204 6.102C4.067 6.455 3.904 6.984 3.86 7.959C3.813 8.982 3.802 9.31 3.802 11.766V12.234C3.802 14.69 3.813 15.018 3.86 16.041C3.905 17.016 4.067 17.545 4.204 17.898C4.386 18.364 4.603 18.698 4.952 19.048C5.302 19.398 5.635 19.614 6.102 19.796C6.455 19.933 6.984 20.096 7.959 20.14C9.013 20.188 9.329 20.198 12 20.198H12.08C14.677 20.198 14.997 20.188 16.04 20.14C17.016 20.095 17.545 19.933 17.898 19.796C18.364 19.614 18.698 19.398 19.048 19.048C19.398 18.698 19.614 18.365 19.796 17.898C19.933 17.545 20.096 17.016 20.14 16.041C20.188 14.986 20.198 14.671 20.198 12V11.92C20.198 9.323 20.188 9.003 20.14 7.96C20.095 6.984 19.933 6.455 19.796 6.102C19.6358 5.66757 19.3802 5.2746 19.048 4.952C18.7254 4.61986 18.3324 4.36426 17.898 4.204C17.545 4.067 17.016 3.904 16.041 3.86C15.018 3.813 14.69 3.802 12.234 3.802ZM12 6.865C12.6743 6.865 13.3421 6.99782 13.9651 7.25588C14.5881 7.51394 15.1542 7.89218 15.631 8.36901C16.1078 8.84584 16.4861 9.41191 16.7441 10.0349C17.0022 10.6579 17.135 11.3257 17.135 12C17.135 12.6743 17.0022 13.3421 16.7441 13.9651C16.4861 14.5881 16.1078 15.1542 15.631 15.631C15.1542 16.1078 14.5881 16.4861 13.9651 16.7441C13.3421 17.0022 12.6743 17.135 12 17.135C10.6381 17.135 9.33201 16.594 8.36901 15.631C7.40601 14.668 6.865 13.3619 6.865 12C6.865 10.6381 7.40601 9.33201 8.36901 8.36901C9.33201 7.40601 10.6381 6.865 12 6.865ZM12 8.667C11.116 8.667 10.2683 9.01815 9.64321 9.64321C9.01815 10.2683 8.667 11.116 8.667 12C8.667 12.884 9.01815 13.7317 9.64321 14.3568C10.2683 14.9818 11.116 15.333 12 15.333C12.884 15.333 13.7317 14.9818 14.3568 14.3568C14.9818 13.7317 15.333 12.884 15.333 12C15.333 11.116 14.9818 10.2683 14.3568 9.64321C13.7317 9.01815 12.884 8.667 12 8.667ZM17.338 5.462C17.6563 5.462 17.9615 5.58843 18.1865 5.81347C18.4116 6.03852 18.538 6.34374 18.538 6.662C18.538 6.98026 18.4116 7.28548 18.1865 7.51053C17.9615 7.73557 17.6563 7.862 17.338 7.862C17.0197 7.862 16.7145 7.73557 16.4895 7.51053C16.2644 7.28548 16.138 6.98026 16.138 6.662C16.138 6.34374 16.2644 6.03852 16.4895 5.81347C16.7145 5.58843 17.0197 5.462 17.338 5.462Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p class="text-xs font-medium text-center text-white mt-2">
              © 2022 DriveGo Electric, All rights reserved.
            </p>
          </div>
          <modal
            v-if="modal"
            :modalContent="modalContent"
            @closeModal="(n) => (modal = n)"
          />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "../components/modal.vue";
import slide from "./slide.vue";
export default {
  components: { modal, slide },
  data() {
    return {
      modalContent: "",
      modal: false,
    };
  },
  methods: {
    showModal: function (x) {
      this.modalContent = x;
      this.modal = true;
    },
  },
};
</script>
