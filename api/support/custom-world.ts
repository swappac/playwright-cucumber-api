import { setWorldConstructor } from '@cucumber/cucumber';
import type { APIRequestContext, APIResponse } from '@playwright/test';

class CustomWorld {
  baseUrl = '';
  request?: APIRequestContext;
  response?: APIResponse;
  responseBody?: any;
}

setWorldConstructor(CustomWorld);