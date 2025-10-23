import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('base url is set', async function () {
  // The base URL is already set in the Before hook
  this.baseUrl = 'https://api.agify.io';
});

When('I request user age with name {string}', async function (name: string) {
  const response = await this.request.get(`${this.baseUrl}?name=${name}`);
  this.response = response;
  this.responseBody = await response.json();
});

When(
  'I request user age with name {string} and country id {string}',
  async function (name: string, country: string) {
    const response = await this.request.get(
      `${this.baseUrl}?name=${name}&country_id=${country}`,
    );
    this.response = response;
    this.responseBody = await response.json();
  },
);

When(
  'I request user age with names {string}, {string}, {string}',
  async function (name1: string, name2: string, name3: string) {
    const response = await this.request.get(
      `${this.baseUrl}?name[]=${name1}&name[]=${name2}&name[]=${name3}`,
    );
    this.response = response;
    this.responseBody = await response.json();
  },
);

When('I request user age without name', async function () {
  const response = await this.request.get(`${this.baseUrl}`);
  this.response = response;
  this.responseBody = await response.json();
});

When(
  'I request user age with name {string} and invalid api token {string}',
  async function (name: string, apiToken: string) {
    const response = await this.request.get(
      `${this.baseUrl}?name=${name}&apikey=${apiToken}`,
    );
    this.response = response;
    this.responseBody = await response.json();
  },
);

Then(
  'the api response with status code {int}',
  async function (statusCode: number) {
    expect(this.response.status()).toBe(statusCode);
  },
);

Then('the response should contain age and count fields', async function () {
  console.log(this.responseBody);
  expect(this.responseBody).toHaveProperty('age');
  expect(this.responseBody).toHaveProperty('count');
});

Then(
  'the response should contain age and count fields for each name',
  async function () {
    console.log(this.responseBody);
    for (const entry of this.responseBody) {
      expect(entry).toHaveProperty('age');
      expect(entry).toHaveProperty('count');
    }
  },
);

Then(
  'the response should contain error message {string}',
  async function (errMessage: string) {
    expect(this.responseBody).toHaveProperty('error');
    expect(await this.response.json()).toEqual(
      expect.objectContaining({
        error: errMessage,
      }),
    );
  },
);

Then('the response headers should be content-type {string}', async function (contentType: string) {
  const headers = this.response.headers();
  console.log(headers);
  expect(headers['content-type']).toBe(contentType);
});
           
