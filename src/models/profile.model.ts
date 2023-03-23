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
  })
  birth?: string;

  @property({
    type: 'string',
  })
  sex?: string;

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
  })
  allergies?: any[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  diagnoses?: any[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  medicines?: any[];

  @property({
    type: 'any',
  })
  howToMedication?: any;

  @property({
    type: 'any',
  })
  whyTakeMedication?: any;


  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
