## Main Libraries

- [Express](http://expressjs.com/) - web framework
- [InversifyJS](https://github.com/inversify/InversifyJS) - TypeScript DI/IoC framework
- [TypeORM](https://github.com/typeorm/typeorm) - TypeScript ORM (uses sqlite as an example)
- [winston](https://github.com/winstonjs/winston) - logging framework

## Example architecture

The example follows a 3-tier architecture of controller -> service -> repository. The repository layer produces and accepts DTOs, the service and controller layers produce and accept models.
