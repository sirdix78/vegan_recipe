"use strict";
// const app = require("./app");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
// const PORT = process.env.PORT || 5005;
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT ? Number(process.env.PORT) : 5005;
app_1.default.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
