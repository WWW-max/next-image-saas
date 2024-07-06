import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import Image from "next/image";
import { db } from "@/server/db/db";
import { Users } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  const users = await db.query.Users.findMany();
  // const users = await db.select().from(Users).where(eq(Users.name, "Tom"));
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
      {
          users.map((user) => (
            <div key={user?.id}>{user?.name}</div>
          ))
      }
    </div>
  );
}
