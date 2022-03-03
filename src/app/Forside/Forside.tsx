import { BodyShort, Button, Detail, Heading } from '@navikt/ds-react';
import { FunctionComponent } from 'react';
import Container from '../components/Container';
import { Oppgaver } from '../Oppgaver/Oppgaver';
import { sendOppgaver } from "../api/client";

type Props = {};

const Forside: FunctionComponent<Props> = () => {
  const sendBekreftelseAvArbeidsforhold = () => {
    sendOppgaver();
  };

  return (
    <>
      <Container>
        <Heading spacing={true} size={'large'} level={'1'}>
          Innledning og oversikt
        </Heading>
        <Heading spacing={true} size={'large'} level={'6'}>
          Informasjon om ansatt pga permittering
        </Heading>
        <BodyShort spacing={true}>
          Vi har fått melding om at en eller flere av ansatte i din bedrift skal permitteres og i den
          forbindelse trenger vi opplysninger fra deg som arbeidgiver
        </BodyShort>
        <BodyShort>
          <Detail>Sjekkliste</Detail>
          <ul>
            <li>Dokumentasjon av enighet mellom arbeidsgiver og eller ansatte/fagforening</li>
            <li>Dato for siste lønnsplikt til ansatt</li>
            <li>Generel info om den ansatte</li>
          </ul>
        </BodyShort>
        <Button variant="primary" size="medium" onClick={() => sendBekreftelseAvArbeidsforhold()}>
          Button
        </Button>
      </Container>
      <Oppgaver />
    </>
  );
};

export default Forside;
