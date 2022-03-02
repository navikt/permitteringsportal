import { Heading, Table } from "@navikt/ds-react";
import { FunctionComponent, useEffect, useState } from "react";
import { Oppgave } from "../../types/Oppgave";
import { hentOppgaver } from "../api/client";
import Container from "../components/Container";

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
    <Container>
      <Heading spacing={true} size={"large"} level={"1"}>
        Ansatte som har meldt behov fra deg som arbeidsgiver
      </Heading>
      <Table>
        <Table.Header>
          <Table.HeaderCell>Opplysninger gjelder</Table.HeaderCell>
          <Table.HeaderCell>Dato mottatt</Table.HeaderCell>
          <Table.HeaderCell>Fødselsnummer</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {oppgaver.map((oppgave, idx) => {
            return (
              <Table.Row key={idx}>
                <Table.DataCell>{oppgave.navn}</Table.DataCell>
                <Table.DataCell>{oppgave.mottat}</Table.DataCell>
                <Table.DataCell>{oppgave.fnr}</Table.DataCell>
                <Table.DataCell>{oppgave.status}</Table.DataCell>
                <Table.DataCell>Fyll inn</Table.DataCell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </Container>
  )
}
