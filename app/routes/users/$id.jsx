import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "../../lib/api";

// 서버 측에서만 호출 , 클라이언트측 번들링 포함x
export const loader = async ({ params }) => {
  const { id } = params;
  const user = await getUser(id);
  return json(user);
};

const User = () => {
  const user = useLoaderData();

  return (
    <div>
      <h2>{user.username}</h2>
      <code style={{ whiteSpace: "pre" }}>{JSON.stringify(user, null, 2)}</code>
    </div>
  );
};

export default User;
