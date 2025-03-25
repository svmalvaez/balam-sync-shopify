import {
  BlockStack,
  Card,
  Text,
  Button,
  InlineStack,
  Select,
  TextField,
  Banner,
  Link,
} from '@shopify/polaris';
import { useState } from 'react';
import { FieldMapper } from './FieldMapper';

interface FieldMappingStepProps {
  title: string;
  entityType: string;
  onBack: () => void;
  onNext: () => void;
}

export function FieldMappingStep({ 
  title, 
  entityType, 
  onBack, 
  onNext 
}: FieldMappingStepProps) {
  const [selectedPreset, setSelectedPreset] = useState('custom');
  
  return (
    <BlockStack gap="400">
      <Text variant="headingMd">{title} Field Mapping</Text>

      <Banner tone="info">
        Map your ERP {title.toLowerCase()} fields to our system fields. 
        <Link url="#" target="_blank">Learn more about field mapping</Link>
      </Banner>

      <Select
        label="Mapping Preset"
        options={[
          {label: 'Custom Mapping', value: 'custom'},
          {label: 'Default Mapping', value: 'default'},
          {label: 'Last Used Mapping', value: 'last'}
        ]}
        value={selectedPreset}
        onChange={setSelectedPreset}
      />

      <FieldMapper entityType={entityType} />

      <InlineStack align="end" gap="200">
        <Button onClick={onBack}>Back</Button>
        <Button variant="primary" onClick={onNext}>Next</Button>
      </InlineStack>
    </BlockStack>
  );
}
