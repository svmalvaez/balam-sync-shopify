import { Card, Text, Badge, BlockStack } from '@shopify/polaris'
import { IntegrationCard } from './IntegrationCard'

export function InvoicingSection() {
  return (
    <Card>
      <BlockStack gap="400">
        <Text variant="headingMd">Electronic Invoicing</Text>
        
        <IntegrationCard
          title="Facturama Multiemisor"
          status="configured"
          lastSync="2024-01-10 11:45"
        />
      </BlockStack>
    </Card>
  )
}
