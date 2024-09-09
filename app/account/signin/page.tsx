import { signIn, providerMap } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";

export default async function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-8 border-primary rounded-lg grid grid-cols-1 gap-1 content-center">
        <Image
          src="/logo-icon.png"
          width={200} // Specify the width
          height={200} // Specify the height
          alt="DivviUp Logo"
          priority
        />
        <div></div>
        <ul className="float items-center pb-4">
          {Object.values(providerMap).map((provider) => (
            <li key={provider.id} className="flex justify-center">
              <form
                action={async () => {
                  "use server";
                  try {
                    await signIn(provider.id, { redirectTo: "/create" });
                  } catch (error) {
                    // Signin can fail for a number of reasons, such as the user
                    // not existing, or the user not having the correct role.
                    // In some cases, you may want to redirect to a custom error
                    // if (error instanceof AuthError) {
                    //   return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
                    // }

                    // Otherwise if a redirects happens Next.js can handle it
                    // so you can just re-thrown the error and let Next.js handle it.
                    // Docs:
                    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                    throw error;
                  }
                }}
              >
                <Button variant="ghost" type="submit">
                  <FaGoogle className="mr-2" />
                  Sign in with {provider.name}
                </Button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
