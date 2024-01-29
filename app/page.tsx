/* eslint-disable react/no-unescaped-entities */
import Login from "@/components/Login";

export default function Home() {
  return (
    <main className="mt-3 bg-blue-400 ">
      <div className="flex flex-col md:flex-row items-center bg-[#c6baba] dark:bg-slate-700">
        <div className="p-10 flex flex-col bg-[#c6baba] dark:bg-slate-700 dark:text-white space-y-5 text-center">
          <h1 className="text-3xl  font-bold">
            Welcome to Dropbox 2.0 !!! <br />
            Upgrade to Dropbox 2.0: Elevate your file-sharing game effortlessly.
          </h1>
          <p className="pb-10">
            Hey there! 👋 We're thrilled to have you on board for our exciting
            new project, Dropbox 2.0! Get ready to take your file storage and
            sharing experience to the next level. Whether you're a student, a
            professional, or simply someone who loves keeping things organized,
            we've got you covered. With Dropbox 2.0, you'll enjoy a sleek
            interface, enhanced security features, and seamless collaboration
            tools. Share files effortlessly, access them from anywhere, and rest
            assured knowing your data is in safe hands. We're here to make your
            life easier, whether you're juggling assignments, collaborating on
            projects, or simply storing precious memories. So go ahead, dive in,
            and explore all that Dropbox 2.0 has to offer. Welcome aboard, and
            happy sharing! 🚀
          </p>
          {/* <Link
            href="/dashboard"
            className="flex dark:bg-blue-500 dark:hover:bg-blue-800 transition bg-[#8ab6d6] hover:bg-[#6ab4ea] cursor-pointer p-5 w-fit rounded-2xl self-center "
          >
            Try it for Free💥💥💥!!!
            <ArrowRight className="ml-5" />
          </Link> */}
          <Login />
        </div>
        <div className="bg-[#e8c3c3] dark:bg-slate-900 h-full p-8 md:mr-10 rounded-lg">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
              type="video/mp4"
            />
            Your Browser does not support the video
          </video>
        </div>
      </div>
      <p className="bg-[#c6baba] md:bg-[#e8c3c3] dark:bg-slate-800 text-center font-bold text-xl pt-10">
        Dropbox 2.0 Student Project Disclaimer
      </p>
      <p className="bg-[#c6baba] md:bg-[#e8c3c3] dark:bg-slate-800 text-center font-light p-[26px]">
        Hey there! Welcome to our Dropbox 2.0 project! We've been working hard
        on this to provide you with a cool platform for storing and sharing your
        files. However, there are a few things you should know. We've put in
        some security measures, but just like any project, it's not foolproof,
        so please be cautious with your sensitive information. Sometimes the
        service might go down for maintenance or other technical stuff, so bear
        with us during those times. Also, if you click on any links we provide
        to other websites, just know that we're not responsible for what's on
        those sites. And hey, remember that whatever you upload or share is your
        responsibility, so keep it clean and legal, alright? Thanks for being
        part of our project!
      </p>
    </main>
  );
}
