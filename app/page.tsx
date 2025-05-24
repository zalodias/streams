import { Container } from "@/components/container";
import { Stream } from "@/components/stream";
import { createStream } from "@/data/actions";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("Streams")
    .select("*")
    .order("created_time", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <Container className="pt-5">
      <form action={createStream}>
        <input
          type="text"
          name="text"
          placeholder="What's on your mind?"
          className="w-full"
        />
      </form>
      {data?.map((stream) => (
        <Stream key={stream.id} id={stream.id} text={stream.text} />
      ))}
    </Container>
  );
}
