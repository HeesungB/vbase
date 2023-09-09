import { Validator } from '@kyvejs/protocol';
import MyCustomRuntime from './runtime';

const runtime = new MyCustomRuntime();

new Validator(runtime).bootstrap();
