import { Before, After } from "@cucumber/cucumber";
import { request } from "playwright";

Before(async function () {
  // Create a new request context before each scenario
  this.request = await request.newContext();
  this.baseUrl = "https://api.agify.io"});

After(async function () {
  // Clean up after each scenario
  await this.request.dispose();
});
