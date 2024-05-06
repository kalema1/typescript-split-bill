import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import SplitBillForm from "../../src/components/SplitBillForm";
import { BillProvider } from "../../src/contexts/BillContext";
import { FriendsProvider } from "../../src/contexts/FriendsContext";

describe("SplitBillForm", () => {
  const renderComponent = () => {
    render(
      <BillProvider>
        <FriendsProvider>
          <SplitBillForm />
        </FriendsProvider>
      </BillProvider>
    );

    return {};
  };
});
