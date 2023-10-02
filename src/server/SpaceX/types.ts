export type Launch = {
    id: string;
    name: string;

    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;

    upcoming: boolean;
    success: boolean;
    details: string;

    links: Links;
    cores: Core[];

    payloads: string[];
    launchpad: string;
    rocket: string;
    crew: string[];
    ships: string[];
    capsules: string[];

    fairings: Fairings;

    flight_number: number;
    net: boolean;
    window: number;
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: string;
}

export type Launches = Launch[];

type Core = {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean;
    landing_type: string;
    landpad: string;
}

type Links = {
    patch: {
        small: string;
        large: string;
    };
    reddit: {
        campaign: string;
        launch: string;
        media: string;
        recovery: string;
    };
    flickr: {
        small: string[];
        original: string[];
    };
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
}

type Fairings = {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
}