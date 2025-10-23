import {   setWorldConstructor} from '@cucumber/cucumber';
import type { APIRequestContext } from '@playwright/test';  
class CustomWorld {
  baseUrl = '';
  request?: any;
  response?: any;
  responseBody?: any;
}
setWorldConstructor(CustomWorld);