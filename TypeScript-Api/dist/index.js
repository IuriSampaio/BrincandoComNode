"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console;
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    return res.send('<marquee>Hello cara</marquee>');
});
console.log("teste");
app.listen(3333);
