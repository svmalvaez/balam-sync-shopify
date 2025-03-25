import { Card, Text, Badge, BlockStack } from '@shopify/polaris'
import { IntegrationCard } from './IntegrationCard'

export function CRMSection() {
  return (
    <Card>
      <BlockStack gap="400">
        <Text variant="headingMd">CRM</Text>
        
        <IntegrationCard
          title="HubSpot"
          status="configured"
          lastSync="2024-01-10 10:00"
        />
      </BlockStack>
    </Card>
  )
}
