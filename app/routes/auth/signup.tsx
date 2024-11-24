import { authClient } from "@/lib/auth/auth.client";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  // const [image, setImage] = useState<File | null>(null);

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      // image: image ? convertImageToBase64(image) : undefined,
    }, {
      onRequest: (ctx) => {
        // show loading
        console.log("onRequest", ctx);
      },
      onSuccess: (ctx) => {
        // redirect to the dashboard
        console.log("onSuccess", ctx);
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    });

    console.log(data, error);
  };

  return (
    <div>
      <label htmlFor="name">
        Name
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {/* <input type="file" onChange={(e) => setImage(e.target.files?.[0])} /> */}
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}
