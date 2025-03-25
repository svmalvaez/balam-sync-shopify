import { Card, Text, Badge, BlockStack } from '@shopify/polaris'
import { IntegrationCard } from './IntegrationCard'
import { useState } from 'react'
import { ERPConfigModal } from './ERPConfigModal'

export function ERPSection() {
  const [configuring, setConfiguring] = useState<string | null>(null);

  return (
    <>
      <Card>
        <BlockStack gap="400">
          <Text variant="headingMd">ERP Systems</Text>
          
          <BlockStack gap="400">
            <IntegrationCard
              title="CONTPAQi"
              status="configured" 
              lastSync="2024-01-10 09:15"
              onConfigure={() => setConfiguring("CONTPAQi")}
            />

            <IntegrationCard
              title="Aspel SAE"
              status="error"
              lastSync="2024-01-09 15:20"
              error="Connection failed"
              onConfigure={() => setConfiguring("Aspel SAE")}
            />

            <IntegrationCard
              title="SAP Business One"
              status="pending"
              lastSync="-"
              onConfigure={() => setConfiguring("SAP Business One")}
            />
          </BlockStack>
        </BlockStack>
      </Card>

      <ERPConfigModal
        open={configuring !== null}
        onClose={() => setConfiguring(null)}
        erpSystem={configuring || ''}
      />
    </>
  )
}
