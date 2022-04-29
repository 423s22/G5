import React from 'react';
import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export default function Index() {
    return (
      <Page>
        <Layout>
          <EmptyState // Empty state component
            heading="Create Product Options"
            
            image={img}
          >
            <p>Our app allows you to create as many product options as you need by treating every option as its own product. Follow the steps below to get started:</p>
            <b>
            <p>1. Create your base product using shopifys built in product maker. Set the base price, and feel free to add a limited amount of options using shopifys default option builder.
            See this tutorial for more info: https://help.shopify.com/en/manual/products/add-update-products </p>
            <b>
            <p>2. Using the same process as above, create additional products for each option add-on. For example if your base product was a hat, and you want to add a custom bedazzle add-on, 
              you would create a single product for the hat, and an additional product for the bedazzle add on.</p>
            <b>
            <p>3. Now it's time to group your products into a collection. Create a new collection using shopifys built in collection maker and title it after your base product, for example the hat collection. 
              See this tutorial on creating a new collection: https://help.shopify.com/en/manual/products/collections. After you've created the collection, add the base product and all the options
              to the collection by going to the product detail page, and adding each product to the collection. </p>
             <b>
             <p> Thats it! Now that all your options have been added to the collection, they should all be visible as add-ons on the storefront product page. 
             From there your customers will be able to add and remove add-ons to the cart as they like and the price will be reflected accordingly. </p> 
                
            
         </EmptyState>
        </Layout>
      </Page>
    ); 
};





