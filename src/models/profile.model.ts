import {Entity, model, property} from '@loopback/repository';

@model()
export class Profile extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'date',
    required: true,
  })
  birth: string;

  @property({
    type: 'string',
    required: true,
  })
  sex: string;

  @property({
    type: 'any',
  })
  pregnancyStatus?: any;

  @property({
    type: 'any',
  })
  breastFeeding?: any;

  @property({
    type: 'array',
    itemType: 'string',
  })
  intolerances?: any[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  allergies: any[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  diagnoses: any[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  medicines: any[];

  @property({
    type: 'any',
    required: true,
  })
  howToMedication: any;

  @property({
    type: 'any',
    required: true,
  })
  whyTakeMedication: any;


  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
