export interface BaseRepository<T> {
  findAll(): Promise<Array<T>>;
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  find(id: number): Promise<T>;
  delete(id: number): Promise<any>;
}
