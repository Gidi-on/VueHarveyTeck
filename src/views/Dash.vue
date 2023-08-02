<template>
  <div class="bg-black w-screen flex">
    <!-- side bar -->
    <section class="w-20 h-full px-4 py-6 text-white border-r border-gray-800">
      <img src="../assets/vue.svg" alt="" class="mb-7" />

      <div
        class="flex flex-col h-full justify-center items-center gap-y-1 text-base"
      >
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-grip" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-calendar" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer bg-blue-700 bg-opacity-20 text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-comment-dots" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-square-check" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-briefcase" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-folder-minus" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-file-lines" />
        </span>
        <span
          class="p-4 rounded-2xl cursor-pointer hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
        >
          <font-awesome-icon icon="fa-solid fa-user" />
        </span>
      </div>
    </section>

    <!-- main bar -->
    <section class="w-full h-full">
      <nav
        class="h-20 flex justify-between border-b border-gray-800 items-center px-10"
      >
        <div class="flex gap-x-5">
          <span class="text-white text-2xl">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </span>
          <div className="flex justify-center items-center w-72">
            <span className="w-[10%] text-white">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </span>
            <input
              name="search"
              type="text"
              id="search"
              onChange="{handleChange}"
              className="w-[90%] bg-black"
              placeholder="Search anything..."
            />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <span
            class="text-gray-500 text-xl flex mr-3 gap-x-4 border-r border-gray-700 pr-3"
          >
            <font-awesome-icon icon="fa-solid fa-gear" />
            <font-awesome-icon icon="fa-solid fa-bell" />
          </span>
          <div class="w-10 h-10 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1397239441/photo/3d-render-character.jpg?s=612x612&w=0&k=20&c=vI6ZFRsT89mimec6UCKb7PjPn2ptr0UvJFHywcMUSXY="
              alt="avatar"
              class="w-full h-full rounded-full"
            />
          </div>
        </div>
      </nav>

      <!-- main -->
      <div class="flex w-full h-full">
        <div class="w-[20%] px-3 py-5 border-r border-gray-800 text-sm">
          <span
            class="flex justify-center items-center bg-blue-600 py-3 rounded-xl text-white font-light"
          >
            <p>New Message</p>
          </span>
          <span
            class="flex justify-between items-center mt-3 py-3 rounded-xl cursor-pointer px-4 bg-blue-700 bg-opacity-20"
          >
            <span
              class="flex items-center justify-center gap-x-4 text-[#0000FF]"
            >
              <font-awesome-icon icon="fa-solid fa-inbox" />
              <p>Inbox</p>
            </span>
            <span
              class="h-5 w-5 rounded-full bg-orange-600 text-white text-xs flex justify-center items-center"
              ><p>2</p></span
            >
          </span>
          <span
            class="flex justify-between items-center mt-3 py-3 rounded-xl cursor-pointer px-4 hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
          >
            <span
              class="text-white flex items-center justify-center gap-x-4 hover:text-[#0000FF]"
            >
              <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
              <p>Marked</p>
            </span>
          </span>

          <span
            class="flex justify-between items-center mt-3 py-3 rounded-xl cursor-pointer px-4 hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
          >
            <span
              class="text-white flex items-center justify-center gap-x-4 hover:text-[#0000FF]"
            >
              <font-awesome-icon icon="fa-solid fa-pen-to-square" />
              <p>Drafts</p>
            </span>
          </span>
          <span
            class="flex justify-between items-center mt-3 py-3 rounded-xl cursor-pointer px-4 hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
          >
            <span
              class="text-white flex items-center justify-center gap-x-4 hover:text-[#0000FF]"
            >
              <font-awesome-icon icon="fa-solid fa-paper-plane" />
              <p>Sent</p>
            </span>
          </span>
          <span
            class="flex justify-between items-center mt-3 py-3 rounded-xl cursor-pointer px-4 hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
          >
            <span
              class="text-white flex items-center justify-center gap-x-4 hover:text-[#0000FF]"
            >
              <font-awesome-icon icon="fa-solid fa-inbox" />
              <p>Important</p>
            </span>
            <span
              class="h-5 w-5 rounded-full bg-orange-600 text-white text-xs flex justify-center items-center"
              ><p>4</p></span
            >
          </span>
          <span
            class="flex justify-between items-center mt-3 py-3 rounded-xl cursor-pointer px-4 hover:bg-blue-700 hover:bg-opacity-20 hover:text-[#0000FF]"
          >
            <span
              class="text-white flex items-center justify-center gap-x-4 hover:text-[#0000FF]"
            >
              <font-awesome-icon icon="fa-solid fa-trash" />
              <p>Deleted</p>
            </span>
          </span>

          <!-- label -->
          <span
            class="px-5 mt-10 mb-5 flex justify-between items-center text-gray-300 text-lg"
          >
            <p class="uppercase">labels</p>
            <font-awesome-icon icon="fa-solid fa-plus" />
          </span>
          <span class="px-5 flex items-center gap-x-6 mt-2 text-white text-xs">
            <span class="h-3 w-3 rounded-full bg-orange-600"></span>
            <p>Personal</p>
          </span>
          <span class="px-5 flex items-center gap-x-6 mt-2 text-white text-xs">
            <span class="h-3 w-3 rounded-full bg-yellow-600"></span>
            <p>Work</p>
          </span>
          <span class="px-5 flex items-center gap-x-6 mt-2 text-white text-xs">
            <span class="h-3 w-3 rounded-full bg-green-600"></span>
            <p>Friends</p>
          </span>
          <span class="px-5 flex items-center gap-x-6 mt-2 text-white text-xs">
            <span class="h-3 w-3 rounded-full bg-purple-600"></span>
            <p>Family</p>
          </span>
          <span class="px-5 flex items-center gap-x-6 mt-2 text-white text-xs">
            <span class="h-3 w-3 rounded-full bg-green-400"></span>
            <p>Social</p>
          </span>
        </div>

        <!-- text-area -->
        <div class="w-[80%] flex gap-x-3 px-6 py-5">
          <div class="w-[35%]">
            <div
              class="flex justify-between items-center bg-[#303134] px-4 py-3 rounded-lg"
            >
              <span class="">
                <div className="flex justify-center items-center w-32">
                  <span className="w-[20%] text-white">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </span>
                  <input
                    name="search"
                    type="text"
                    id="search"
                    onChange="{handleChange}"
                    className="w-[80%] bg-[#303134] text-sm"
                    placeholder="Search.."
                  />
                </div>
              </span>
              <span class="flex gap-x-2 text-white">
                <p class="text-xs">Recent</p>
                <font-awesome-icon icon="fa-solid fa-caret-down" />
              </span>
            </div>

            <!-- messages -->
            <div class="bg-[#303134] px-4 py-3 rounded-lg flex gap-x-2 mt-3">
              <span class="h-10 w-10 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
              </span>
              <span class="text-xs text-gray-300">
                <span class="flex justify-between gap-x-10 items-center mb-1">
                  <p class="font-medium">Dustin Williamson</p>
                  <span class="flex justify-between text-xs gap-x-2">
                    <font-awesome-icon icon="fa-solid fa-paperclip" />
                    <p>10:40 pm</p>
                  </span>
                </span>
                <span>
                  <p class="font-semibold mb-1">Meeting with friends</p>
                  <p>
                    Hello, Mark! <br />
                    I am wriring to introduce you to Dav...
                  </p>
                </span>
              </span>
            </div>
            <!-- 2 -->
            <div class="bg-[#303134] px-4 py-3 rounded-lg flex gap-x-2 mt-3">
              <span class="h-10 w-10 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
              </span>
              <span class="text-xs text-gray-300">
                <span class="flex justify-between gap-x-10 items-center mb-1">
                  <p class="font-medium">Dustin Williamson</p>
                  <span class="flex justify-between text-xs gap-x-2">
                    <font-awesome-icon icon="fa-solid fa-paperclip" />
                    <p>10:40 pm</p>
                  </span>
                </span>
                <span>
                  <p class="font-semibold mb-1">Meeting with friends</p>
                  <p>
                    Hello, Mark! <br />
                    I am wriring to introduce you to Dav...
                  </p>
                </span>
              </span>
            </div>
            <!-- 3 -->
            <div class="bg-[#303134] px-4 py-3 rounded-lg flex gap-x-2 mt-3">
              <span class="h-10 w-10 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
              </span>
              <span class="text-xs text-gray-300">
                <span class="flex justify-between gap-x-10 items-center mb-1">
                  <p class="font-medium">Dustin Williamson</p>
                  <span class="flex justify-between text-xs gap-x-2">
                    <font-awesome-icon icon="fa-solid fa-paperclip" />
                    <p>10:40 pm</p>
                  </span>
                </span>
                <span>
                  <p class="font-semibold mb-1">Meeting with friends</p>
                  <p>
                    Hello, Mark! <br />
                    I am wriring to introduce you to Dav...
                  </p>
                </span>
              </span>
            </div>
            <!-- 4 -->
            <div class="bg-[#303134] px-4 py-3 rounded-lg flex gap-x-2 mt-3">
              <span class="h-10 w-10 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
              </span>
              <span class="text-xs text-gray-300">
                <span class="flex justify-between gap-x-10 items-center mb-1">
                  <p class="font-medium">Dustin Williamson</p>
                  <span class="flex justify-between text-xs gap-x-2">
                    <font-awesome-icon icon="fa-solid fa-paperclip" />
                    <p>10:40 pm</p>
                  </span>
                </span>
                <span>
                  <p class="font-semibold mb-1">Meeting with friends</p>
                  <p>
                    Hello, Mark! <br />
                    I am wriring to introduce you to Dav...
                  </p>
                </span>
              </span>
            </div>
            <!-- 5 -->
            <div class="bg-[#303134] px-4 py-3 rounded-lg flex gap-x-2 mt-3">
              <span class="h-10 w-10 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
              </span>
              <span class="text-xs text-gray-300">
                <span class="flex justify-between gap-x-10 items-center mb-1">
                  <p class="font-medium">Dustin Williamson</p>
                  <span class="flex justify-between text-xs gap-x-2">
                    <font-awesome-icon icon="fa-solid fa-paperclip" />
                    <p>10:40 pm</p>
                  </span>
                </span>
                <span>
                  <p class="font-semibold mb-1">Meeting with friends</p>
                  <p>
                    Hello, Mark! <br />
                    I am wriring to introduce you to Dav...
                  </p>
                </span>
              </span>
            </div>
            <!-- 6 -->
            <div class="bg-[#303134] px-4 py-3 rounded-lg flex gap-x-2 mt-3">
              <span class="h-10 w-10 rounded-full">
                <img
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                  alt="avatar"
                  class="h-10 w-10 rounded-full"
                />
              </span>
              <span class="text-xs text-gray-300">
                <span class="flex justify-between gap-x-10 items-center mb-1">
                  <p class="font-medium">Dustin Williamson</p>
                  <span class="flex justify-between text-xs gap-x-2">
                    <font-awesome-icon icon="fa-solid fa-paperclip" />
                    <p>10:40 pm</p>
                  </span>
                </span>
                <span>
                  <p class="font-semibold mb-1">Meeting with friends</p>
                  <p>
                    Hello, Mark! <br />
                    I am wriring to introduce you to Dav...
                  </p>
                </span>
              </span>
            </div>
          </div>

          <!-- write message -->
          <div class="w-[65%] bg-[#303134] rounded-lg p-5">
            <span
              class="flex justify-between items-center p-4 rounded-lg bg-[#43454a] text-white"
            >
              <font-awesome-icon icon="fa-solid fa-circle-left" />
              <span class="flex items-center justify-center gap-x-3">
                <font-awesome-icon icon="fa-solid fa-arrow-left" />
                <p class="text-sm">4 0f 200</p>
                <font-awesome-icon icon="fa-solid fa-arrow-right" />
              </span>
              <span class="flex gap-x-3">
                <font-awesome-icon
                  icon="fa-solid fa-tag"
                  class="text-orange-500"
                />
                <font-awesome-icon icon="fa-solid fa-print" />
                <font-awesome-icon icon="fa-solid fa-trash" />
              </span>
            </span>

            <div class="flex justify-between items-center mt-5">
              <span class="flex items-center gap-x-4">
                <img
                  src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                  alt="avatar"
                  class="w-10 h-10 rounded-full"
                />
                <span class="text-xs text-white">
                  <p>Regina Cooper</p>
                  <p class="text-blue-400">reginacooper@mail.com</p>
                </span>
              </span>
              <p class="text-gray-300 text-sm">May 27, 2021 - 10:47</p>
            </div>

            <!-- title -->
            <h1 class="text-white my-7 text-lg">Creative Director Resume</h1>

            <!-- name -->
            <p class="text-xs text-gray-300">
              Hello, Mitchell Cooper! <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore minus optio harum, et recusandae eaque veniam qui ea
              repellat quos. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              impedit vero architecto, id maxime sit ipsam adipisci deserunt,
              voluptates modi hic eum? Autem explicabo fugiat dolorum ducimus
              consectetur consequuntur error?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              laboriosam? <a href="#" class="text-blue-400">regina@mail.com</a>
              <br />
              <br />
              Thanks for any help you can give.
              <br />
              <br />
              Best regards, <br />Reginald Cooper.
            </p>

            <!-- attachments -->
            <span class="flex gap-x-10 my-10">
              <span
                class="w-64 rounded-lg p-5 bg-[#43454a] flex justify-between items-center"
                ><font-awesome-icon
                  icon="fa-solid fa-file-pdf"
                  class="text-5xl text-orange-500" />
                <p class="text-xs text-gray-300">Resume_2021.pdf <br />570KB</p>
                <font-awesome-icon
                  icon="fa-solid fa-download"
                  class="text-gray-300 text-lg"
              /></span>
              <span
                class="w-64 rounded-lg p-5 border border-[#43454a] flex items-center gap-x-10"
                ><font-awesome-icon
                  icon="fa-solid fa-file-lines"
                  class="text-5xl text-purple-500"
                />
                <p class="text-xs text-gray-300">Portfolio.zip <br />250MB</p>
              </span>
            </span>

            <!-- new message -->
            <div class="border-2 w-full border-blue-500 rounded-lg p-3">
              <span class="flex items-center justify-between gap-x-2">
                <span class="flex gap-x-3 items-center">
                  <p class="text-white">To:</p>
                  <span
                    class="text-white text-sm p-2 flex gap-x-2 items-center bg-[#43454a] rounded-lg"
                  >
                    <img
                      src="https://media.istockphoto.com/id/1389898125/photo/young-woman-chewing-gum-cute-iconic-character-3d-rendering.jpg?s=612x612&w=0&k=20&c=qriGPWcu_8VDPI6VGmyD0oHR80lqMnk8_AtwEPm8Guo="
                      alt="avatar"
                      class="h-5 w-5 rounded-full"
                    />
                    <p>cooper@example.com</p>
                    <p>x</p>
                  </span>
                </span>
                <span class="text-white flex gap-x-2">
                  <span class="px-3 py-1 bg-[#43454a] rounded-lg"
                    ><p>Cc</p></span
                  >
                  <span class="px-3 py-1 bg-[#43454a] rounded-lg"
                    ><p>Bcc</p></span
                  >
                </span>
              </span>
              <p class="mt-3 text-xs text-white">
                Hello, Reginald cooper! <br /><br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                natus, illo blanditiis sit minima ea voluptatem id nam saepe et?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                velit?<br />Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ab, nesciunt!
              </p>
              <div class="mt-10 flex justify-between">
                <span class="flex gap-x-4 items-center">
                  <span class="px-3 py-2 bg-[#43454a] text-gray-300 rounded-lg">
                    <font-awesome-icon icon="fa-solid fa-face-smile" />
                  </span>
                  <span class="px-3 py-2 bg-[#43454a] text-gray-300 rounded-lg">
                    <font-awesome-icon icon="fa-solid fa-paperclip" />
                  </span>
                  <span class="px-3 py-2 bg-[#43454a] text-gray-300 rounded-lg">
                    <font-awesome-icon icon="fa-solid fa-file-lines" />
                  </span>
                </span>
                <div
                  class="w-44 rounded-lg flex gap-x-3 items-center justify-center bg-blue-400 text-white"
                >
                  <font-awesome-icon icon="fa-solid fa-paper-plane" />
                  <p>Send Message</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
