function Contact() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto min-h-screen px-6 py-20"
    >
     <div className="flex justify-center mb-8">
  <div className="relative">

   
    <div className="absolute -top-3 -right-3">
      <span className="relative flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-blue-600"></span>
      </span>
    </div>

    
    <div className="rounded-full border-2 border-blue-600 bg-blue-50 px-8 py-3 shadow-lg">
      <span className="text-lg font-bold uppercase tracking-wider text-blue-600">
        Contact Me
      </span>
    </div>

  </div>
</div>

   <div
      id="contact"
      className="relative isolate   px-6 py-24 sm:py-32 lg:px-8"
    >

    
      <div
        aria-hidden="true"
        className="" 
      >
       </div>

     
      <div className="mx-auto max-w-2xl text-center">

        


        <h2 className="
          mt-6
          text-4xl
          font-bold
          tracking-tight
          text-black
          sm:text-5xl
        ">
          Let's Work Together
        </h2>


        <p className="
          mt-4
          text-lg
          leading-8
          text-black-400
        ">
          Have a project idea? Let's build something
          amazing together using modern technologies.
        </p>

      </div>



      <form
        className="
        mx-auto
        mt-16
        max-w-xl
        space-y-6
        "
      >


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">


          <input
            type="text"
            placeholder="First name"
            className="
            rounded-xl
            bg-black/5
            px-4
            py-3
            text-black
            placeholder:text-black-500
            outline-none
            ring-1
            ring-black/10
            focus:ring-blue-600
            "
          />


          <input
            type="text"
            placeholder="Last name"
            className="
            rounded-xl
            bg-black/5
            px-4
            py-3
            text-black
            placeholder:text-gray-500
            outline-none
            ring-1
            ring-black/10
            focus:ring-black-600
            "
          />


        </div>



        <input
          type="email"
          placeholder="Your email"
          className="
          w-full
          rounded-xl
          bg-black/5
          px-4
          py-3
          text-black
          placeholder:text-gray-500
          outline-none
          ring-1
          ring-white/10
          focus:ring-blue-600
          "
        />



        <input
          type="text"
          placeholder="Phone number"
          className="
          w-full
          rounded-xl
          bg-black/5
          px-4
          py-3
          text-black
          placeholder:text-gray-500
          outline-none
          ring-1
          ring-white/10
          focus:ring-blue-600
          "
        />



        <textarea
          rows={5}
          placeholder="Your message"
          className="
          w-full
          rounded-xl
          bg-black/5
          px-4
          py-3
          text-black
          placeholder:text-gray-500
          outline-none
          ring-1
          ring-black/10
          focus:ring-blue-600
          "
        />


        <button
          type="submit"
          className="
          w-full
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-600
          hover:shadow-lg
          hover:shadow-blue-600/30
          "
        >
          Let's Talk 
        </button>


      </form>

    </div>
</section>
  )
}

export default Contact