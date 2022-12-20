export type Status = "Dead" | "Alive" | "unknown";

export type Gender = "Female" | "Male" | "Genderless" | "unknown";

export const STATUSES = ["Alive", "Dead", "unknown"] as const;

export const GENDERS = ["Male", "Female", "Genderless", "unknown"] as const;

export interface IResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface ICharacterLocation {
  name: string;
  url: string;
}

export interface ICharacter extends IResourceBase {
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: ICharacterLocation;
  location: ICharacterLocation;
  image: string;
  episode: string[];
}
