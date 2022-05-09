import React from "react";
import Products from "@components/Product/Products";
import Layout from "layouts";
import { ProductContainer, Section } from "./style";

const Product = () => {
    return (
        <Layout>
            <Section>
                <ProductContainer>
                    <div className="flea-market-wrap">
                        <p className="article-title">중고거래</p>
                        <Products />
                    </div>
                </ProductContainer>
            </Section>
        </Layout>
    );
};

export default Product;
