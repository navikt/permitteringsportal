import React from "react";
import { FunctionComponent, useEffect, useState  } from "react";
import { Organisasjon } from "../types/Organisasjon";
import { hentOrganisasjoner } from "./api/client";
import { Tilgang } from "./LoginProvider";

type OrganisajonsContext = {
  organisasjoner: Array<Organisasjon>;
  organisasjonslisteTilgang: Tilgang;
};

const OrganisasjonsListeContext = React.createContext<OrganisajonsContext>(
  {} as OrganisajonsContext
);

export const OrganisasjonsProvider: FunctionComponent = ( props ) => {

  const [organisasjoner, setOrganisasjoner] = useState(Array<Organisasjon>(0));
  const [organisasjonslisteTilgang, setOrganisasjonslisteTilgang] = useState(
    Tilgang.LASTER
);

  useEffect(() => {
    setOrganisasjonslisteTilgang(Tilgang.LASTER)
    hentOrganisasjoner()
      .then((organisasjoner) => {
        setOrganisasjonslisteTilgang(Tilgang.TILGANG)
        setOrganisasjoner(organisasjoner)
      },(error) => {
        console.log("hmm")
        setOrganisasjonslisteTilgang(Tilgang.IKKE_TILGANG)
        setOrganisasjoner([])
      })
  }, [])

  let organisasjonsContext: OrganisajonsContext = {
    organisasjoner,
    organisasjonslisteTilgang,
};

  return (
    <>
      <OrganisasjonsListeContext.Provider value={organisasjonsContext}>
        {props.children}
      </OrganisasjonsListeContext.Provider>
    </>
  )

}
