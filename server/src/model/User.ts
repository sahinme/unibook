import * as bcrypt from "bcryptjs";

export class User {
  constructor(
    private name: string,
    private surname: string,
    private username: string,
    private password: string,
    private email: string,
    private major: string,
    private college: string,
    private faculty: string,
    private isGraduated: boolean,
    private followers: number[],
    private male?: string,
    private phoneNumber?: string,
    private birthDate?: Date,
    private _id?: number,
    private registerDate?: Date,
    private lastLoginDate?: Date
  ) {}
  get getName(): string {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  get getSurname(): string {
    return this.surname;
  }

  set setSurname(surname: string) {
    this.surname = surname;
  }
  get getUsername(): string {
    return this.username;
  }

  set setUsername(username: string) {
    this.username = username;
  }

  get getPassword(): string {
    return this.password;
  }

  set setPassword(password: string) {
    this.password = password;
  }
  get getEmail(): string {
    return this.email;
  }

  set setEmail(email: string) {
    this.email = email;
  }

  get getMajor(): string {
    return this.major;
  }

  set setMajor(major: string) {
    this.major = major;
  }

  get getCollege(): string {
    return this.college;
  }

  set setCollege(college: string) {
    this.college = college;
  }

  get getIsGraduated(): boolean {
    return this.isGraduated;
  }

  set setIsGraduated(isGraduated: boolean) {
    this.isGraduated = isGraduated;
  }

  get getMale(): string {
    return this.male;
  }

  set setMale(male: string) {
    this.male = male;
  }

  get getPhoneNumber(): string {
    return this.phoneNumber;
  }

  set setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  get getBirthDate(): Date {
    return this.birthDate;
  }

  set setBirthDate(birthDate: Date) {
    this.birthDate = birthDate;
  }

  get getId(): number {
    return this._id;
  }

  set setId(_id: number) {
    this._id = _id;
  }

  get getFaculty(): string {
    return this.faculty;
  }

  set SetFaculty(faculty: string) {
    this.faculty = faculty;
  }

  get getRegisterDate(): Date {
    return this.registerDate;
  }
  set setRegisterDate(registerDate: Date) {
    this.registerDate = registerDate;
  }
  get getLastLoginDate(): Date {
    return this.lastLoginDate;
  }
  set setLastLoginDate(lastLoginDate: Date) {
    this.lastLoginDate = lastLoginDate;
  }
  get getFollowers(): Array<number> {
    return this.followers;
  }
  set setFollowers(followers: number[]) {
    this.followers = followers;
  }

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
