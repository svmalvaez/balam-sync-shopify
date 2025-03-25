interface FieldMapping {
  description: string;
  required: boolean;
  defaultMapping: string;
  mapping?: string;
  transform?: string;
}

const productFields: FieldMapping[] = [
  { description: 'SKU', required: true, defaultMapping: 'item_code' },
  { description: 'Name', required: true, defaultMapping: 'description' },
  { description: 'Description', required: false, defaultMapping: 'long_description' },
  { description: 'Price', required: true, defaultMapping: 'unit_price' },
  { description: 'Cost', required: true, defaultMapping: 'standard_cost' },
  { description: 'Category', required: false, defaultMapping: 'item_group' },
  { description: 'Brand', required: false, defaultMapping: 'manufacturer' },
  { description: 'Weight', required: false, defaultMapping: 'weight' },
  { description: 'Dimensions', required: false, defaultMapping: 'dimensions' },
  { description: 'UPC', required: false, defaultMapping: 'barcode' }
];

const locationFields: FieldMapping[] = [
  { description: 'Code', required: true, defaultMapping: 'warehouse_code' },
  { description: 'Name', required: true, defaultMapping: 'warehouse_name' },
  { description: 'Address', required: true, defaultMapping: 'address' },
  { description: 'City', required: true, defaultMapping: 'city' },
  { description: 'State', required: true, defaultMapping: 'state' },
  { description: 'Country', required: true, defaultMapping: 'country' },
  { description: 'Zip Code', required: true, defaultMapping: 'postal_code' }
];

const inventoryFields: FieldMapping[] = [
  { description: 'Product SKU', required: true, defaultMapping: 'item_code' },
  { description: 'Location Code', required: true, defaultMapping: 'warehouse_code' },
  { description: 'Quantity', required: true, defaultMapping: 'on_hand' },
  { description: 'Reserved', required: false, defaultMapping: 'committed' },
  { description: 'Available', required: true, defaultMapping: 'available' }
];

export function getFieldsForEntity(entityType: string): FieldMapping[] {
  switch(entityType) {
    case 'products':
      return productFields;
    case 'locations':
      return locationFields;
    case 'inventory':
      return inventoryFields;
    default:
      return [];
  }
}
