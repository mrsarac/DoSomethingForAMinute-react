"use client";

import { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";

export const IntercomProvider = () => {
  useEffect(() => {
    Intercom({ app_id: "rluo2u7s" });
  }, []);

  return null;
};
