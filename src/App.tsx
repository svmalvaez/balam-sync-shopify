import { Page, Layout, Card, Text, Badge } from '@shopify/polaris'
import { MarketplaceSection } from './components/MarketplaceSection'
import { ERPSection } from './components/ERPSection'
import { InvoicingSection } from './components/InvoicingSection'
import { CRMSection } from './components/CRMSection'

export default function App() {
  return (
    <Page title="Integration Dashboard">
      <Layout>
        <Layout.Section>
          <MarketplaceSection />
        </Layout.Section>
        
        <Layout.Section>
          <ERPSection />
        </Layout.Section>

        <Layout.Section>
          <InvoicingSection />
        </Layout.Section>

        <Layout.Section>
          <CRMSection />
        </Layout.Section>
      </Layout>
    </Page>
  )
}
