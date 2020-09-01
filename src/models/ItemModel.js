export default class ItemModel {
  constructor(entity) {
    Object.assign(
      this,
      {
        brand: 'Brand',
        title: 'Title',
        description: 'Description of item',
        descriptionFull: 'Full description of item',
        price: 0,
        currency: '$',
      },
      entity,
    );
  }
}
