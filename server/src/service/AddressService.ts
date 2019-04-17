import { injectable, inject } from "inversify";
import { Address } from "../model/Address";
import TYPES from "../types";
import "reflect-metadata";
import { AddressDTO, Addresses } from "../entity/Addresses";
import * as _ from "lodash";
import { AddressRepositoryImplDb } from "../repository/AddressRepository";

export interface AddressService {
  getAddresses(): Promise<Array<Address>>;
  createAddress(address: Address): Promise<Address>;
  updateAddress(address: Address): Promise<Address>;
  getAddress(id: number): Promise<Address>;
  deleteAddress(id: number): Promise<any>;
}

@injectable()
export class AddressServiceImpl implements AddressService {
  @inject(TYPES.AddressRepository)
  private addressRepositoryDb: AddressRepositoryImplDb;

  public async getAddresses(): Promise<Array<Address>> {
    const addressesDb: Array<
      Address
    > = await this.addressRepositoryDb.findAll().then(a2 =>
      a2.map((dto: AddressDTO) => {
        return this.toAddressDTO(dto);
      })
    );

    return addressesDb;
  }

  public async createAddress(address: Address): Promise<Address> {
    const addressDTO: AddressDTO = this.toAddress(address);

    const createdDTO = await this.addressRepositoryDb.create(addressDTO);

    return await this.toAddressDTO(createdDTO);
  }

  public async updateAddress(address: Address): Promise<Address> {
    const addressDTO: AddressDTO = this.toAddress(address);

    const updated = await this.addressRepositoryDb.update(addressDTO);

    return await this.toAddressDTO(updated);
  }

  public async getAddress(id: number): Promise<Address> {
    let address = await this.addressRepositoryDb.find(id).then(a => {
      return this.toAddressDTO(a);
    });

    if (!address) {
      console.log("Adress not found");
    }

    return address;
  }

  public async deleteAddress(id: number): Promise<any> {
    await this.addressRepositoryDb.delete(id);
  }

  private toAddress(address: Address): AddressDTO {
    return {
      address1: address.getAddress1,
      address2: address.getAddress2,
      city: address.getCity,
      state: address.getState,
      zip: address.getZip,
      country: address.getCountry,
      _id: address.getId
    };
  }

  private toAddressDTO(addressDTO: AddressDTO): Address {
    return new Address(
      addressDTO.address1,
      addressDTO.address2,
      addressDTO.city,
      addressDTO.state,
      addressDTO.zip,
      addressDTO.country,
      addressDTO._id
    );
  }
}
