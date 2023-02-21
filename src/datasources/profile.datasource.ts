import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'profile',
  connector: 'mongodb',
  url: process.env.DB_URL ?? 'mongodb://localhost:27017/profile?replicaSet=rs0',
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.MONGO_PORT ?? 27017,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE ?? 'profile',
  useNewUrlParser: true,
  protocol: 'mongodb+srv'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ProfileDatasource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'profile';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.profile', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
