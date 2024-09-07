export interface RandomPeople {
    results: Result[];
}

export interface Result {
    gender:  string;
    name:    Name;
    email:   string;
    picture: Picture;
    nat:     string;
}

export interface Name {
    title: string;
    first: string;
    last:  string;
}

export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}
