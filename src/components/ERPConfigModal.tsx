import { Modal, Text, ProgressBar } from '@shopify/polaris';
import { useState } from 'react';
import { CredentialsStep } from './configuration/CredentialsStep';
import { FieldMappingStep } from './configuration/FieldMappingStep';
import { ReviewStep } from './configuration/ReviewStep';

interface ERPConfigModalProps {
  open: boolean;
  onClose: () => void;
  erpSystem: string;
}

export function ERPConfigModal({ open, onClose, erpSystem }: ERPConfigModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 9;

  const getStepContent = () => {
    switch(currentStep) {
      case 1:
        return <CredentialsStep onNext={() => setCurrentStep(2)} />;
      case 2:
        return <FieldMappingStep 
          title="Products" 
          entityType="products"
          onBack={() => setCurrentStep(1)}
          onNext={() => setCurrentStep(3)}
        />;
      case 3:
        return <FieldMappingStep 
          title="Locations" 
          entityType="locations"
          onBack={() => setCurrentStep(2)}
          onNext={() => setCurrentStep(4)}
        />;
      case 4:
        return <FieldMappingStep 
          title="Inventory" 
          entityType="inventory"
          onBack={() => setCurrentStep(3)}
          onNext={() => setCurrentStep(5)}
        />;
      case 5:
        return <FieldMappingStep 
          title="Orders" 
          entityType="orders"
          onBack={() => setCurrentStep(4)}
          onNext={() => setCurrentStep(6)}
        />;
      case 6:
        return <FieldMappingStep 
          title="Returns" 
          entityType="returns"
          onBack={() => setCurrentStep(5)}
          onNext={() => setCurrentStep(7)}
        />;
      case 7:
        return <FieldMappingStep 
          title="Payments" 
          entityType="payments"
          onBack={() => setCurrentStep(6)}
          onNext={() => setCurrentStep(8)}
        />;
      case 8:
        return <FieldMappingStep 
          title="Customers" 
          entityType="customers"
          onBack={() => setCurrentStep(7)}
          onNext={() => setCurrentStep(9)}
        />;
      case 9:
        return <ReviewStep 
          onBack={() => setCurrentStep(8)}
          onComplete={onClose}
        />;
      default:
        return null;
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Configure ${erpSystem}`}
      large
    >
      <Modal.Section>
        <div style={{marginBottom: '16px'}}>
          <ProgressBar 
            progress={Math.round((currentStep / totalSteps) * 100)} 
            size="small" 
          />
          <Text as="p" variant="bodySm" tone="subdued">
            Step {currentStep} of {totalSteps}
          </Text>
        </div>
        {getStepContent()}
      </Modal.Section>
    </Modal>
  );
}
