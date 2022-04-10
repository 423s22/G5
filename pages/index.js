import React from 'react';
import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export default function Index() {
    return (
      <Page>
        <Layout>
          <EmptyState // Empty state component
            heading="Create Product Options"
            action={{
              content: 'Select product',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Select products to add options and variants.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
};





