export class Address {
  constructor(
    private address1: string,
    private address2: string,
    private city: string,
    private state: string,
    private zip: string,
    private country: string,
    private id?: number
  ) {}

  get getAddress1(): string {
    return this.address1;
  }

  set setAddress1(address1: string) {
    this.address1 = address1;
  }

  get getAddress2(): string {
    return this.address2;
  }
  set setAddress2(address2: string) {
    this.address2 = address2;
  }

  get getCity(): string {
    return this.city;
  }
  set setCity(city: string) {
    this.city = city;
  }

  get getState(): string {
    return this.state;
  }
  set setState(state: string) {
    this.state = state;
  }
  get getZip(): string {
    return this.zip;
  }
  set setZip(zip: string) {
    this.zip = zip;
  }
  get getCountry(): string {
    return this.country;
  }
  set setCountry(country: string) {
    this.country = country;
  }
  get getId(): number {
    return this.id;
  }
  set setId(id: number) {
    this.id = id;
  }
}
