import Hero from "@/components/hero";
import PictureContainer from "@/components/picture-container";
import fetchPictures from "@/api/fetchPictures";

export default async function Home() {
  const response = await fetchPictures()
  console.log(response.next_cursor)
  const pictures = response.resources

  return (
    <main className="flex flex-col gap-4 items-start p-4">
      <Hero />
      <div className="md:grid md:grid-cols-3 self-end flex flex-col items-center gap-4 md:max-w-[68rem]">

        {
          pictures.map((picture: typeof pictures[0]) =>
            <PictureContainer
              key={picture.asset_id}
              src={picture.public_id}
              width="460"
              height="308"
              crop="fill"
              alt=""
              sizes="50vw"
            />)
        }
      </div>
    </main>
  )
}