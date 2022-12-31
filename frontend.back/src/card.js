import React from "react";
import "./index.css";
import { Card as BSCard } from "react-bootstrap";

export function Card({ bgcolor, header, status, body }) {
  return (
    <BSCard>
      <BSCard.Title>{header}</BSCard.Title>
    </BSCard>
  );
}

export default Card;
