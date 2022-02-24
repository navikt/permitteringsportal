import { Heading } from "@navikt/ds-react";
import { FunctionComponent, useEffect, useState } from "react";
import { Oppgave } from "../../types/Oppgave";
import { hentOppgaver } from "../api/client";

export const Oppgaver: FunctionComponent = ( props ) => {
  
  const [oppgaver, setOppgaver] = useState(Array<Oppgave>(0));
  useEffect(() => {
    hentOppgaver()
      .then((oppgaver) => {
        setOppgaver(oppgaver)
      }, (error) => {
        console.log("feil")
      })
  }, [])

  return (
    <>
      <Heading spacing={true} size={"large"} level={"1"}>
        Ansatte som har meldt behov fra deg som arbeidsgiver
      </Heading>
      {oppgaver.map((oppgave, idx) => {
        return (
          <div key={idx}>
            {oppgave.navn}
          </div>
        )
      })}

    </>
  )

}
