import { FunctionComponent } from "react";

type Props = {

}

export const redirectTilLogin = () => {
  window.location.href = `/permitteringsportal/oauth2/login?redirect=/permitteringsportal/login-callback`;
};

const LoggInn: FunctionComponent<Props> = () => {
  return (
    <div>
      Logg inn her, eller der :)
      <a href="/#" onClick={redirectTilLogin}>Her :)</a>
    </div>
  )
}

export default LoggInn;