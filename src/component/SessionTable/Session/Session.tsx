import './style.less';

import React, { useState } from 'react';
import { Card, Icon, Label } from 'semantic-ui-react';

import { Session as SessionType } from '../../../model/Session';
import LocationBlock from './LocationBlock';
import EventLinkIcon from './EventLinkIcon';

export interface Props extends SessionType {
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

export interface State {
    expanded: boolean;
}

function formatTime(dt: string): string {
    return new Date(dt).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
}

const Session = (props: Props) => {
    return (
        <Card className={props.cancelled ? 'cancelled' : undefined}>
            <Card.Content>
                <Card.Header style={{ cursor: 'pointer' }}>{props.title}</Card.Header>
            </Card.Content>
            {props.cancelled && (
                <Card.Content extra>
                    <Card.Description>
                        <Label color="red">
                            <Icon name="ban" /> Die Session wurde abgesagt.
                        </Label>
                    </Card.Description>
                </Card.Content>
            )}
            {!props.cancelled && props.description?.short && (
                <Card.Content>
                    <Card.Description>
                        <p>{props.description.short}</p>
                    </Card.Description>
                </Card.Content>
            )}
            {!props.cancelled && <LocationBlock location={props.location} />}

            <Card.Content extra>
                {(props.isFavorite || !props.cancelled) && (
                    <Icon
                        className="right floated"
                        name={props.isFavorite ? 'heart' : 'heart outline'}
                        color={props.isFavorite ? 'red' : undefined}
                        onClick={props.onToggleFavorite}
                        style={{ cursor: 'pointer' }}
                    />
                )}
                <EventLinkIcon link={props.links?.event} />
                <Icon name="clock outline" />
                {formatTime(props.start)}
                {props.end && ' - ' + formatTime(props.end)}
            </Card.Content>
        </Card>
    );
};

export default Session;
