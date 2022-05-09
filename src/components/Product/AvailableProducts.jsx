import React from "react";

import ProductItem from "./ProductItem/ProductItem";

const DUMMY_PRODUCTS = [
    {
        id: "p1",
        name: "닌텐도 스위치 oled 화이트 새상품",
        time: 3,
        price: "450,000",
    },
    {
        id: "p2",
        name: "레고 테크닉 9394 레드 제트기",
        time: 5,
        price: "50,000",
    },
    {
        id: "p3",
        name: "i7-7700 컴퓨터 본체",
        time: 8,
        price: "480,000",
    },
    {
        id: "p4",
        name: "삼성 파브 40인치 TV",
        time: 11,
        price: "70,000",
    },
];

const AvailableProducts = () => {
    const productList = DUMMY_PRODUCTS.map((product) => (
        <ProductItem
            id={product.id}
            key={product.id}
            name={product.name}
            timestamp={product.time}
            price={product.price}
        />
    ));
    return <ul>{productList}</ul>;
};

export default AvailableProducts;
