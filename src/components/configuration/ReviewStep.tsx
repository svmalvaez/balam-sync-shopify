import {
  BlockStack,
  Card,
  Text,
  Button,
  InlineStack,
  Banner,
  List,
} from '@shopify/polaris';
import { CheckIcon } from '@shopify/polaris-icons';

interface ReviewStepProps {
  onBack: () => void;
  onComplete: () => void;
}

export function ReviewStep({ onBack, onComplete }: ReviewStepProps) {
  return (
    <BlockStack gap="400">
      <Text variant="headingMd">Review Configuration</Text>

      <Banner tone="success" icon={CheckIcon}>
        All required fields have been mapped successfully.
      </Banner>

      <Card>
        <BlockStack gap="400">
          <Text variant="headingSm">Configuration Summary</Text>
          
          <List type="bullet">
            <List.Item>Connection credentials verified</List.Item>
            <List.Item>Products: 15 fields mapped</List.Item>
            <List.Item>Locations: 8 fields mapped</List.Item>
            <List.Item>Inventory: 6 fields mapped</List.Item>
            <List.Item>Orders: 12 fields mapped</List.Item>
            <List.Item>Returns: 8 fields mapped</List.Item>
            <List.Item>Payments: 10 fields mapped</List.Item>
            <List.Item>Customers: 14 fields mapped</List.Item>
            <List.Item>Deliveries: 9 fields mapped</List.Item>
          </List>
        </BlockStack>
      </Card>

      <InlineStack align="end" gap="200">
        <Button onClick={onBack}>Back</Button>
        <Button variant="primary" onClick={onComplete}>
          Complete Setup
        </Button>
      </InlineStack>
    </BlockStack>
  );
}
