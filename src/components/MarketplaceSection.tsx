import { Card, Text, Badge, BlockStack } from '@shopify/polaris'
import { IntegrationCard } from './IntegrationCard'

export function MarketplaceSection() {
  return (
    <Card>
      <BlockStack gap="400">
        <Text variant="headingMd">Marketplaces</Text>
        
        <BlockStack gap="400">
          <IntegrationCard
            title="Liverpool"
            status="configured"
            lastSync="2024-01-10 10:30"
          />

          <IntegrationCard  
            title="Mercado Libre"
            status="pending"
            lastSync="-"
          />
        </BlockStack>
      </BlockStack>
    </Card>
  )
}
