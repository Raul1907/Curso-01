export interface ICharacter {
    created:  Date;
    episode:  string[];
    gender:   string;
    id:       string;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  string;
    status:   string;
    type:     string;
    url:      string;
}

export interface Location {
    name: string;
    url:  string;
}
