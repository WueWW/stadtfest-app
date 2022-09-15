export interface Location {
    name: string;
}

export interface Session {
    id: number;
    start: string;
    end: string | null;
    cancelled: boolean;
    title: string;
    location: Location;
    description?: {
        short?: string;
    };
    links?: {
        event?: string;
    };
}

export type SessionList = Session[];
export type PartitionedSessionList = { [key: string]: SessionList };

export function isSession(session: any): session is Session {
    if (typeof session !== 'object' || session === null) {
        return false;
    }

    return (
        typeof session.id === 'number' &&
        typeof session.start === 'string' &&
        (typeof session.end === 'string' || session.end === null) &&
        typeof session.cancelled === 'boolean' &&
        typeof session.title === 'string'
        // FIXME not fully complete ...
    );
}

function extractDate(session: Session): string {
    return new Date(session.start).toISOString().substr(0, 10);
}

export namespace Session {
    export function partitionByDate(sessions: SessionList): PartitionedSessionList {
        return sessions.reduce((acc: PartitionedSessionList, session) => {
            const key = extractDate(session);
            acc[key] = acc[key] || [];
            acc[key].push(session);
            return acc;
        }, {} as PartitionedSessionList);
    }

    export function startTimeComparator(a: Session, b: Session) {
        if (a.start < b.start) return -1;
        if (a.start > b.start) return 1;
        return 0;
    }
}
