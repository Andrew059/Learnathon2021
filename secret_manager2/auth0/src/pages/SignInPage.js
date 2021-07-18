import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";
import "./SignInPage.css"

export const SignInPage = () => {
  const { loginWithPopup } = useAuth0();
  const history = useHistory();

  return (
    <button className="button3"
      onClick={async () => {
        await loginWithPopup();
        history.push("/secret");
      }}
    >
      Sign In
    </button>
  );
};
