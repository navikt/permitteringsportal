import { FunctionComponent } from "react";

type Props = {

}

const LoggInn: FunctionComponent<Props> = () => {
  return (
    <div>
      Du må være innlogget. Logg inn <a href="/permitteringsportal/oauth2/login?redirect=/permitteringsportal/login-callback">her</a>.
    </div>
  )
}

export default LoggInn;