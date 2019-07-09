import { Majors } from "../../../entity/Majors";

export interface UserDTO {
  _id?: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  major: Majors;
  isGraduated: boolean;
  male?: string;
  phoneNumber?: string;
  birthDate?: Date;
  registerDate: Date;
  last_login: Date;
}
