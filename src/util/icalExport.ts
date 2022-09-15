import icalGenerator from 'ical-generator';

import { SessionList } from '../model/Session';

const generateIcal = (sessions: SessionList): string => {
    const cal = icalGenerator({ domain: 'app.stadtfest.metafnord.de', name: 'Stadtfest Favoriten' });

    sessions.forEach(session =>
        cal.createEvent({
            uid: `SF22-${session.id}`,
            start: new Date(session.start),
            end: session.end ? new Date(session.end) : undefined,
            summary: session.title,
            description: session.description && session.description.short,
            location: session.location && session.location.name,
        })
    );

    return cal.toString();
};

export default generateIcal;
