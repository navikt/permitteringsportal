import { ContentContainer, Loader } from '@navikt/ds-react';
import React, { useState } from 'react';
import { FunctionComponent, useEffect } from "react";
import { sjekkInnlogget } from './api/client';
import LoggInn from './LoggInn/LoggInn';

type Props = {};

export enum Tilgang {
  LASTER,
  IKKE_TILGANG,
  TILGANG,
}

const LoginProvider: FunctionComponent<Props> = (props) => {

  const [innlogget, setInnlogget] = useState(Tilgang.LASTER)

  useEffect(() => {
    setInnlogget(Tilgang.LASTER)
    sjekkInnlogget().then((innlogget) => {
      if (innlogget) {
        setInnlogget(Tilgang.TILGANG);
      } else {
        setInnlogget(Tilgang.IKKE_TILGANG);
      }
    })
  }, []);
  
  if(innlogget === Tilgang.LASTER) {
    return (
      <ContentContainer className={"navds-story-content-container"}>
        <Loader size="2xlarge" />
      </ContentContainer>
    )
  }

  if(innlogget === Tilgang.TILGANG) {
    return <> {props.children} </>;
  }

  return <LoggInn/>
};

export default LoginProvider;
