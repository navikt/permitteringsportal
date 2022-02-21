import { FunctionComponent, useEffect, useState } from "react";
import { Organisasjon } from "../../types/Organisasjon";
import { hentOrganisasjoner } from "../api/client";


type Props = {

}

const Forside: FunctionComponent<Props> = () => {
  const [organisasjoner, setOrganisasjoner] = useState(Array<Organisasjon>());

  useEffect(() => {
    hentOrganisasjoner()
      .then((organisasjoner) => {
        setOrganisasjoner(organisasjoner)
      },(error) => {
        console.log("hmm")
        //setOrganisasjoner([])
      })
  })

  // console.log("organisasjoner", organisasjoner)
  return (
    <div>
      <p>Hello {organisasjoner}</p>
    </div>
  )
}

export default Forside;
