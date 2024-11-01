import "./autoinstrumentation.js";

import { register } from "node:module";
register("@opentelemetry/instrumentation/hooks.mjs");
