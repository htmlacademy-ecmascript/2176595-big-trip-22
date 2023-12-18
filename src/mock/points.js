const pointsMock = [
  {
    id: 'db3a3f81-aecd-4fca-bccf-1fbd26dd911b',
    basePrice: 5232,
    dateFrom: '2023-12-03T20:41:04.701Z',
    dateTo: '2023-12-05T13:07:04.701Z',
    destination: '8525951b-0798-4720-90cb-e255138f63aa',
    isFavorite: true,
    offers: [
      '512e3870-1beb-469c-9cee-bf783820c0c6',
      '98c665ca-d858-4a99-94ab-4f202344a3c8',
      'd85ef0fe-e0c0-484b-a07e-5c6c3619fc46',
      '1c5b2003-4d91-4ea9-9cdb-5061f3610785'
    ],
    type: 'flight'
  },
  {
    id: 'f3a0310f-eadb-47f0-82b9-7be4de245195',
    basePrice: 4200,
    dateFrom: '2023-12-06T08:36:04.701Z',
    dateTo: '2023-12-07T06:01:04.701Z',
    destination: '3fe95771-be9c-4f32-a850-f4ecf2907f77',
    isFavorite: true,
    offers: [
      '5d04657e-be30-4db7-b3ea-e961c94ceed4',
      'fcb41394-879a-4de4-afa7-a4ca4a0288c7',
      'a899dc84-65a1-413b-a3f6-697e0d62a2af',
      'bf3adb23-ca52-4725-90dd-c408a87a1d95',
      '5a3581b3-bb76-42e9-976c-92af11b21d06'
    ],
    type: 'check-in'
  },
  {
    id: 'ac1588d3-ae68-494c-bf2e-56696788e19a',
    basePrice: 2824,
    dateFrom: '2023-12-08T19:55:04.701Z',
    dateTo: '2023-12-09T19:44:04.701Z',
    destination: '3fe95771-be9c-4f32-a850-f4ecf2907f77',
    isFavorite: true,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'd4e2741f-ee39-43e3-9738-f467917230e8',
    basePrice: 8036,
    dateFrom: '2023-12-10T10:34:04.701Z',
    dateTo: '2023-12-10T22:02:04.701Z',
    destination: '4e890f47-a8d3-4efc-9ed4-2e2bf2eeadf5',
    isFavorite: true,
    offers: [],
    type: 'check-in'
  },
  {
    id: 'fb5b1052-0aaf-4315-9028-51fe2f1a2056',
    basePrice: 368,
    dateFrom: '2023-12-11T14:12:04.701Z',
    dateTo: '2023-12-12T01:15:04.701Z',
    destination: '14c3101b-69b0-4a44-9d13-eb881a8a6e85',
    isFavorite: true,
    offers: [
      'cafbbdd8-6dea-432f-bb37-f6b8ae635ae4',
      'b371fb66-c631-4bca-b1f8-f80f48692674',
      'bbc01c4e-2318-426b-bfef-6af93548e45c'
    ],
    type: 'bus'
  },
  {
    id: '81dd5f78-180f-4259-9f06-32a04e126482',
    basePrice: 9000,
    dateFrom: '2023-12-13T10:14:04.701Z',
    dateTo: '2023-12-14T07:15:04.701Z',
    destination: 'd19c50c0-d853-4743-834e-e212a3d5cff7',
    isFavorite: false,
    offers: [
      'cafbbdd8-6dea-432f-bb37-f6b8ae635ae4',
      'b371fb66-c631-4bca-b1f8-f80f48692674',
      'bbc01c4e-2318-426b-bfef-6af93548e45c'
    ],
    type: 'bus'
  },
  {
    id: '4b885e58-4a3b-4ccd-ae32-5432e955716a',
    basePrice: 8078,
    dateFrom: '2023-12-15T15:36:04.701Z',
    dateTo: '2023-12-16T02:41:04.701Z',
    destination: 'e6a77307-ac42-4d4c-92fb-684b32157647',
    isFavorite: true,
    offers: [
      '5a3581b3-bb76-42e9-976c-92af11b21d06'
    ],
    type: 'check-in'
  },
  {
    id: '38d6658b-33cf-4496-a9ae-226378b7e438',
    basePrice: 8977,
    dateFrom: '2023-12-16T09:04:04.701Z',
    dateTo: '2023-12-16T18:07:04.701Z',
    destination: '8525951b-0798-4720-90cb-e255138f63aa',
    isFavorite: false,
    offers: [
      'e6ae2c76-a259-4de0-b816-189d0324c821',
      '8b5bf11e-995b-48ef-9261-0ba6b3cf1b9f'
    ],
    type: 'drive'
  },
  {
    id: '879c093e-6a1f-42eb-98a6-3f6a197bfdc2',
    basePrice: 2203,
    dateFrom: '2023-12-17T14:45:04.701Z',
    dateTo: '2023-12-18T12:59:04.701Z',
    destination: '725641a2-d0e6-42f5-9575-09dc2d20cf76',
    isFavorite: true,
    offers: [
      '3cb40b64-e480-4fff-9f18-8156e5c4e0de',
      '4aac35e9-e161-4da9-8c69-6fd2c40a465e',
      '81101dc4-8c37-48a4-8707-015ed5d84335',
      '91bd7e2d-1e94-4ca9-afbd-3bc281c0ab83'
    ],
    type: 'ship'
  },
  {
    id: '3a4191b3-1d2f-49e7-be5b-081d184b23ef',
    basePrice: 1560,
    dateFrom: '2023-12-19T14:43:04.701Z',
    dateTo: '2023-12-20T11:26:04.701Z',
    destination: '4e890f47-a8d3-4efc-9ed4-2e2bf2eeadf5',
    isFavorite: false,
    offers: [
      '525b9ce2-5919-4039-9495-2a931663302a',
      'cc002a26-9f8b-478f-b5e2-7dc4faa57b4c',
      '4305666f-a227-4a63-a600-9856bd1a5639'
    ],
    type: 'train'
  },
  {
    id: 'a1b732a1-78d9-4ed0-bd96-08e2c1ee7bc9',
    basePrice: 9438,
    dateFrom: '2023-12-21T08:58:04.701Z',
    dateTo: '2023-12-23T08:56:04.701Z',
    destination: '7f5e1612-f9bd-48a0-ba84-070f8a690f63',
    isFavorite: false,
    offers: [
      '525b9ce2-5919-4039-9495-2a931663302a',
      'cc002a26-9f8b-478f-b5e2-7dc4faa57b4c',
      '4305666f-a227-4a63-a600-9856bd1a5639'
    ],
    type: 'train'
  },
  {
    id: '636a41e9-2e11-4d49-8fdf-7a08af1b0596',
    basePrice: 6832,
    dateFrom: '2023-12-24T12:09:04.701Z',
    dateTo: '2023-12-25T03:05:04.701Z',
    destination: '7f5e1612-f9bd-48a0-ba84-070f8a690f63',
    isFavorite: true,
    offers: [
      'a3470ca1-9e12-4fb2-a57d-3472911ab61a'
    ],
    type: 'restaurant'
  },
  {
    id: '44df8f5e-1dc8-441f-8ffb-1ac8888cadba',
    basePrice: 9514,
    dateFrom: '2023-12-25T09:51:04.701Z',
    dateTo: '2023-12-25T17:36:04.701Z',
    destination: '7f5e1612-f9bd-48a0-ba84-070f8a690f63',
    isFavorite: false,
    offers: [],
    type: 'drive'
  },
  {
    id: 'f191f8ec-4b0d-451b-a000-9738e54eaaf8',
    basePrice: 9838,
    dateFrom: '2023-12-26T22:57:04.701Z',
    dateTo: '2023-12-28T23:02:04.701Z',
    destination: '725641a2-d0e6-42f5-9575-09dc2d20cf76',
    isFavorite: false,
    offers: [
      '1c5b2003-4d91-4ea9-9cdb-5061f3610785'
    ],
    type: 'flight'
  },
  {
    id: 'd04cdf67-c737-4485-aa87-ee8884184808',
    basePrice: 8162,
    dateFrom: '2023-12-30T15:00:04.701Z',
    dateTo: '2023-12-31T02:35:04.701Z',
    destination: 'a68720f8-ce39-4ed3-898d-ea9f50c0afec',
    isFavorite: true,
    offers: [
      '5d04657e-be30-4db7-b3ea-e961c94ceed4',
      'fcb41394-879a-4de4-afa7-a4ca4a0288c7',
      'a899dc84-65a1-413b-a3f6-697e0d62a2af',
      'bf3adb23-ca52-4725-90dd-c408a87a1d95',
      '5a3581b3-bb76-42e9-976c-92af11b21d06'
    ],
    type: 'check-in'
  },
  {
    id: 'c7fbcf8b-ed65-48ed-a648-f7a827163e55',
    basePrice: 7833,
    dateFrom: '2024-01-01T23:55:04.701Z',
    dateTo: '2024-01-02T13:17:04.701Z',
    destination: 'a68720f8-ce39-4ed3-898d-ea9f50c0afec',
    isFavorite: false,
    offers: [
      'b371fb66-c631-4bca-b1f8-f80f48692674',
      'bbc01c4e-2318-426b-bfef-6af93548e45c'
    ],
    type: 'bus'
  },
  {
    id: '9ecabb73-b5b2-4bbf-acdb-0f2d8470d3b3',
    basePrice: 2892,
    dateFrom: '2024-01-04T00:55:04.701Z',
    dateTo: '2024-01-05T17:08:04.701Z',
    destination: '14c3101b-69b0-4a44-9d13-eb881a8a6e85',
    isFavorite: true,
    offers: [],
    type: 'drive'
  },
  {
    id: '5ecc9a28-2016-4f3c-ae33-e4c8e187c80c',
    basePrice: 2519,
    dateFrom: '2024-01-06T03:13:04.701Z',
    dateTo: '2024-01-06T15:04:04.701Z',
    destination: '725641a2-d0e6-42f5-9575-09dc2d20cf76',
    isFavorite: false,
    offers: [],
    type: 'restaurant'
  },
  {
    id: 'c2ff1875-acf4-41f5-8737-5a1dd40427f3',
    basePrice: 3443,
    dateFrom: '2024-01-08T15:20:04.701Z',
    dateTo: '2024-01-09T23:09:04.701Z',
    destination: '725641a2-d0e6-42f5-9575-09dc2d20cf76',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: 'ca2f50e9-6363-4904-a864-f0850c4f1759',
    basePrice: 687,
    dateFrom: '2024-01-11T06:35:04.701Z',
    dateTo: '2024-01-13T06:41:04.701Z',
    destination: '4e890f47-a8d3-4efc-9ed4-2e2bf2eeadf5',
    isFavorite: false,
    offers: [],
    type: 'bus'
  },
  {
    id: '86b991d3-7352-441e-a7e0-2cee7e047d40',
    basePrice: 1727,
    dateFrom: '2024-01-14T21:31:04.701Z',
    dateTo: '2024-01-16T21:59:04.701Z',
    destination: 'd6410253-2c93-4f8d-a707-ccc143166bf4',
    isFavorite: false,
    offers: [],
    type: 'sightseeing'
  },
  {
    id: '37794137-b944-4b4c-9a3d-0136e39bd160',
    basePrice: 9936,
    dateFrom: '2024-01-18T05:49:04.701Z',
    dateTo: '2024-01-20T06:42:04.701Z',
    destination: '4e890f47-a8d3-4efc-9ed4-2e2bf2eeadf5',
    isFavorite: false,
    offers: [
      'effb2e14-3447-497b-a5bb-113083704bbd'
    ],
    type: 'taxi'
  },
  {
    id: '31b77091-082b-4162-a8aa-956036278803',
    basePrice: 7464,
    dateFrom: '2024-01-21T15:07:04.701Z',
    dateTo: '2024-01-22T13:54:04.701Z',
    destination: '725641a2-d0e6-42f5-9575-09dc2d20cf76',
    isFavorite: true,
    offers: [
      '8b5bf11e-995b-48ef-9261-0ba6b3cf1b9f'
    ],
    type: 'drive'
  },
  {
    id: '3be302f9-39e1-4154-9cb9-34748d501f66',
    basePrice: 7037,
    dateFrom: '2024-01-24T11:58:04.701Z',
    dateTo: '2024-01-25T05:21:04.701Z',
    destination: 'a68720f8-ce39-4ed3-898d-ea9f50c0afec',
    isFavorite: true,
    offers: [
      '5a3581b3-bb76-42e9-976c-92af11b21d06'
    ],
    type: 'check-in'
  },
  {
    id: 'ed472102-1225-4a63-b6ca-8645f603a485',
    basePrice: 9433,
    dateFrom: '2024-01-26T14:26:04.701Z',
    dateTo: '2024-01-28T09:22:04.701Z',
    destination: '3fe95771-be9c-4f32-a850-f4ecf2907f77',
    isFavorite: false,
    offers: [
      'cc002a26-9f8b-478f-b5e2-7dc4faa57b4c',
      '4305666f-a227-4a63-a600-9856bd1a5639'
    ],
    type: 'train'
  }
];

export { pointsMock };
