import { Container } from "@/components/container";
import { Stream } from "@/components/stream";
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
    <Container>
      {data?.map((stream) => (
        <Stream key={stream.id} id={stream.id} text={stream.text} />
      ))}
    </Container>
  );
}
