import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProfileDatasource} from '../datasources';
import {Profile, ProfileRelations} from '../models';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.id,
  ProfileRelations
> {
  constructor(
    @inject('datasources.profile') dataSource: ProfileDatasource,
  ) {
    super(Profile, dataSource);
  }

}
