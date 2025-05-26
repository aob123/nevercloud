export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-7xl">Nevercloud</h1>
        <p className="text-1xl">
          Welcome to neverlcoud. This is just a site/blog/info whatever you want{" "}
          <br />
          to call it about my explorations in to the world of de-clouding my
          life!
        </p>
        <ul className="list-inside  text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            <u>Declouding?</u> <br /> I&apos;m not sure if it&apos;s a real term
            but it made <br />
            sense to me, and it is was it says: removing clouds from your life!
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <u>Why?</u> <br /> Over the years i&apos;ve grown more aware of the
            importance <br />
            of privacy and also the fact that a lot of our data is harvested and{" "}
            <br />
            monetised. Do i make any money off of my own data? It appears not.{" "}
            <br />
            And i don&apos;t remember anyone, <br />
            ever, in a human and understandable way explaining that this is the
            case.
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <u>How?</u> <br /> At the moment i&apos;ve started out with my own
            server, <br /> where i host this site and use jellyfin for movies
            and tv-shows. <br /> I realise i&apos;m not even close to being
            declouded, but slowly and surely <br />
            i&apos;ll get there!
          </li>
          <li>
            <u>Disclaimer</u> - I realise not all cloud services are evil, but i{" "}
            <br />
            want to own as much of my own data as possible, so for the sake of{" "}
            <br />
            some cofort and ease and to counter total isolation i will have to{" "}
            <br />
            compromise with using some cloud services, as it seems at the <br />
            moment.
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer> */}
    </div>
  );
}
