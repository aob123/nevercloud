export default function Home() {
  return (
    <main className="grid grid-cols-12 font-mono">
      <section className="col-span-4 col-start-4 col-end-10 flex flex-col items-center  h-screen p-6">
        <h1 className="text-5xl font-bold text-center p-8">About Nevercloud</h1>
        <div>
          <p>
            A while ago i started thinking about how to get off the cloud. And
            to be honest, i just liked the name Nevercloud. The whole concept of
            getting off of the cloud is more about minimising the use of
            commercial cloud services and trying to use more self-hosted
            options.
          </p>
          <br />
          <p>
            My reasons for doing this are mainly privacy and control over my
            data, as well as an interesting learning experience.
          </p>
          <br />
          <p>
            This website is a collection of different projects, ideas, and
            thoughts on the subject of hosting your own cloud solutions as well
            as the other things i choose to delve in to. I hope you find it
            interesting and maybe even inspiring!
          </p>
        </div>

        <div className="text-sm text-gray-500 text-center">
          -------------------------------------------------------------------------------------
        </div>
      </section>
    </main>
  );
}
