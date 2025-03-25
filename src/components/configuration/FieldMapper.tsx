import {
  BlockStack,
  Card,
  DataTable,
  Select,
  Button,
  TextField,
  InlineStack,
  Text,
} from '@shopify/polaris';
import { useState } from 'react';
import { getFieldsForEntity } from '../../utils/fieldMappings';

interface FieldMapperProps {
  entityType: string;
}

export function FieldMapper({ entityType }: FieldMapperProps) {
  const [mappings, setMappings] = useState(getFieldsForEntity(entityType));
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMappings = mappings.filter(mapping => 
    mapping.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mapping.required.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const rows = filteredMappings.map((field, index) => [
    <Text variant="bodyMd" fontWeight="bold">
      {field.description}
      {field.required && <Text tone="critical">*</Text>}
    </Text>,
    <Select
      label="Field mapping"
      labelHidden
      options={[
        {label: 'Select a field...', value: ''},
        {label: field.defaultMapping, value: field.defaultMapping},
        {label: 'Custom field...', value: 'custom'}
      ]}
      value={field.mapping || ''}
      onChange={(value) => {
        const newMappings = [...mappings];
        newMappings[index].mapping = value;
        setMappings(newMappings);
      }}
    />,
    <TextField
      label="Transform"
      labelHidden
      placeholder="Optional transform"
      value={field.transform || ''}
      onChange={(value) => {
        const newMappings = [...mappings];
        newMappings[index].transform = value;
        setMappings(newMappings);
      }}
    />
  ]);

  return (
    <BlockStack gap="400">
      <InlineStack align="start" gap="200">
        <div style={{flex: 1}}>
          <TextField
            label="Search fields"
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by field name..."
            clearButton
            onClearButtonClick={() => setSearchTerm('')}
          />
        </div>
        <Button>Import Mapping</Button>
        <Button>Export Mapping</Button>
      </InlineStack>

      <Card>
        <DataTable
          columnContentTypes={['text', 'text', 'text']}
          headings={['Field', 'ERP Field', 'Transform']}
          rows={rows}
          hoverable
        />
      </Card>

      <Text variant="bodySm" tone="subdued">
        * Required fields
      </Text>
    </BlockStack>
  );
}
