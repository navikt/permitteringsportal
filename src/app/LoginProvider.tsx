import React, { useState } from 'react';
import { FunctionComponent, useEffect } from "react";
import { sjekkInnlogget } from './api/client';
import LoggInn from './LoggInn/LoggInn';

type Props = {};

const LoginProvider: FunctionComponent<Props> = (props) => {

  const [innlogget, setInnlogget] = useState(false)

  useEffect(() => {
    sjekkInnlogget().then((innlogget) => {
      if (innlogget) {
        setInnlogget(true);
      } else {
        setInnlogget(false);
      }
    })
  });
  
  if(innlogget) {
    return <> {props.children} </>;
  }

  return <LoggInn/>
};

export default LoginProvider;
