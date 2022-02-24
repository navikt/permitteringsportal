import { BodyShort, ContentContainer, Detail, Heading } from "@navikt/ds-react";
import { FunctionComponent } from "react";
import { Oppgaver } from "../Oppgaver/Oppgaver";

type Props = {

}

const Forside: FunctionComponent<Props> = () => {
  return (
    <ContentContainer className={"navds-story-content-container"}>
      <Heading spacing={true} size={"large"} level={"1"}>
        Innledning og oversikt
      </Heading>
      <Heading spacing={true} size={"large"} level={"6"}>
        Informasjon om ansatt pga permittering
      </Heading>
      <BodyShort spacing={true}>
        Vi har fått melding om at en eller flere av ansatte i din bedrift skal permitteres og i den forbindelse trenger vi opplysninger fra deg som arbeidgiver
      </BodyShort>
      <BodyShort>
        <Detail>Sjekkliste</Detail>
        <ul>
          <li>Dokumentasjon av enighet mellom arbeidsgiver og eller ansatte/fagforening</li>
          <li>Dato for siste lønnsplikt til ansatt</li>
          <li>Generel info om den ansatte</li>
        </ul>
      </BodyShort>
      <Oppgaver />
    </ContentContainer>
  )
}

export default Forside;
