import { 
  Card, 
  FormLayout, 
  TextField, 
  Button, 
  BlockStack,
  InlineStack,
  Text,
  Banner
} from '@shopify/polaris';
import { useState } from 'react';

interface CredentialsStepProps {
  onNext: () => void;
}

export function CredentialsStep({ onNext }: CredentialsStepProps) {
  const [testing, setTesting] = useState(false);
  const [credentials, setCredentials] = useState({
    apiKey: '',
    apiSecret: '',
    host: '',
    port: '',
    database: '',
    username: '',
    password: ''
  });

  const handleTest = async () => {
    setTesting(true);
    // Simulate API test
    await new Promise(resolve => setTimeout(resolve, 1000));
    setTesting(false);
  };

  return (
    <BlockStack gap="400">
      <Text variant="headingMd">Connection Credentials</Text>
      
      <Banner tone="info">
        Please enter your ERP system credentials. All information is encrypted.
      </Banner>

      <FormLayout>
        <FormLayout.Group>
          <TextField
            label="API Key"
            value={credentials.apiKey}
            onChange={(value) => setCredentials({...credentials, apiKey: value})}
            autoComplete="off"
          />
          <TextField
            label="API Secret"
            value={credentials.apiSecret}
            onChange={(value) => setCredentials({...credentials, apiSecret: value})}
            type="password"
            autoComplete="off"
          />
        </FormLayout.Group>

        <FormLayout.Group>
          <TextField
            label="Host"
            value={credentials.host}
            onChange={(value) => setCredentials({...credentials, host: value})}
            autoComplete="off"
          />
          <TextField
            label="Port"
            value={credentials.port}
            onChange={(value) => setCredentials({...credentials, port: value})}
            type="number"
            autoComplete="off"
          />
        </FormLayout.Group>

        <TextField
          label="Database Name"
          value={credentials.database}
          onChange={(value) => setCredentials({...credentials, database: value})}
          autoComplete="off"
        />

        <FormLayout.Group>
          <TextField
            label="Username"
            value={credentials.username}
            onChange={(value) => setCredentials({...credentials, username: value})}
            autoComplete="off"
          />
          <TextField
            label="Password"
            value={credentials.password}
            onChange={(value) => setCredentials({...credentials, password: value})}
            type="password"
            autoComplete="off"
          />
        </FormLayout.Group>

        <InlineStack align="end" gap="200">
          <Button onClick={handleTest} loading={testing}>
            Test Connection
          </Button>
          <Button variant="primary" onClick={onNext}>
            Next
          </Button>
        </InlineStack>
      </FormLayout>
    </BlockStack>
  );
}
