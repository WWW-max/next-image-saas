import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <Input name="name" placeholder="Add APP"></Input>
        <Textarea
          name="description"
          placeholder="Description"
        ></Textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
