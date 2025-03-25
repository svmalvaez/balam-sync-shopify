import { Card, Text, Badge, Button, BlockStack, InlineStack } from '@shopify/polaris'

interface IntegrationCardProps {
  title: string
  status: 'configured' | 'pending' | 'error'
  lastSync: string
  error?: string
  onConfigure?: () => void
}

export function IntegrationCard({ 
  title, 
  status, 
  lastSync, 
  error,
  onConfigure 
}: IntegrationCardProps) {
  const getBadge = () => {
    switch(status) {
      case 'configured':
        return <Badge tone="success">Configured</Badge>
      case 'pending':
        return <Badge tone="attention">Pending Setup</Badge>
      case 'error':
        return <Badge tone="critical">Error</Badge>
    }
  }

  return (
    <Card>
      <BlockStack gap="200">
        <InlineStack align="space-between">
          <Text variant="headingSm">{title}</Text>
          {getBadge()}
        </InlineStack>

        <BlockStack gap="200">
          <Text variant="bodySm" tone="subdued">
            Last sync: {lastSync}
          </Text>
          
          {error && (
            <Text variant="bodySm" tone="critical">
              Error: {error}
            </Text>
          )}

          <InlineStack gap="200">
            {status === 'pending' && (
              <Button variant="primary" onClick={onConfigure}>Configure</Button>
            )}
            {status === 'configured' && (
              <>
                <Button onClick={onConfigure}>Edit Configuration</Button>
                <Button>Sync Now</Button>
                <Button variant="plain" tone="critical">Disconnect</Button>
              </>
            )}
            {status === 'error' && (
              <>
                <Button tone="critical">Retry Connection</Button>
                <Button onClick={onConfigure}>Edit Configuration</Button>
              </>
            )}
          </InlineStack>
        </BlockStack>
      </BlockStack>
    </Card>
  )
}
