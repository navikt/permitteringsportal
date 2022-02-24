import { BodyLong, ContentContainer } from "@navikt/ds-react";
import { FunctionComponent } from "react";

type Props = {

}

const Forside: FunctionComponent<Props> = () => {
  return (
    <ContentContainer className={"navds-story-content-container"}>
      <BodyLong size="medium">-- Innhold --</BodyLong>
    </ContentContainer>
  )
}

export default Forside;
