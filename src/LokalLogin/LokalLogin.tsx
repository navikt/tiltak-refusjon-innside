import { ReactComponent as NavIkon } from '@/ikoner/navikon.svg';
import { Flatknapp } from 'nav-frontend-knapper';
import { Input } from 'nav-frontend-skjema';
import React, { FunctionComponent, useState } from 'react';
import { InnloggetSaksbehandler } from '../App';

type Props = {
    ident: InnloggetSaksbehandler | undefined;
};

const LokalLogin: FunctionComponent<Props> = (props) => {
    const [subject, setSubject] = useState();
    console.log(props.ident);

    const loggUtClick = () => {
        window.location.href =
            'http://localhost:8080/local/cookie?cookiename=aad-idtoken&expiry=-1&redirect=http://localhost:3000/';
    };
    const loggInnKnapp = (subject: string) => {
        window.location.href = `http://localhost:8080/local/cookie?cookiename=aad-idtoken&subject=${subject}&redirect=http://localhost:3000/`;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', padding: '0.5rem' }}>
            <div>
                <NavIkon />
            </div>
            <div>
                <span>{props.ident && props.ident.identifikator}</span>

                {props.ident ? (
                    <Flatknapp onClick={loggUtClick}>Logg ut</Flatknapp>
                ) : (
                    <div style={{ display: 'flex' }}>
                        <Input
                            placeholder="Logg inn som"
                            value={subject}
                            onChange={(event) => setSubject(event.currentTarget.value)}
                        />
                        <Flatknapp
                            style={{ marginLeft: '0.5rem' }}
                            disabled={!subject}
                            onClick={() => loggInnKnapp(subject)}
                        >
                            Logg inn
                        </Flatknapp>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LokalLogin;