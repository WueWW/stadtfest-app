import React, { FunctionComponent } from 'react';
import { Card, Icon } from 'semantic-ui-react';

import { Location } from '../../../model/Session';

export interface Props {
    location?: Location;
}

const distanceDivStyle = { marginLeft: '1.5rem' };

const LocationBlock: FunctionComponent<Props> = ({ location }) => {
    if (!location || !location.name) {
        return null;
    }

    return (
        <Card.Content extra>
            <Card.Description>
                <Icon className="left floated" name="globe" />
                <div style={distanceDivStyle}>{location.name}</div>
            </Card.Description>
        </Card.Content>
    );
};

export default LocationBlock;
