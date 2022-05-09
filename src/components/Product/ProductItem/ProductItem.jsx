import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@components/UI/Card";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const ProductItem = (props) => {
    return (
        <Link to={`/product/${props.id}`}>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Item>
                    <Card>
                        <Thumbnail>
                            <img src="" />
                        </Thumbnail>
                        <Description>
                            <h3>{props.name}</h3>
                            <Timestamp>{props.timestamp}분 전</Timestamp>
                            <Price>{props.price}</Price>
                        </Description>
                    </Card>
                </Item>
            </motion.div>
        </Link>
    );
};

export default ProductItem;

const Item = styled.li`
    margin: 2.4rem 0;
    cursor: pointer;
`;
const Thumbnail = styled.div`
    background: #f8f9fa;
    width: 11rem;
    height: 11rem;
    border-radius: 8px;
    margin-right: 2rem;
`;

const Description = styled.div`
    padding: 1.3rem 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    & > h3 {
        font-size: 1.6rem;
        color: #212529;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
    }
`;

const Timestamp = styled.div`
    font-size: 1.4rem;
    color: #bbb9b9;
    margin: 3px 0;
    margin-top: -20px;
`;

const Price = styled.div`
    font-size: 1.8rem;
    font-weight: 600;
    color: #5387be;
`;
