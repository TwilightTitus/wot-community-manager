import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver.js";
import {EXECUTERNAME} from "@default-js/defaultjs-expression-language/src/executer/ContextDeconstructorExecuter.js";

ExpressionResolver.defaultExecuter = EXECUTERNAME;